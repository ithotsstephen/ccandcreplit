#!/bin/bash

# Build static website for deployment at /newwebsitetest subdirectory
# Sets environment variables for static build mode

echo "🚀 Building static website for /newwebsitetest deployment..."
echo ""

# Set environment variables for static build
export VITE_STATIC_BUILD=true
export VITE_BASE_PATH=/newwebsitetest/
export NODE_ENV=production

# Run export script to get latest data
echo "📦 Exporting latest content data..."
tsx scripts/export-static-data.ts
if [ $? -ne 0 ]; then
  echo "❌ Data export failed!"
  exit 1
fi
echo ""

# Convert image paths to direct GCS URLs
echo "🖼️  Converting image paths to GCS URLs..."
tsx scripts/prepare-static-images.ts
if [ $? -ne 0 ]; then
  echo "❌ Image path conversion failed!"
  exit 1
fi
echo ""

# Build the frontend
echo "🏗️  Building frontend with Vite..."
vite build --base=/newwebsitetest/
if [ $? -ne 0 ]; then
  echo "❌ Frontend build failed!"
  exit 1
fi
echo ""

# Create deployment package
echo "📦 Creating deployment package..."
rm -rf deploy-package
mkdir -p deploy-package/newwebsitetest

# Copy built files from dist/public (where Vite outputs according to config)
echo "  Copying built files from dist/public..."
cp -r dist/public/* deploy-package/newwebsitetest/

# Copy data files to the build
echo "  Copying data files..."
mkdir -p deploy-package/newwebsitetest/data
cp -r client/public/data/* deploy-package/newwebsitetest/data/

# Create .htaccess for proper routing
cat > deploy-package/newwebsitetest/.htaccess << 'EOF'
# Enable mod_rewrite
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /newwebsitetest/
  
  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Rewrite everything else to index.html for SPA routing
  RewriteRule ^ index.html [L]
</IfModule>

# Set caching headers
<IfModule mod_expires.c>
  ExpiresActive On
  
  # Images
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  
  # CSS and JavaScript
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  
  # Fonts
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType font/ttf "access plus 1 year"
  
  # Default
  ExpiresDefault "access plus 2 days"
</IfModule>

# Compress text files
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json
</IfModule>
EOF

# Create README
cat > deploy-package/README.txt << 'EOF'
CC&C Solutions Website - Static Build for Testing
==================================================

This package contains the static website build for testing at:
www.ccandcsolutions.com/newwebsitetest

DEPLOYMENT INSTRUCTIONS:
========================

1. Connect to your Hostinger hosting via FTP or File Manager

2. Navigate to the public_html directory (or your website root)

3. Upload the entire "newwebsitetest" folder to public_html/
   
   Your structure should look like:
   public_html/
   ├── newwebsitetest/
   │   ├── index.html
   │   ├── assets/
   │   ├── data/
   │   └── .htaccess

4. The website should now be accessible at:
   https://www.ccandcsolutions.com/newwebsitetest

5. Test all pages and features:
   - Navigation works
   - Images load correctly
   - Contact form submits successfully
   - All links work properly

NOTES:
======

- The .htaccess file ensures proper routing for the single-page application
- Static data is loaded from the /data directory
- Images are served from Google Cloud Storage
- Contact form uses Formspree service (configured separately)

KNOWN LIMITATIONS (Static Version):
====================================

- No CMS/Admin panel (requires backend server)
- No AI chatbot (requires OpenAI API access)
- Content updates require rebuilding the static site

For questions or support, contact: anish@ccandcsolutions.com
EOF

# Create compressed archive
echo "🗜️  Creating compressed archive..."
cd deploy-package
tar -czf ../ccandcsolutions-static-website.tar.gz newwebsitetest/ README.txt
cd ..

echo ""
echo "✅ Static build complete!"
echo ""
echo "📁 Output location:"
echo "   - Folder: ./deploy-package/newwebsitetest/"
echo "   - Archive: ./ccandcsolutions-static-website.tar.gz"
echo ""
echo "📊 Package contents:"
du -sh deploy-package/newwebsitetest 2>/dev/null || echo "   (size calculation not available)"
echo ""
echo "🚀 Next steps:"
echo "   1. Download ccandcsolutions-static-website.tar.gz"
echo "   2. Extract the archive on your computer"
echo "   3. Upload the 'newwebsitetest' folder to Hostinger public_html/"
echo "   4. Test at www.ccandcsolutions.com/newwebsitetest"
echo ""
