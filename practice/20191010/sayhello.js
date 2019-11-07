const sayHello = {};
sayHello.english = function() {
return 'Hello';
};
sayHello.spanish = function() {
return 'Hola';
};
sayHello.french = function() {
return 'Bonjour';
};
sayHello.german = function() {
return 'Guten Tag';
};
module.exports = sayHello;