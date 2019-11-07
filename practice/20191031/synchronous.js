const fs = require('fs');
console.log('foo');
console.log('bar');
let data = fs.readFileSync('verybigfile.txt'); // execution is blocked for a bit
console.log('data read, length: ' + data.length);
let a = 1;
while (a < 5000) a = a * 2;
console.log('a = ' + a);