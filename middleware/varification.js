
const jwt = require('jsonwebtoken')
 async function varification(req,res,next){

    let token =req.headers.authorization

    try{
        if(token)
        {
            console.log(token)
            jwt.verify(token,'dheeraj', async(err, decoded)=>{
                console.log(decoded,err)
                if(decoded)
                {
                    req.body.username=decoded.username
                    req.body.userID=decoded.userID

                    next()

                }
                console.log(decoded)
               
              })
        }else{
            res.send("pls login first because you token is not found !!")
        }

    }
    catch(error)
    {
        res.send("pls login first because you token is not found")

    }



}
module.exports={varification}