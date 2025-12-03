# GitHub Setup Instructions

This guide will help you push your CC&C Solutions website to GitHub.

## Prerequisites

- GitHub account (create one at https://github.com if you don't have one)
- Git installed on your local machine
- Your project code (already in Replit)

## Step 1: Download Your Code from Replit

1. In Replit, open the Shell and run:
   ```bash
   zip -r ccandcsolutions-website.zip . -x "*.git*" -x "node_modules/*" -x "dist/*" -x ".replit" -x "replit.nix"
   ```

2. Download the zip file from Replit to your local machine

3. Extract the zip file to a folder on your computer

## Step 2: Create a GitHub Repository

1. Go to https://github.com and sign in
2. Click the "+" icon in the top right → "New repository"
3. Fill in the details:
   - **Repository name**: `ccandcsolutions-website` (or your preferred name)
   - **Description**: "CC&C Solutions Corporate Website - Enterprise Architecture Consulting"
   - **Visibility**: Choose Private (recommended) or Public
   - **DO NOT** check "Initialize this repository with a README" (you already have code)
   - **DO NOT** add .gitignore or license (already included in your project)
4. Click "Create repository"

## Step 3: Push Your Code to GitHub

Open a terminal/command prompt in your extracted project folder and run:

### First Time Setup (if Git is not initialized)

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit - CC&C Solutions website"

# Add your GitHub repository as remote (replace with your actual URL)
git remote add origin https://github.com/YOUR_USERNAME/ccandcsolutions-website.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Alternative: Using Replit's Git Integration

If you want to push directly from Replit:

1. In Replit, click on the "Version Control" tab (Git icon in left sidebar)
2. Click "Connect to GitHub"
3. Authorize Replit to access your GitHub
4. Create new repository or connect to existing one
5. Make initial commit
6. Push to GitHub

## Step 4: Verify Your Code on GitHub

1. Go to your GitHub repository URL
2. Verify all files are uploaded correctly
3. Check that sensitive files (.env, etc.) are NOT uploaded (they should be in .gitignore)

## Step 5: Set Up GitHub for Hostinger

Once your code is on GitHub, you can use it with Hostinger:

### Option A: Hostinger's GitHub Integration

1. Log into Hostinger control panel
2. Go to GitHub Integration section
3. Connect your GitHub account
4. Select your repository
5. Choose branch (main)
6. Set up automatic deployments

### Option B: Manual Deployment

1. Clone repository on your local machine
2. Build the project: `npm run build`
3. Upload `dist` folder and necessary files to Hostinger via FTP

## Important Files to Keep Private

These files are already in .gitignore and should NEVER be pushed to GitHub:

- `.env` - Environment variables
- `node_modules/` - Dependencies (can be reinstalled)
- `dist/` - Build output (generated each time)
- `.replit` and `replit.nix` - Replit-specific files

## Ongoing Development Workflow

### Making Changes

1. Make changes to your code
2. Test locally
3. Commit changes:
   ```bash
   git add .
   git commit -m "Description of what you changed"
   git push origin main
   ```

### Collaborating with Others

1. Add collaborators in GitHub repository settings
2. They can clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ccandcsolutions-website.git
   cd ccandcsolutions-website
   npm install
   ```

3. Install dependencies and run:
   ```bash
   npm install
   npm run dev
   ```

## Troubleshooting

### "Permission denied" error
- Make sure you're authenticated with GitHub
- Use HTTPS URL or set up SSH keys
- Check: `git remote -v` to see your remote URL

### Large files rejected
- GitHub has a 100MB file size limit
- Use `.gitignore` to exclude large files
- For large assets, use Git LFS or external storage

### Merge conflicts
- Pull latest changes before making new commits:
  ```bash
  git pull origin main
  ```
- Resolve conflicts manually if they occur
- Commit the resolved version

## Helpful Git Commands

```bash
# Check status of files
git status

# See what changed
git diff

# View commit history
git log

# Pull latest changes from GitHub
git pull origin main

# Create a new branch
git checkout -b feature-name

# Switch branches
git checkout main

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes
git reset --hard HEAD
```

## Repository Best Practices

1. **Commit Often**: Make small, focused commits
2. **Write Clear Messages**: Describe what and why, not how
3. **Use Branches**: Create feature branches for major changes
4. **Review Before Pushing**: Check `git status` and `git diff`
5. **Keep .gitignore Updated**: Add patterns for files to ignore
6. **Protect Main Branch**: Use branch protection rules on GitHub

## Next Steps

After your code is on GitHub:

1. Review `HOSTINGER_DEPLOYMENT.md` for deployment instructions
2. Set up environment variables on Hostinger
3. Configure continuous deployment (optional)
4. Share repository with team members (if applicable)

## Support

- Git Documentation: https://git-scm.com/doc
- GitHub Guides: https://guides.github.com/
- Git Cheat Sheet: https://education.github.com/git-cheat-sheet-education.pdf
