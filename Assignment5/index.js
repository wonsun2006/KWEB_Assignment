const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let diaryBook = [];
let id = 0;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Welcome to my diary'));

app.get('/diaries', (req, res) => {
    if(diaryBook.length==0){
        res.send('No diary written!');
    } else{
        res.send(Object.keys(diaryBook).map(k => ` #${diaryBook[k].id}: ${diaryBook[k].title} (${diaryBook[k].isActive})`).join('\n'));
}
});

app.get('/diary/:id', (req, res) => {
    const req_id = req.params.id;

    if(req_id>diaryBook.length-1){
        res.status(404).send(`Diary #${req_id} does not exist!`);
    } else if(!diaryBook[req_id].isActive){
        res.send(`Diary #${req_id} has already been deleted`);
    } else{
        res.send(`#${req_id}: ${diaryBook[req_id].title} (${diaryBook[req_id].isActive})`);
}
});

app.get('/diary', (req, res) => {
    const req_id=req.query.id;

    res.redirect('/diary/' + req_id);
});

app.post('/diary', (req, res) => {
    const req_title = req.body.title;

    diaryBook.push({id: id, title: req_title, isActive: true});
    res.send(`Added Diary #${diaryBook[id].id}: ${diaryBook[id].title} (${diaryBook[id].isActive})`);
    id++;
});

app.put('/diary', (req, res) => {
    const req_id = req.body.id;
    const req_title = req.body.title;

    if(req_id>diaryBook.length-1){
        res.status(404).send(`Diary #${req_id} does not exist!`);
    } else if(!diaryBook[req_id].isActive){
        res.send(`Diary #${req_id} has already been deleted`);
    } else{
        diaryBook[req_id].title=req_title;
        res.send(`Changed Diary #${diaryBook[req_id].id}: ${diaryBook[req_id].title} (${diaryBook[req_id].isActive})`)
    }
});

app.delete('/diary', (req, res) => {
    const req_id = req.body.id;

    if(req_id>diaryBook.length-1){
        res.status(404).send(`Diary #${req_id} does not exist!`);
    } else if(!diaryBook[req_id].isActive){
        res.send(`Diary #${req_id} has already been deleted`);
    } else{
        diaryBook[req_id].title='';
        diaryBook[req_id].isActive=false;
        res.send(`Deleted Diary #${diaryBook[req_id].id}: ${diaryBook[req_id].title} (${diaryBook[req_id].isActive})`)
    }
});

app.listen(port, () => console.log(`Week 5 Assignment server is working...`));