const mongoose = require('mongoose')
const classtSchema=mongoose.Schema({
    classname:{
        type:String,
        required:true
    },
    classid:{
        type:String,
        required:true
    },
})
module.exports=mongoose.model('Class',classtSchema)