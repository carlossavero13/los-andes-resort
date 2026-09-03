const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, 'public', 'images');

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      // Skip if already webp, or if it's svg/gif/mp4
      if (['.jpg', '.jpeg', '.png', '.heic'].includes(ext)) {
        const nameWithoutExt = path.basename(file, ext);
        const newPath = path.join(directory, `${nameWithoutExt}.webp`);

        console.log(`Convirtiendo: ${fullPath} -> ${newPath}`);
        
        try {
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(newPath);
            
          // Eliminar original
          fs.unlinkSync(fullPath);
          console.log(`Original eliminado: ${file}`);
        } catch (error) {
          console.error(`Error procesando ${file}:`, error);
        }
      }
    }
  }
}

async function run() {
  console.log('Iniciando optimización de imágenes...');
  await processDirectory(targetDir);
  console.log('Optimización completada con éxito.');
}

run();
