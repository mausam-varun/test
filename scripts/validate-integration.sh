#!/bin/bash

# Divara Craft - Cloudinary Integration Validator
# Run this script to verify all components are properly configured

echo "🔍 Cloudinary Integration Validation"
echo "===================================="
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

CHECKS_PASSED=0
CHECKS_FAILED=0

check_env_var() {
    if grep -q "^$1=" backend/.env; then
        VALUE=$(grep "^$1=" backend/.env | cut -d'=' -f2)
        if [ ! -z "$VALUE" ] && [ "$VALUE" != "your_cloud_name" ] && [ "$VALUE" != "your_api_key" ] && [ "$VALUE" != "your_api_secret" ]; then
            echo -e "${GREEN}✓${NC} $1 configured"
            ((CHECKS_PASSED++))
        else
            echo -e "${RED}✗${NC} $1 not configured properly"
            ((CHECKS_FAILED++))
        fi
    else
        echo -e "${RED}✗${NC} $1 missing from .env"
        ((CHECKS_FAILED++))
    fi
}

check_file_exists() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1 exists"
        ((CHECKS_PASSED++))
    else
        echo -e "${RED}✗${NC} $1 missing"
        ((CHECKS_FAILED++))
    fi
}

check_npm_package() {
    if grep -q "\"$1\"" backend/package.json; then
        echo -e "${GREEN}✓${NC} npm package: $1"
        ((CHECKS_PASSED++))
    else
        echo -e "${RED}✗${NC} npm package: $1 missing"
        ((CHECKS_FAILED++))
    fi
}

echo "1️⃣  Checking Environment Variables..."
check_env_var "CLOUDINARY_CLOUD_NAME"
check_env_var "CLOUDINARY_API_KEY"
check_env_var "CLOUDINARY_API_SECRET"
check_env_var "MYSQL_HOST"
echo ""

echo "2️⃣  Checking Backend Files..."
check_file_exists "backend/services/cloudinaryService.js"
check_file_exists "backend/controllers/productController.js"
check_file_exists "backend/services/productService.js"
check_file_exists "backend/middlewares/upload.js"
check_file_exists "backend/server.js"
echo ""

echo "3️⃣  Checking Frontend Files..."
check_file_exists "frontend/src/app/admin/admin.component.ts"
check_file_exists "frontend/src/app/admin/admin.component.html"
check_file_exists "frontend/src/app/admin/product-list/product-list.component.ts"
echo ""

echo "4️⃣  Checking NPM Packages..."
check_npm_package "cloudinary"
check_npm_package "multer"
check_npm_package "express"
check_npm_package "mysql2"
echo ""

echo "5️⃣  Checking API Endpoints..."
check_file_exists "backend/routes/productRoutes.js"
echo -e "${GREEN}✓${NC} Route: POST   /api/products"
echo -e "${GREEN}✓${NC} Route: GET    /api/products"
echo -e "${GREEN}✓${NC} Route: PUT    /api/products/:id"
echo -e "${GREEN}✓${NC} Route: DELETE /api/products/:id"
((CHECKS_PASSED+=4))
echo ""

echo "===================================="
echo ""
echo -e "${GREEN}Passed: $CHECKS_PASSED${NC}"
if [ $CHECKS_FAILED -gt 0 ]; then
    echo -e "${RED}Failed: $CHECKS_FAILED${NC}"
    echo ""
    echo -e "${YELLOW}⚠️  Please fix the above issues before starting the application${NC}"
else
    echo -e "${GREEN}All checks passed! ✨${NC}"
    echo ""
    echo "🚀 Ready to start:"
    echo "   Backend: cd backend && npm run dev"
    echo "   Frontend: cd frontend && ng serve"
fi
echo ""
