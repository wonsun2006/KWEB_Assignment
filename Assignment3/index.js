const http = require('http');
const url = require('url');
const querystring = require('querystring');
const calc = require('./calc');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
const url_obj = url.parse(req.url);
const query_obj = querystring.parse(url_obj.query);
let result=0;
const op = query_obj.operator;
const a = parseInt(query_obj.a);
const b = parseInt(query_obj.b);

if(url_obj.pathname!='/'){
    res.statusCode = 404;
    res.end('Page Not Found!');
}

if( query_obj.a==null || query_obj.b==null || op==null){
    res.statusCode = 404;
    res.end('Invalid Query!');
}

switch(op){
    case "add": result = calc.add(a,b); break;
    case "sub": result = calc.sub(a,b); break;
    case "mult": result = calc.mult(a,b); break;
    case "div": result = calc.div(a,b); 
}

res.end('result is : ' + result);

});
server.listen(port, hostname, () => {
});