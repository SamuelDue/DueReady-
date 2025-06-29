#!/usr/bin/env node

// Performance Testing Script for Deal Readiness Collective
// Run with: node test-performance.js

const fs = require('fs');
const path = require('path');

console.log('🧪 Testing Performance Optimizations...\n');

// Test 1: Image Optimization
console.log('📸 Image Optimization Test:');
const publicDir = path.join(__dirname, 'public');
const optimizedDir = path.join(publicDir, 'optimized');

if (fs.existsSync(optimizedDir)) {
  const optimizedFiles = fs.readdirSync(optimizedDir);
  console.log(`✅ Found ${optimizedFiles.length} optimized images`);
  
  // Calculate space savings
  let originalSize = 0;
  let compressedSize = 0;
  
  const largeImages = [
    'Gemini_Generated_Image_djqg1bdjqg1bdjqg.png',
    'Gemini_Generated_Image_f2debdf2debdf2de.png', 
    'Gemini_Generated_Image_p9g5dap9g5dap9g5.png',
    'Gemini_Generated_Image_q4o65eq4o65eq4o6.png',
    'new image.png'
  ];
  
  largeImages.forEach(file => {
    const originalPath = path.join(publicDir, file);
    if (fs.existsSync(originalPath)) {
      originalSize += fs.statSync(originalPath).size;
    }
  });
  
  optimizedFiles.forEach(file => {
    const filePath = path.join(optimizedDir, file);
    compressedSize += fs.statSync(filePath).size;
  });
  
  const savings = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
  console.log(`💾 Space saved: ${savings}% (${Math.round((originalSize - compressedSize) / 1024 / 1024)} MB)`);
} else {
  console.log('⚠️  No optimized images found. Run ./optimize-images.sh');
}

// Test 2: Next.js Configuration
console.log('\n⚙️  Next.js Configuration Test:');
const nextConfigPath = path.join(__dirname, 'next.config.ts');
if (fs.existsSync(nextConfigPath)) {
  const config = fs.readFileSync(nextConfigPath, 'utf8');
  
  const checks = [
    { test: 'compress: true', desc: 'Compression enabled' },
    { test: 'formats: [\'image/webp\', \'image/avif\']', desc: 'Modern image formats' },
    { test: 'optimizeCss: true', desc: 'CSS optimization' },
    { test: 'Cache-Control', desc: 'Caching headers' }
  ];
  
  checks.forEach(check => {
    if (config.includes(check.test)) {
      console.log(`✅ ${check.desc}`);
    } else {
      console.log(`⚠️  ${check.desc} - not found`);
    }
  });
} else {
  console.log('⚠️  next.config.ts not found');
}

// Test 3: CSS Optimizations
console.log('\n🎨 CSS Optimization Test:');
const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
if (fs.existsSync(cssPath)) {
  const css = fs.readFileSync(cssPath, 'utf8');
  
  const cssChecks = [
    { test: 'will-change: transform', desc: 'Hardware acceleration' },
    { test: 'touch-action: manipulation', desc: 'Touch optimization' },
    { test: '@media (prefers-reduced-motion: reduce)', desc: 'Reduced motion support' },
    { test: '-webkit-overflow-scrolling: touch', desc: 'Smooth scrolling on iOS' },
    { test: 'backdrop-filter: none', desc: 'Mobile backdrop blur removal' }
  ];
  
  cssChecks.forEach(check => {
    if (css.includes(check.test)) {
      console.log(`✅ ${check.desc}`);
    } else {
      console.log(`⚠️  ${check.desc} - not found`);
    }
  });
} else {
  console.log('⚠️  globals.css not found');
}

