//this file helps us to requre all objects in this directory
const sahil  = require('./sahil')
const suresh = require('./suresh')
const ramesh = require('./ramesh')

//now make an array of all the objects that are in this directory and accesed by required file
//
const allPPL = [sahil, suresh, ramesh];
module.exports = allPPL;
