#!/bin/bash

# Test Script: The Material Bridge
# Valida tutto prima del deployment
# Usage: bash test-validation.sh

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║         MATERIAL BRIDGE - LOCAL VALIDATION TESTS              ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test counters
TESTS_PASSED=0
TESTS_FAILED=0

# Function to print test result
print_result() {
  if [ $1 -eq 0 ]; then
    echo -e "${GREEN}✓${NC} $2"
    ((TESTS_PASSED++))
  else
    echo -e "${RED}✗${NC} $2"
    ((TESTS_FAILED++))
  fi
}

# ============================================================================
# SECTION 1: Project Structure Validation
# ============================================================================
echo ""
echo "═══ SECTION 1: PROJECT STRUCTURE ═══"
echo ""

# Check Node version
node_version=$(node -v 2>/dev/null)
if [ $? -eq 0 ]; then
  print_result 0 "Node.js installed: $node_version"
else
  print_result 1 "Node.js not found - required: Node 18+"
fi

# Check npm
npm_version=$(npm -v 2>/dev/null)
if [ $? -eq 0 ]; then
  print_result 0 "npm installed: $npm_version"
else
  print_result 1 "npm not found"
fi

# Check package.json
if [ -f "package.json" ]; then
  print_result 0 "package.json exists"
else
  print_result 1 "package.json not found"
fi

# Check node_modules
if [ -d "node_modules" ]; then
  print_result 0 "node_modules directory exists"
else
  print_result 1 "node_modules not found - run 'npm install'"
fi

# Check src directory
if [ -d "src" ]; then
  print_result 0 "src/ directory exists"
else
  print_result 1 "src/ directory not found"
fi