// Test 4: Component Performance
console.log('\n⚛️  Component Performance Test:');
const homepagePath = path.join(__dirname, 'src', 'app', 'page.tsx');
if (fs.existsSync(homepagePath)) {
  const homepage = fs.readFileSync(homepagePath, 'utf8');
  
  const componentChecks = [
    { test: 'translate3d', desc: 'Hardware-accelerated transforms' },
    { test: 'observer.unobserve', desc: 'Intersection Observer cleanup' },
    { test: 'cancelAnimationFrame', desc: 'Animation cleanup' },
    { test: 'passive: true', desc: 'Passive scroll listeners' },
    { test: 'requestAnimationFrame', desc: 'Smooth animations' }
  ];
  
  componentChecks.forEach(check => {
    if (homepage.includes(check.test)) {
      console.log(`✅ ${check.desc}`);
    } else {
      console.log(`⚠️  ${check.desc} - not found`);
    }
  });
} else {
  console.log('⚠️  page.tsx not found');
}

// Test 5: Bundle Size Analysis
console.log('\n📦 Bundle Analysis:');
const componentSizes = [];

function analyzeComponent(filePath, name) {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n').length;
    componentSizes.push({ name, lines, path: filePath });
  }
}

// Analyze key components
analyzeComponent(path.join(__dirname, 'src', 'app', 'page.tsx'), 'Homepage');
analyzeComponent(path.join(__dirname, 'src', 'components', 'navbar.tsx'), 'Navbar');
analyzeComponent(path.join(__dirname, 'src', 'app', 'resources', 'readiness-assessment', 'page.tsx'), 'Assessment');
analyzeComponent(path.join(__dirname, 'src', 'app', 'contact', 'page.tsx'), 'Contact');

componentSizes.sort((a, b) => b.lines - a.lines);

console.log('Component sizes (lines of code):');
componentSizes.forEach(comp => {
  const status = comp.lines > 500 ? '⚠️ ' : comp.lines > 300 ? '⚡' : '✅';
  console.log(`${status} ${comp.name}: ${comp.lines} lines`);
  if (comp.lines > 500) {
    console.log(`   Consider code splitting for ${comp.name}`);
  }
});

// Test 6: Performance Recommendations
console.log('\n🚀 Performance Recommendations:');

const recommendations = [
  {
    priority: 'HIGH',
    task: 'Install better image compression tools',
    command: 'brew install pngquant webp imagemagick',
    impact: '50-70% image size reduction'
  },
  {
    priority: 'MEDIUM', 
    task: 'Add lazy loading for heavy components',
    command: 'Use React.lazy() for components > 500 lines',
    impact: '500ms-1s faster initial load'
  },
  {
    priority: 'MEDIUM',
    task: 'Implement Web Vitals monitoring',
    command: 'npm install web-vitals',
    impact: 'Real-time performance tracking'
  },
  {
    priority: 'LOW',
    task: 'Add service worker for caching',
    command: 'Consider PWA features',
    impact: 'Offline functionality + caching'
  }
];

recommendations.forEach(rec => {
  const icon = rec.priority === 'HIGH' ? '🔴' : rec.priority === 'MEDIUM' ? '🟡' : '🟢';
  console.log(`${icon} ${rec.priority}: ${rec.task}`);
  console.log(`   Command: ${rec.command}`);
  console.log(`   Impact: ${rec.impact}\n`);
});

// Test 7: Mobile Performance Check
console.log('📱 Mobile Performance Status:');
if (fs.existsSync(cssPath)) {
  const css = fs.readFileSync(cssPath, 'utf8');
  const mobileOptimizations = [
    'floating-glow-1, .floating-glow-2, .floating-glow-3, .floating-glow-4 {\n    display: none',
    'backdrop-filter: none',
    'min-height: 44px',
    'font-size: 16px'
  ];
  
  const mobileScore = mobileOptimizations.filter(opt => css.includes(opt)).length;
  console.log(`✅ Mobile optimizations: ${mobileScore}/${mobileOptimizations.length} implemented`);
  
  if (mobileScore === mobileOptimizations.length) {
    console.log('🎉 All mobile optimizations active!');
  }
}

console.log('\n' + '='.repeat(50));
console.log('🎯 PERFORMANCE TEST COMPLETE');
console.log('='.repeat(50));
console.log('Next steps:');
console.log('1. Install better compression tools for 70%+ image savings');
console.log('2. Test on real devices with throttled connections');
console.log('3. Run Lighthouse audit in Chrome DevTools');
console.log('4. Monitor Core Web Vitals in production'); 