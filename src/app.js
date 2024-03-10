import express from 'express';
import aboutRouter from '../routes/about.js';
import cors from 'cors';


const app = express();
app.use(cors());
app.use('/', aboutRouter);
app.use(express.static('./public'))



export default app;