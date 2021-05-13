const fs = require('fs');

const data = new Uint8Array(Buffer.from('hello node js'));
fs.writeFile('message.txt',data,(err)=>{
    if(err)
    throw err;
    console.log("file is saved succesfully");
})