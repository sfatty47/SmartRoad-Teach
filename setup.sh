#!/bin/bash

echo "Setting up SmartRoad Tech Landing Page..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo " Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo " Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if installation was successful
if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo " Setup complete! You can now run:"
    echo "   npm run dev    # Start development server"
    echo "   npm run build  # Build for production"
    echo ""
    echo "🌐 The landing page will be available at: http://localhost:3000"
else
    echo "❌ Failed to install dependencies. Please check your internet connection and try again."
    exit 1
fi
