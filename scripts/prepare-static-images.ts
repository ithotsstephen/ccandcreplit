#!/usr/bin/env tsx
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'client', 'public', 'data');

// Try to get bucket name from client logos JSON first, fall back to env var
function getBucketName(): string {
  // Try to read bucket name from existing client-logos.json
  const logosPath = path.join(DATA_DIR, 'client-logos.json');
  if (fs.existsSync(logosPath)) {
    try {
      const logos = JSON.parse(fs.readFileSync(logosPath, 'utf-8'));
      if (logos.length > 0 && logos[0].logoPath) {
        // Extract bucket name from path like /api/objects/public/logos/file.png
        const match = logos[0].logoPath.match(/\/api\/objects\/public/);
        if (match) {
          // Get bucket name from environment or use a placeholder
          const bucketName = process.env.DEFAULT_OBJECT_STORAGE_BUCKET_ID;
          if (bucketName) {
            return bucketName;
          }
        }
      }
    } catch (error) {
      // Ignore errors, fall through to environment variable
    }
  }
  
  return process.env.DEFAULT_OBJECT_STORAGE_BUCKET_ID || '';
}

const BUCKET_NAME = getBucketName();

// Convert /api/objects/public/... paths to direct GCS URLs
function convertToGCSUrl(apiPath: string): string {
  // Extract the file path from /api/objects/public/...
  const match = apiPath.match(/\/api\/objects\/public\/(.+)/);
  if (match) {
    const filePath = match[1];
    // Return direct GCS public URL
    return `https://storage.googleapis.com/${BUCKET_NAME}/public/${filePath}`;
  }
  return apiPath;
}

function processJSONFile(filename: string) {
  const filePath = path.join(DATA_DIR, filename);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⏭️  Skipping ${filename} (not found)`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  let data = JSON.parse(content);

  // Check if data is an array
  if (Array.isArray(data)) {
    data = data.map(item => {
      // Update logoPath in client logos
      if (item.logoPath) {
        item.logoPath = convertToGCSUrl(item.logoPath);
      }
      // Update imageUrl in blog posts
      if (item.imageUrl && item.imageUrl.startsWith('/api/objects/')) {
        item.imageUrl = convertToGCSUrl(item.imageUrl);
      }
      // Update image in case studies
      if (item.image && item.image.startsWith('/api/objects/')) {
        item.image = convertToGCSUrl(item.image);
      }
      return item;
    });
  }

  // Write updated content
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`✅ Updated ${filename}`);
}

console.log('🔧 Converting image paths to direct GCS URLs...\n');

if (!BUCKET_NAME) {
  console.warn('⚠️  WARNING: DEFAULT_OBJECT_STORAGE_BUCKET_ID environment variable not set!');
  console.warn('   Image paths will NOT be converted to GCS URLs.');
  console.warn('   This is OK if you plan to manually set up Formspree or use local images.');
  console.warn('   To convert paths, run:');
  console.warn('   DEFAULT_OBJECT_STORAGE_BUCKET_ID=your-bucket-name bash scripts/build-static.sh\n');
  process.exit(0); // Exit gracefully, not an error
}

console.log(`📦 Using bucket: ${BUCKET_NAME}\n`);

// Process all JSON files that might contain image paths
processJSONFile('client-logos.json');
processJSONFile('blog-posts.json');
processJSONFile('case-studies.json');

console.log('\n✅ Image path conversion complete!');
console.log('\n⚠️  IMPORTANT: To make images work in static build:');
console.log('1. Make your GCS bucket publicly accessible');
console.log('2. Follow instructions in GCS_STATIC_SETUP.md');
console.log('');
