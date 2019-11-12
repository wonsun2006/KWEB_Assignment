const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {return res.render('index.ejs')});
app.get('/page/:page', (req, res) => {
    return res.render('page.ejs',{page: req.params.page});
});
app.get('/posts/:until', (req, res) => {
    let isValid = (isNaN(parseInt(req.params.until))) ? false : true;
    res.render('posts.ejs', {
    isValid: isValid,
    until: req.params.until
    });
    });

app.listen(port, () => console.log(`Week 5 ejs practice server is working...`));