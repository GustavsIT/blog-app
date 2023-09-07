const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (_, res) => {
    res.render('home');
});

app.get('/mainPage', (_, res) => {
    res.render('mainPage');
});

app.get('/aboutPage', (_, res) => {
    res.render('aboutPage');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});