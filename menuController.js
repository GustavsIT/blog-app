import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/mainPage', (_, res) => {
    res.sendFile(path.join(__dirname, 'mainPage.ejs'));
});

router.get('/aboutPage', (_, res) => {
    res.sendFile(path.join(__dirname, 'aboutPage.ejs'));
});



export default router;