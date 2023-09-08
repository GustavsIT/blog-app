import express from 'express';
import path from 'path';
import app from './app'

const router = express.Router();

router.get('/mainPage', (_, res) => {
    res.render('mainPage');
});

router.get('/aboutPage', (_, res) => {
    res.render('aboutPage');
});


export default router;