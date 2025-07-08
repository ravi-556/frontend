#!/bin/bash

set -e

echo "🔧 Installing Node.js 18 and npm (Amazon Linux 2023 via NodeSource)..."
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo dnf install -y nodejs

echo "🌐 Installing Nginx..."
sudo dnf install -y nginx

echo "✅ Node.js, npm, and Nginx installed successfully!"
