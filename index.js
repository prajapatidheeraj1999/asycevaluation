const express=require("express")
const {connection}=require("./db")
const {userroute}=require("./route/useroute")
const {mobileroute}=require("./route/moblieroute")
const {varification}=require("./middleware/varification")
const cors=require("cors")

const app=express()

app.use(cors())
app.use(express.json())

app.use("/users",userroute)

app.use(varification)
app.use("/posts",mobileroute)


app.listen("8080",async()=>{

    try{
        await connection
        console.log("connection is stablesh port number 8080")

    }catch(error)
    {
        console.log("connection is not stablesh ")
    }

})