const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (_, res) => {
    res.render('home');
});

module.exports = app;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});