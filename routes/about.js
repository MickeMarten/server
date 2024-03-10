import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import { aboutMicke } from '../utils/aboutMicke.js';
const aboutRouter = express.Router();

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);
console.log(__dirname);



aboutRouter.get("/api/about", (req, res) => {
    res.json(aboutMicke());
});

aboutRouter.get('/api/images/:imageName', (req, res) =>{
    const imageName = req.params.imageName;
    
    const imagePath = path.join(__dirname, '../public', imageName);

    res.sendFile(imagePath);
});

export default aboutRouter;