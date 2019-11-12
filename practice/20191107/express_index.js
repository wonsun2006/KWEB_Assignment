const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('GET /'));
app.post('/', (req, res) => res.send('POST /'));
app.put('/', (req, res) => res.send('PUT /'));
app.delete('/', (req, res) => res.send('DELETE /'));

app.get('/query', (req, res) => {
    res.send('GET /\n' + Object.keys(req.query).map(k => `${k}: ${req.query[k]}`).join('\n'));
});
app.post('/query', (req, res) => {
    res.send('POST /\n' + Object.keys(req.body).map(k => `${k}: ${req.body[k]}`).join('\n'));
});
app.put('/query', (req, res) => {
    res.send('PUT /\n' + Object.keys(req.body).map(k => `${k}: ${req.body[k]}`).join('\n'));
});
app.delete('/query', (req, res) => {
    res.send('DELETE /\n' + Object.keys(req.body).map(k => `${k}: ${req.body[k]}`).join('\n'));
});

app.get('/article/:id', (req,res) => {
    res.send(`Article #${req.params.id}`);
});

app.listen(port, () => console.log(`Week 5 practice server is working...`));