const special = require('./special');
const ppls = require("./requiring/data");

console.log(special.square(9));
console.log(special.greet("manish"));
console.log(special.pi);


//now requiring an entire directory
//
//this will require the whole diretory not the singular file and automatically fetch objects from index.js in directory required


console.log("REQUIRED AN ENTIRE DIRECTORY", ppls);
