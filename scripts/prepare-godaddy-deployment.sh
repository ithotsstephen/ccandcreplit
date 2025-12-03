#!/bin/bash

echo "🚀 Preparing files for GoDaddy static hosting deployment..."
echo ""

# Create deployment package directory
DEPLOY_DIR="godaddy-deployment-package"
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"

echo "📦 Copying built files..."
# Copy the built site
cp -r dist/* "$DEPLOY_DIR/"

echo "🖼️  Copying available images..."
# Copy available images from attached_assets
mkdir -p "$DEPLOY_DIR/assets/Images"
mkdir -p "$DEPLOY_DIR/assets/videos"

# Copy the images we found
if [ -f "attached_assets/Global Reach_1760673087332.png" ]; then
    cp "attached_assets/Global Reach_1760673087332.png" "$DEPLOY_DIR/assets/Images/Global Reach.png"
    echo "✅ Copied Global Reach.png"
fi

if [ -f "attached_assets/Mamta photo_1760669005216.png" ]; then
    cp "attached_assets/Mamta photo_1760669005216.png" "$DEPLOY_DIR/assets/Images/Mamta photo.png"
    echo "✅ Copied Mamta photo.png"
fi

if [ -f "attached_assets/Logo_No BG_1759790733343.png" ]; then
    cp "attached_assets/Logo_No BG_1759790733343.png" "$DEPLOY_DIR/assets/Images/CC&CLogo.png"
    echo "✅ Copied CC&CLogo.png"
fi

echo ""
echo "📋 Creating file checklist..."
cat > "$DEPLOY_DIR/UPLOAD_CHECKLIST.txt" << EOF
GoDaddy Upload Checklist
========================

1. Upload ALL contents of this folder to your GoDaddy hosting root directory

2. Additional images you need to download from Replit and upload:
   
   From Replit Object Storage -> Upload to /assets/Images/:
   □ About.jpg
   □ Vish Photo.png
   □ Nishan.png
   □ Ramesh.png
   □ ArchIQ.png
   □ AdviseIQ.png
   □ StratIQ.png
   □ Banking.jpg
   □ Manufacturing.jpg
   □ Insurance.jpg
   □ BIAN Award.jpeg
   
   From Replit Object Storage -> Upload to /assets/videos/:
   □ Background BG Video.mp4
   
   Event images and other assets as needed.

3. Test your site after upload!

Files already included:
✅ Global Reach.png
✅ Mamta photo.png
✅ CC&C Logo Original.png

Directory structure created:
- index.html (main site file)
- assets/css/ (stylesheets)
- assets/js/ (JavaScript)
- assets/Images/ (your images go here)
- assets/videos/ (your videos go here)
- data/ (JSON data files)
EOF

echo "✅ Deployment package ready!"
echo ""
echo "📂 Next steps:"
echo "1. Check the '$DEPLOY_DIR' folder"
echo "2. Read 'UPLOAD_CHECKLIST.txt' for remaining files needed"
echo "3. Upload everything in '$DEPLOY_DIR' to your GoDaddy hosting"
echo "4. Download missing images from Replit and upload to /assets/Images/"
echo ""
echo "🎉 Your site will be ready on GoDaddy!"