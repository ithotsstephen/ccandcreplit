import { Storage, File } from "@google-cloud/storage";
import { Response } from "express";

const REPLIT_SIDECAR_ENDPOINT = "http://127.0.0.1:1106";

// Initialize GCS client with appropriate authentication based on environment
function createStorageClient(): Storage {
  // Check if we have Service Account credentials (for Hostinger/production)
  const gcsCredentialsJson = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
  
  if (gcsCredentialsJson) {
    // Production mode: Use Service Account credentials
    console.log("🔧 Using GCS Service Account authentication (Production)");
    try {
      const credentials = JSON.parse(gcsCredentialsJson);
      return new Storage({
        credentials,
        projectId: credentials.project_id,
      });
    } catch (error) {
      console.error("❌ Failed to parse GCS credentials:", error);
      throw new Error("Invalid GOOGLE_APPLICATION_CREDENTIALS_JSON format");
    }
  } else {
    // Development mode: Use Replit sidecar authentication
    console.log("🔧 Using Replit sidecar authentication (Development)");
    return new Storage({
      credentials: {
        audience: "replit",
        subject_token_type: "access_token",
        token_url: `${REPLIT_SIDECAR_ENDPOINT}/token`,
        type: "external_account",
        credential_source: {
          url: `${REPLIT_SIDECAR_ENDPOINT}/credential`,
          format: {
            type: "json",
            subject_token_field_name: "access_token",
          },
        },
        universe_domain: "googleapis.com",
      },
      projectId: "",
    });
  }
}

// The object storage client is used to interact with the object storage service.
export const objectStorageClient = createStorageClient();

export class ObjectNotFoundError extends Error {
  constructor() {
    super("Object not found");
    this.name = "ObjectNotFoundError";
    Object.setPrototypeOf(this, ObjectNotFoundError.prototype);
  }
}

// The object storage service is used to interact with the object storage service.
export class ObjectStorageService {
  constructor() {}

  // Gets the public object search paths.
  getPublicObjectSearchPaths(): Array<string> {
    const pathsStr = process.env.PUBLIC_OBJECT_SEARCH_PATHS || "";
    const paths = Array.from(
      new Set(
        pathsStr
          .split(",")
          .map((path) => path.trim())
          .filter((path) => path.length > 0)
      )
    );
    if (paths.length === 0) {
      throw new Error(
        "PUBLIC_OBJECT_SEARCH_PATHS not set. Create a bucket in 'Object Storage' " +
          "tool and set PUBLIC_OBJECT_SEARCH_PATHS env var (comma-separated paths)."
      );
    }
    return paths;
  }

  // Search for a public object from the search paths.
  async searchPublicObject(filePath: string): Promise<File | null> {
    for (const searchPath of this.getPublicObjectSearchPaths()) {
      const fullPath = `${searchPath}/${filePath}`;

      // Full path format: /<bucket_name>/<object_name>
      const { bucketName, objectName } = parseObjectPath(fullPath);
      const bucket = objectStorageClient.bucket(bucketName);
      const file = bucket.file(objectName);

      // Check if file exists
      const [exists] = await file.exists();
      if (exists) {
        return file;
      }
    }

    return null;
  }

  // List files in a public directory - improved version that works with different directory structures
  async listPublicFiles(directory: string): Promise<string[]> {
    const files: string[] = [];
    
    for (const searchPath of this.getPublicObjectSearchPaths()) {
      const fullPath = `${searchPath}/${directory}`;
      const { bucketName, objectName } = parseObjectPath(fullPath);
      const bucket = objectStorageClient.bucket(bucketName);
      
      try {
        console.log(`Searching for files in: ${fullPath} (bucket: ${bucketName}, prefix: ${objectName})`);
        
        // Try different approaches to find files
        const approaches = [
          // Approach 1: Files directly in the prefix folder
          { prefix: objectName, delimiter: undefined },
          // Approach 2: Files with trailing slash  
          { prefix: `${objectName}/`, delimiter: undefined },
          // Approach 3: All files with any nested structure
          { prefix: objectName, delimiter: '/' },
          // Approach 4: Root level search
          { prefix: '', delimiter: undefined }
        ];
        
        for (const approach of approaches) {
          try {
            const [bucketFiles] = await bucket.getFiles(approach);
            console.log(`Approach ${approaches.indexOf(approach) + 1}: Found ${bucketFiles.length} files`);
            
            for (const file of bucketFiles) {
              console.log(`Checking file: ${file.name}`);
              // Extract just the filename from the full path
              const fileName = file.name.split('/').pop();
              
              // Check if it's in the logos directory and is a client logo file
              const isInLogosDir = file.name.includes('logos/') || file.name.includes(`${directory}/`);
              const isClientLogo = fileName && fileName.startsWith('client-') && 
                  (fileName.endsWith('.png') || fileName.endsWith('.jpg') || 
                   fileName.endsWith('.jpeg') || fileName.endsWith('.gif') || 
                   fileName.endsWith('.svg'));
                   
              if (isInLogosDir && isClientLogo) {
                console.log(`✅ Found valid client logo: ${fileName}`);
                files.push(fileName);
              }
            }
          } catch (approachError) {
            console.log(`Approach ${approaches.indexOf(approach) + 1} failed:`, (approachError as Error).message);
            continue;
          }
        }
        
      } catch (error) {
        console.error(`Error listing files in ${fullPath}:`, error);
        continue;
      }
    }
    
    return Array.from(new Set(files)); // Remove duplicates
  }

  // Downloads an object to the response.
  async downloadObject(file: File, res: Response, cacheTtlSec: number = 3600) {
    try {
      // Get file metadata
      const [metadata] = await file.getMetadata();
      
      // Set appropriate headers
      res.set({
        "Content-Type": metadata.contentType || "application/octet-stream",
        "Content-Length": metadata.size,
        "Cache-Control": `public, max-age=${cacheTtlSec}`,
      });

      // Stream the file to the response
      const stream = file.createReadStream();

      stream.on("error", (err: Error) => {
        console.error("Stream error:", err);
        if (!res.headersSent) {
          res.status(500).json({ error: "Error streaming file" });
        }
      });

      stream.pipe(res);
    } catch (error) {
      console.error("Error downloading file:", error);
      if (!res.headersSent) {
        res.status(500).json({ error: "Error downloading file" });
      }
    }
  }
}

export function parseObjectPath(path: string): {
  bucketName: string;
  objectName: string;
} {
  if (!path.startsWith("/")) {
    path = `/${path}`;
  }
  const pathParts = path.split("/");
  if (pathParts.length < 3) {
    throw new Error("Invalid path: must contain at least a bucket name");
  }

  const bucketName = pathParts[1];
  const objectName = pathParts.slice(2).join("/");

  return {
    bucketName,
    objectName,
  };
}