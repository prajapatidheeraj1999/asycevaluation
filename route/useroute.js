const express=require("express")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {usermodule}=require("../module/usermodule")
const userroute=express.Router()

userroute.post("/register",async(req,res)=>{
    let {name,email,gender,password}=req.body
    try{
        bcrypt.hash(password, 5, async(err, hash)=> {

            if(hash)
            {
                let data=await usermodule({name,email,password:hash,gender})
                await data.save()
                res.send({"mas":"user register is succefull",data})
            }
            // Store hash in your password DB.
        })

    }
    catch(error)
    {
        res.send({"error":error})
        
    }

})

userroute.post("/login",async(req,res)=>{
 let {email,password}=req.body

    try{
        let data=await usermodule.findOne({email})
        if(data)
        {
            bcrypt.compare(password, data.password, async(err, result)=>{

                if(result)
                {
                    const token = jwt.sign({ username:data.name,userID:data._id }, 'dheeraj')
                    res.send({"mas":"login succefull",token})
                }else{
                    res.send({"mas":"password is wrong"})
                }

                
                // result == false
            })

        }else{
            res.send("pls login first !!")
        }

    }
    catch(error)
    {
        res.send("pls login first !!!")
    }

})
module.exports={userroute}