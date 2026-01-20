import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleryDir = path.join(__dirname, 'public', 'images', 'gallery');
const outputFile = path.join(__dirname, 'src', 'data', 'galleryManifest.json');

// Ensure output dir exists
if (!fs.existsSync(path.dirname(outputFile))) {
    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
}

const albums = [];

if (fs.existsSync(galleryDir)) {
    const items = fs.readdirSync(galleryDir, { withFileTypes: true });

    for (const item of items) {
        if (item.isDirectory()) {
            const albumName = item.name;
            const albumPath = path.join(galleryDir, albumName);
            const images = fs.readdirSync(albumPath)
                .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
                .map(file => `/images/gallery/${albumName}/${file}`);

            if (images.length > 0) {
                // Formatting title from folder name (kebab-case to Title Case)
                const title = albumName
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');

                albums.push({
                    id: albumName,
                    title: title,
                    cover: images[0], // Use first image as cover
                    count: images.length,
                    images: images
                });
            }
        }
    }
}

fs.writeFileSync(outputFile, JSON.stringify(albums, null, 2));
console.log(`Generated manifest with ${albums.length} albums at ${outputFile}`);
