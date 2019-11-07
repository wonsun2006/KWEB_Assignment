const fs = require('fs');
console.log('foo');
console.log('bar');
let data = fs.readFile('verybigfile.txt', (err, data) => {
console.log('data read, length: ' + data.length);
}); // execution is blocked for a bit
let a = 1;
while (a < 5000) a = a * 2;
console.log('a = ' + a);