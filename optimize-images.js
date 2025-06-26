const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function optimizeImage(inputPath, outputPath, maxWidth = 1200, quality = 80) {
  try {
    await sharp(inputPath)
      .resize(maxWidth, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality })
      .toFile(outputPath);
    
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    
    console.log(`✅ Optimized ${path.basename(inputPath)}:`);
    console.log(`   Before: ${(inputStats.size / 1024 / 1024).toFixed(2)}MB`);
    console.log(`   After: ${(outputStats.size / 1024 / 1024).toFixed(2)}MB`);
    console.log(`   Savings: ${(((inputStats.size - outputStats.size) / inputStats.size) * 100).toFixed(1)}%\n`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function main() {
  const publicPath = path.join(__dirname, 'public');
  
  // Optimize main images
  await optimizeImage(
    path.join(publicPath, 'ntale.png'),
    path.join(publicPath, 'ntale-optimized.jpg'),
    800,
    85
  );
  
  await optimizeImage(
    path.join(publicPath, 'hills@3x.png'),
    path.join(publicPath, 'hills-optimized.jpg'),
    1920,
    80
  );
  
  // Optimize portrait images
  const portraitPath = path.join(publicPath, 'Portraite');
  const portraits = [
    'Julius-1.png',
    'IMGL9543.png',
    'PHL_1234.png',
    '_free raws from @signatureeditsco - _MG_1511.png'
  ];
  
  for (const portrait of portraits) {
    const inputPath = path.join(portraitPath, portrait);
    const baseName = path.parse(portrait).name;
    const outputPath = path.join(portraitPath, `${baseName}-optimized.jpg`);
    
    if (fs.existsSync(inputPath)) {
      await optimizeImage(inputPath, outputPath, 800, 85);
    }
  }
  
  console.log('🎉 Image optimization complete!');
}

main().catch(console.error);
