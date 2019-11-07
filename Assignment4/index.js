const http = require('http');
const axios = require('axios');
const url = require('url');
const querystring = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
const url_obj = url.parse(req.url);
const query_obj = querystring.parse(url_obj.query);

if(url_obj.pathname!='/'){
    res.statusCode = 404;
    res.end('Page Not Found!');
}

if(query_obj.repo==null){
    res.statusCode = 404;
    res.end('Invalid Query!');
}

axios.get('https://api.github.com/repos/'+query_obj.repo)
.then(resp => {
    res.statusCode = 200;
    res.end(
    'Repo: '+ query_obj.repo +
    '\nstargazers_count: '+ resp.data.stargazers_count +
    '\nopen_issues_count: '+ resp.data.open_issues_count)
})
.catch(() => {
    res.statusCode = 404;
    res.end('Repository not found!');
});

});
server.listen(port, hostname, () => {
});