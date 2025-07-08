#!/bin/bash

# Exit on error
set -e

echo "Installing frontend dependencies..."
npm install

echo "Building project..."
npm run build

# Change to build or dist depending on the tool (Vite or CRA)
BUILD_DIR="build"  # or "dist" for Vite

# Optional: Move to Nginx directory
DEPLOY_DIR="/var/www/html/react-app"

echo "Deploying to $DEPLOY_DIR..."
sudo rm -rf "$DEPLOY_DIR"
sudo mkdir -p "$DEPLOY_DIR"
sudo cp -r "$BUILD_DIR"/* "$DEPLOY_DIR"

echo "✅ Build and deploy complete!"
