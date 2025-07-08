#!/bin/bash

set -e

echo "📦 Installing frontend dependencies..."
npm install

echo "🏗️  Building project..."
npm run build

BUILD_DIR="build"  # Or "dist" if you're using Vite
DEPLOY_DIR="/usr/share/nginx/html/react-app"

echo "🚚 Deploying to $DEPLOY_DIR..."
sudo rm -rf "$DEPLOY_DIR"
sudo mkdir -p "$DEPLOY_DIR"
sudo cp -r "$BUILD_DIR"/* "$DEPLOY_DIR"

echo "✅ Deployment complete! Nginx will serve from $DEPLOY_DIR"
