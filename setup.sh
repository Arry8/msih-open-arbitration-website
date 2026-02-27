#!/bin/bash

# MSIH Oaths Website Setup Script
# This script helps set up the GitHub repository and initial deployment

set -e  # Exit on error

echo "🔧 MSIH Open Arbitration Website Setup"
echo "=============================="

# Check for required tools
command -v git >/dev/null 2>&1 || { echo "Error: git is not installed"; exit 1; }

echo ""
echo "📁 Project Structure:"
find . -type f -name "*.html" -o -name "*.css" -o -name "*.js" -o -name "*.md" | sort

echo ""
echo "📋 Next Steps:"
echo "1. Create a GitHub repository named 'msih-open-arbitration-website'"
echo "2. Run the following commands:"
echo ""
echo "   # Initialize git"
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Initial commit: MSIH Open Arbitration website'"
echo ""
echo "   # Add remote (replace YOUR_USERNAME)"
echo "   git remote add origin https://github.com/YOUR_USERNAME/msih-open-arbitration-website.git"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages in repository settings"
echo "4. Create issues from the files in the 'issues/' directory"
echo ""
echo "📚 Detailed instructions in SETUP_GUIDE.md"

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo ""
    echo "⚠️  Warning: index.html not found in current directory"
    echo "   Make sure you're in the msih-open-arbitration-website directory"
fi

echo ""
echo "✅ Setup script completed. Follow the instructions above to deploy."