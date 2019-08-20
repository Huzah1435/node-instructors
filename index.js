var Letter = require('./Letter.js');
var test = new Letter("a", false);
console.log(test.check("b"));
console.log(test.check("a"));
console.log(test.current());