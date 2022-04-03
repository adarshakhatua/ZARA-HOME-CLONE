const jwt = require('jsonwebtoken');

const verifyUser=(token)=>{
    return new Promise((res,rej)=>{
        jwt.verify(token, 'secret', function(err, decoded) {
            //console.log("decoded",decoded.user.email) // bar
            if(err){
                return rej({message:err.message});
            }
            return res(decoded.user.email)
          });
    })
}


const authanticate =()=>{
    return async(req,res,next)=>{
        let token =req.headers.authorization;
        const email=req.body.email;
    
        //console.log(token)
        if(!token || !token.startsWith("Bearer")){
            return res.status(400).send({message:"Invalid Authorization token"})
        }
        token=token.trim().split(" ")[1];
        //console.log(token)
    
        try{
            const mail=await verifyUser(token);
            if(!verifyUser){
                return res.status(400).send({message:err.message})
            }
            if(mail==email){
                return next();
            }
            return res.status(400).send({message:"Authorisation failed"})
        }
        catch(err){
            res.status(500).send({message:err.message})
        }
       }
}

module.exports =authanticate;