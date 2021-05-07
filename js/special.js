//this file illustrates the purpose of using modules in javascript 
const Pi = 3.14;

const greet  = name=> console.log("hello"+name);

const square = x =>x*x;

//expicitily export objects like this

module.exports.pi = Pi;
module.exports.greet = greet;
module.exports.square  = square;