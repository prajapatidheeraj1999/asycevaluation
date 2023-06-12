const mongoose=require("mongoose")

const mobileschema=mongoose.Schema({
        title:String,
        body:String,
        device: String,
        username:String,
        userID:String
},{versionKey:false})

const mobilemodule=mongoose.model("moblie",mobileschema)

module.exports={mobilemodule}