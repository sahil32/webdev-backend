//this file is to illustrate arguments in node js how to pass argument to js files that run scrits

const args = process.argv.slice(2);
for(let arg of args)
{
    console.log(arg);
}
console.log(typeof process.argv);
//run it with node args.js {list of arguments}
