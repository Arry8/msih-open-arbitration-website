# MSIH Oaths Website - Setup Guide

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right → "New repository"
3. Repository name: `msih-oaths-website`
4. Description: "MSIH Open Arbitration Database website"
5. Choose: **Public** (or Private if preferred)
6. **DO NOT** initialize with README, .gitignore, or license
7. Click "Create repository"

## Step 2: Initialize Local Repository

```bash
# Navigate to the project directory
cd ~/.openclaw/workspace/msih-oaths-website

# Initialize git
git init

# Add all files
git add .

# Commit initial version
git commit -m "Initial commit: MSIH Open Arbitration website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/msih-oaths-website.git

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" → "Pages"
3. Under "Source", select "Deploy from a branch"
4. Branch: `main` → `/` (root)
5. Click "Save"
6. Your site will be available at: `https://YOUR_USERNAME.github.io/msih-oaths-website/`

## Step 4: Create Initial GitHub Issues

You can create issues manually through the GitHub web interface, or use the GitHub CLI:

```bash
# Install GitHub CLI if not already installed
brew install gh

# Authenticate
gh auth login

# Create issues from the prepared templates
gh issue create --title "[TASK] Set up GitHub Pages deployment" --body-file ".github/ISSUE_TEMPLATE/task.md"
gh issue create --title "[FEATURE] Add backend API for case submissions" --body-file ".github/ISSUE_TEMPLATE/feature_request.md"
gh issue create --title "[TASK] Implement responsive mobile menu" --body-file ".github/ISSUE_TEMPLATE/task.md"
```

## Step 5: Review the Website

1. Visit your GitHub Pages URL
2. Test all functionality:
   - Navigation links
   - Search box (placeholder)
   - Case submission form
   - Mobile responsiveness

## Step 6: Customize Branding

Edit `css/style.css` to match MSIH branding:
- Update color scheme in `:root` variables
- Replace logo and icons as needed
- Adjust fonts if different from MSIH main site

## Next Steps

1. **Content Review**: Update text to match MSIH messaging
2. **Backend Development**: Set up database and API for case submissions
3. **SEO Optimization**: Add meta tags, Open Graph, etc.
4. **Analytics**: Add tracking for user engagement
5. **Security**: Implement form validation and data protection

## Support

For questions or issues:
- Email: arbitration@msih.org
- GitHub: Create issues in this repository
- MSIH Main Site: https://www.msih.org