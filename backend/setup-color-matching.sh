#!/bin/bash

# Color-Enhanced Matching System Setup Script
# Run this after deploying code changes

set -e

echo "🎨 Setting up Color-Enhanced Bangle Matching System..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -d "services" ]; then
    echo '❌ Error: Please run this script from the backend directory'
    exit 1
fi

echo -e "${BLUE}Step 1: Checking environment variables${NC}"
if [ -f ".env" ]; then
    if grep -q "AI_MATCH_MIN_COLOR_SIMILARITY" .env; then
        echo "✓ Color similarity settings found in .env"
    else
        echo "⚠ Adding default color similarity settings to .env"
        cat >> .env << 'EOF'

# Color Matching Configuration
AI_MATCH_MIN_COLOR_SIMILARITY=0.7
AI_MATCH_MIN_SCORE=0.55
AI_MATCH_MIN_SIMILARITY=0.4
EOF
    fi
else
    echo "⚠ .env file not found"
fi

echo ""
echo -e "${BLUE}Step 2: Running database migrations${NC}"
if [ -f "services/colorMatchingMigration.js" ]; then
    echo "Running migration..."
    node services/colorMatchingMigration.js
    echo -e "${GREEN}✓ Database migration completed${NC}"
else
    echo -e "${YELLOW}⚠ colorMatchingMigration.js not found${NC}"
fi

echo ""
echo -e "${BLUE}Step 3: Verifying services${NC}"

# Check if MySQL is running
if mysql -h localhost -P 3307 -u root divara_craft -e "SELECT 1" &> /dev/null; then
    echo "✓ MySQL is running on port 3307"
else
    echo "⚠ MySQL not accessible on port 3307 (Docker container may not be running)"
fi

# Check if FastAPI is running
if curl -s http://localhost:8000/health &> /dev/null; then
    echo "✓ FastAPI service is running on port 8000"
else
    echo "⚠ FastAPI not accessible on port 8000"
fi

# Check if Qdrant is running
if curl -s http://localhost:6333/health &> /dev/null; then
    echo "✓ Qdrant is running on port 6333"
else
    echo "⚠ Qdrant not accessible on port 6333"
fi

echo ""
echo -e "${BLUE}Step 4: Checking required files${NC}"

files=(
    "services/colorMatchingService.js"
    "services/colorEnhancedMatchingService.js"
    "services/colorMatchingMigration.js"
    "controllers/productController.js"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✓ $file"
    else
        echo -e "${YELLOW}⚠ Missing: $file${NC}"
    fi
done

echo ""
echo -e "${BLUE}Step 5: Documentation${NC}"
if [ -f "../docs/COLOR_MATCHING_GUIDE.md" ]; then
    echo "✓ COLOR_MATCHING_GUIDE.md available"
    echo "  Read it with: cat ../docs/COLOR_MATCHING_GUIDE.md"
fi

echo ""
echo -e "${GREEN}🎉 Setup completed!${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Start your frontend:     cd ../frontend && ng serve --port 4200"
echo "2. Test color matching:     POST http://localhost:5002/api/products/match-bangles"
echo "3. Check the documentation: cat ../docs/COLOR_MATCHING_GUIDE.md"
echo ""
echo -e "${YELLOW}Configuration:${NC}"
echo "• Adjust color thresholds in .env:"
echo "  AI_MATCH_MIN_COLOR_SIMILARITY=0.7  (range: 0.0-1.0)"
echo ""
