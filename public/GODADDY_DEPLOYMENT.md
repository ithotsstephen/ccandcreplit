# GoDaddy Static Hosting Deployment Guide

## Upload Instructions

1. **Login to GoDaddy cPanel**
   - Access your GoDaddy hosting account
   - Open File Manager
   - Navigate to `public_html` directory

2. **Upload Files**
   - Extract the ZIP file contents
   - Upload ALL files to `public_html/` directory
   - Ensure `.htaccess` file is uploaded (check "Show hidden files")

3. **File Structure**
   ```
   public_html/
   ├── .htaccess          # SPA routing configuration
   ├── index.html         # Main React app
   ├── 404.html          # Fallback error page
   ├── assets/           # CSS, JS, images, videos
   ├── data/             # JSON data files
   └── _redirects        # Additional fallback
   ```

## GoDaddy Specific Notes

- **SSL Certificate**: Uncomment HTTPS redirect lines in `.htaccess` if SSL is enabled
- **File Permissions**: GoDaddy automatically sets correct permissions
- **Subdomain Support**: Configuration works for subdomains too
- **Caching**: Basic caching rules included for performance

## Testing Routes

After upload, test these URLs:
- `https://yourdomain.com/`
- `https://yourdomain.com/about`
- `https://yourdomain.com/training/it4it-foundation`
- `https://yourdomain.com/contact`

All should load the React app correctly.

## Troubleshooting

1. **404 Errors**: Ensure `.htaccess` is uploaded and readable
2. **Blank Page**: Check browser console for JavaScript errors
3. **SSL Issues**: Update HTTPS redirect in `.htaccess`
4. **Slow Loading**: GoDaddy CDN may take time to propagate

## Support

For GoDaddy-specific issues, contact GoDaddy support with this deployment package.