#!/bin/bash

# Build the portfolio for production
echo "Building portfolio for production..."
npm run build

echo "Build complete! The optimized files are in the 'dist' directory."
echo ""
echo "Next steps to deploy to GitHub Pages:"
echo "1. git add ."
echo "2. git commit -m 'Update portfolio source'"
echo "3. git push origin main"
echo ""
echo "Note: A GitHub Action has been set up to automatically deploy the 'dist' folder"
echo "to the 'gh-pages' branch whenever you push to 'main'."

