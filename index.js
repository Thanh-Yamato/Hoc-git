var Mouse = require('./mouse');
var Cat = require('./cat');

var mouse1 = new Mouse('chuot 1', 1);
var mouse2 = new Mouse('chuot 2', 1);
var cat = new Cat('meo 1', 3);

cat.eat(mouse1).eat(mouse2);
console.log(cat);
console.log(mouse1);
console.log(mouse2);
