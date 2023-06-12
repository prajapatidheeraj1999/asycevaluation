

const express=require("express")
const {mobilemodule}=require("../module/mobilemodule")
const mobileroute=express.Router()

mobileroute.get("/",async(req,res)=>{
    let data=req.body
    let {device}=req.query
    console.log(device)

    try{
        let finddata=await mobilemodule.find({userID:data.userID,device})
        res.send({"mas":"this is get route",finddata})
    }
    catch(error)
    {
        res.send("somthins is wrong")

    }
})
mobileroute.post("/",async(req,res)=>{

    let data=req.body

    try{
        let postdata=await mobilemodule(data)
        await postdata.save()
        
        res.send({"mas":"data has been post ",postdata})

    }
    catch(error)
    {

    }
})
mobileroute.patch("/update/:id",async(req,res)=>{
    let data=req.body
    let {id}=req.params

    try{
        let finddata=await mobilemodule.findOne({_id:id})

        if(finddata)
        {
            if(finddata.userID==data.userID)
            {
                let updata=await mobilemodule.findByIdAndUpdate({_id:id},data)
                res.send({"mas":"data has beeb updated"})
            }else{
                res.send({"mas":"your id is missing"})
            }

        }else{
            res.send({"mas":"something is wrong"})
        }

    }
    catch(error)
    {
        res.send({"error":error})

    }
})
mobileroute.delete("/delete/:id",async(req,res)=>{
    let data=req.body
    let {id}=req.params

    try{
        let finddata=await mobilemodule.findOne({_id:id})
        console.log(finddata)

        if(finddata)
        {
            if(finddata.userID==data.userID)
            {
                console.log("everting is ok")
                let updata=await mobilemodule.findByIdAndDelete({_id:id})
                res.send({"mas":"data has beeb delete"})
            }else{
                res.send({"mas":"your id is missing"})
            }

        }else{
            res.send({"mas":"something is wrong"})
        }

    }
    catch(error)
    {
        res.send({"error":error})

    }
})

module.exports={
    mobileroute
}