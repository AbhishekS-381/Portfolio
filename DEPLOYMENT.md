# 🚀 GitHub Pages Deployment Guide

## Quick Setup

### Step 1: Configure GitHub Repository

1. Go to your GitHub repository: `https://github.com/AbhishekS-381/Portfolio`
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### Step 2: Push Your Code

```bash
# Check git status
git status

# Add all files
git add .

# Commit changes
git commit -m "Setup GitHub Pages deployment"

# Push to main branch
git push origin main
```

### Step 3: Monitor Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually takes 1-2 minutes)
4. Once complete, your site will be live at: `https://abhisheks-381.github.io/Portfolio/`

## Files Configured for Deployment

✅ **`.gitignore`** - Properly configured to ignore:
- `node_modules/`
- `dist/` (build output)
- Environment files
- Editor files
- OS files

✅ **`vite.config.js`** - Base path set to `/Portfolio/`

✅ **`.github/workflows/deploy.yml`** - GitHub Actions workflow for automatic deployment

✅ **`package.json`** - Updated with:
- Project name: `abhishek-portfolio`
- Version: `1.0.0`
- Deploy script (optional manual deployment)

## Troubleshooting

### Issue: 404 Error on Deployed Site

**Solution**: Make sure the `base` path in `vite.config.js` matches your repository name:
```javascript
base: '/Portfolio/', // Must match your repo name
```

### Issue: Workflow Fails

**Solution**: Check that GitHub Pages is enabled in repository settings and source is set to "GitHub Actions"

### Issue: Assets Not Loading

**Solution**: Ensure all asset paths are relative and the base path is correctly set in `vite.config.js`

## Manual Deployment (Alternative)

If you prefer to deploy manually without GitHub Actions:

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Run deploy command:
```bash
npm run deploy
```

This will build and push the `dist` folder to the `gh-pages` branch.

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings with your custom domain

## Updating Your Site

Every time you push to the `main` branch, GitHub Actions will automatically rebuild and redeploy your site.

```bash
# Make changes to your code
# ...

# Commit and push
git add .
git commit -m "Update portfolio"
git push origin main

# Wait for automatic deployment (1-2 minutes)
```

## Live Site

Once deployed, your portfolio will be accessible at:
**https://abhisheks-381.github.io/Portfolio/**

---

🎉 **Congratulations!** Your portfolio is now live on GitHub Pages!
