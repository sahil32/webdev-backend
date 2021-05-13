let jwt = require('jsonwebtoken');
const config = require('./config.js');
let checkToken = (req,res,next)=>{
    let token = req.headers['x-access-token'] || req.headers['Authorization'];
    console.log("token from client is",token);
    if(token.startsWith('Bearer ')) {
        token = token.slice(7, token,length);
    }
    if(token){
        jwt.verify(token,config.secret,(err,decoded)=>{
            if(err){
                return res.json({
                    success: false, 
                    message: 'Token is not valid'
                });
            }
            else{
                req.decoded = decoded;
                console.log(decoded);
                next();
            }
        });
    }
        else {
            return res.json({
                success: false,
                message: 'Auth toke is not supplied'
            });
        }
}
module.exports = {
    checkToken: checkToken
}