# Check components
if [ -d "src/components" ]; then
  print_result 0 "src/components/ exists"
  
  # Count components
  component_count=$(ls -1 src/components/*.tsx 2>/dev/null | wc -l)
  if [ "$component_count" -ge 8 ]; then
    print_result 0 "All 8 components found ($component_count files)"
  else
    print_result 1 "Only $component_count components found (need 8)"
  fi
else
  print_result 1 "src/components/ directory not found"
fi

# Check context
if [ -d "src/context" ]; then
  context_count=$(ls -1 src/context/*.tsx 2>/dev/null | wc -l)
  if [ "$context_count" -ge 2 ]; then
    print_result 0 "Context providers found ($context_count files)"
  else
    print_result 1 "Not all context providers found"
  fi
else
  print_result 1 "src/context/ not found"
fi

# Check lib
if [ -d "src/lib" ]; then
  lib_count=$(ls -1 src/lib/*.ts 2>/dev/null | wc -l)
  if [ "$lib_count" -ge 3 ]; then
    print_result 0 "Library files found ($lib_count files)"
  else
    print_result 1 "Not all library files found"
  fi
else
  print_result 1 "src/lib/ not found"
fi

# ============================================================================
# SECTION 2: Configuration Files
# ============================================================================
echo ""
echo "═══ SECTION 2: CONFIGURATION FILES ═══"
echo ""

config_files=(
  "tsconfig.json"
  "tailwind.config.js"
  "next.config.js"
  "postcss.config.js"
  "package.json"
  ".gitignore"
  ".env.example"
)

for file in "${config_files[@]}"; do
  if [ -f "$file" ]; then
    print_result 0 "$file exists"
  else
    print_result 1 "$file missing"
  fi
done

# ============================================================================
# SECTION 3: TypeScript & Build
# ============================================================================
echo ""
echo "═══ SECTION 3: TYPESCRIPT & BUILD ═══"
echo ""

# Check for TS errors (lint)
echo "Checking TypeScript..."
npm run lint > /dev/null 2>&1
if [ $? -eq 0 ]; then
  print_result 0 "TypeScript linting passed"
else
  print_result 1 "TypeScript linting failed - check: npm run lint"
fi

# Check build (dry run, don't keep artifacts)
echo "Building project (this may take a moment)..."
npm run build > /tmp/build.log 2>&1
if [ $? -eq 0 ]; then
  print_result 0 "Next.js build successful"
  
  # Check build artifacts
  if [ -d ".next" ]; then
    print_result 0 ".next build directory created"
  else
    print_result 1 ".next directory not created"
  fi
else
  print_result 1 "Build failed - check: npm run build"
  echo "  Error log:"
  tail -20 /tmp/build.log | sed 's/^/    /'
fi

# ============================================================================
# SECTION 4: Dependencies & Packages
# ============================================================================
echo ""
echo "═══ SECTION 4: DEPENDENCIES ═══"
echo ""

# Check critical dependencies
dependencies=(
  "next"
  "react"
  "react-dom"
  "tailwindcss"
  "framer-motion"
  "lucide-react"
  "typescript"
)

for dep in "${dependencies[@]}"; do
  if npm list "$dep" > /dev/null 2>&1; then
    version=$(npm list "$dep" 2>/dev/null | grep "$dep@" | sed 's/.*@//')
    print_result 0 "$dep installed ($version)"
  else
    print_result 1 "$dep not installed"
  fi
done

# ============================================================================
# SECTION 5: Content & Data Validation
# ============================================================================
echo ""
echo "═══ SECTION 5: CONTENT & DATA ═══"
echo ""

# Check content.ts has CONTENT export
if grep -q "export const CONTENT" src/lib/content.ts 2>/dev/null; then
  print_result 0 "content.ts exports CONTENT"
else
  print_result 1 "content.ts missing CONTENT export"
fi

# Check content has sections
sections=("hero" "caseStudy" "technicalVault" "cta_widget" "footer" "audio")
for section in "${sections[@]}"; do
  if grep -q "$section:" src/lib/content.ts 2>/dev/null; then
    print_result 0 "CONTENT.$section exists"
  else
    print_result 1 "CONTENT.$section missing"
  fi
done

# Check for bilingual content
if grep -q '"es":' src/lib/content.ts 2>/dev/null && grep -q '"en":' src/lib/content.ts 2>/dev/null; then
  print_result 0 "Bilingual (ES/EN) content found"
else
  print_result 1 "Missing bilingual content structure"
fi

# ============================================================================
# SECTION 6: Environment Variables
# ============================================================================
echo ""
echo "═══ SECTION 6: ENVIRONMENT SETUP ═══"
echo ""

# Check .env.local
if [ -f ".env.local" ]; then
  print_result 0 ".env.local exists"
  
  if grep -q "NEXT_PUBLIC_LINKEDIN_URL" .env.local; then
    print_result 0 "NEXT_PUBLIC_LINKEDIN_URL configured"
  else
    print_result 1 "NEXT_PUBLIC_LINKEDIN_URL not configured"
  fi
else
  print_result 1 ".env.local not found - copy from .env.example"
fi

# ============================================================================
# SECTION 7: Asset Files
# ============================================================================
echo ""
echo "═══ SECTION 7: ASSET DIRECTORIES ═══"
echo ""

asset_dirs=(
  "public/assets/images"
  "public/assets/sounds"
  "public/assets/fonts"
  "public/documents"
)

for dir in "${asset_dirs[@]}"; do
  if [ -d "$dir" ]; then
    file_count=$(ls -1 "$dir" 2>/dev/null | wc -l)
    print_result 0 "$dir exists ($([ $file_count -gt 0 ] && echo "$file_count files" || echo "empty"))"
  else
    print_result 1 "$dir directory not found"
  fi
done

# ============================================================================
# SECTION 8: Git & Deployment
# ============================================================================
echo ""
echo "═══ SECTION 8: GIT & DEPLOYMENT ═══"
echo ""

# Check git
if [ -d ".git" ]; then
  print_result 0 "Git repository initialized"
  
  # Check for uncommitted changes
  git_status=$(git status --porcelain 2>/dev/null)
  if [ -z "$git_status" ]; then
    print_result 0 "No uncommitted changes"
  else
    print_result 1 "Uncommitted changes detected - run: git status"
  fi
else
  print_result 1 "Git repository not initialized - run: git init"
fi

# Check GitHub Actions workflow
if [ -f ".github/workflows/deploy.yml" ]; then
  print_result 0 "GitHub Actions workflow exists"
else
  print_result 1 "GitHub Actions workflow not found"
fi

# ============================================================================
# SECTION 9: Documentation
# ============================================================================
echo ""
echo "═══ SECTION 9: DOCUMENTATION ═══"
echo ""

docs=(
  "README.md"
  "DEPLOYMENT_GUIDE.md"
  "TASK_1_SUMMARY.md"
  "TASK_2_SUMMARY.md"
  "TASK_2_TESTING.md"
  "src/components/README.md"
)

for doc in "${docs[@]}"; do
  if [ -f "$doc" ]; then
    print_result 0 "$doc exists"
  else
    print_result 1 "$doc missing"
  fi
done

# ============================================================================
# FINAL SUMMARY
# ============================================================================
echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║                      VALIDATION SUMMARY                        ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

TOTAL_TESTS=$((TESTS_PASSED + TESTS_FAILED))
PASS_PERCENTAGE=$((TESTS_PASSED * 100 / TOTAL_TESTS))

echo -e "Tests Passed:  ${GREEN}$TESTS_PASSED${NC}"
echo -e "Tests Failed:  ${RED}$TESTS_FAILED${NC}"
echo "Total Tests:   $TOTAL_TESTS"
echo "Pass Rate:     $PASS_PERCENTAGE%"
echo ""

if [ $TESTS_FAILED -eq 0 ]; then
  echo -e "${GREEN}✓ ALL TESTS PASSED - READY FOR DEPLOYMENT${NC}"
  exit 0
else
  echo -e "${YELLOW}⚠ SOME TESTS FAILED - FIX ISSUES BEFORE DEPLOYMENT${NC}"
  exit 1
fi
