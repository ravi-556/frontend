#!/bin/bash

set -e

echo "🔧 Installing Node.js and npm (Amazon Linux 2023)..."
sudo dnf module enable nodejs:18 -y
sudo dnf install -y nodejs

echo "🌐 Installing Nginx..."
sudo dnf install -y nginx

echo "✅ Node.js, npm, and Nginx installed successfully!"