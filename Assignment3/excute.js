const calc = require('./calc');

x=parseInt(process.argv[2]);
y=parseInt(process.argv[3]);

console.log(calc.add (x,y));
console.log(calc.subtract (x,y));
console.log(calc.mult (x,y));
console.log(calc.div (x,y));
