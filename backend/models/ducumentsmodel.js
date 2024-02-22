const mongoose = require('mongoose')
const ducumentsSchema=mongoose.Schema({
    file:{
        type:String,
        required:true
    },
    // classId:{
    //    type:mongoose.Schema.Types.ObjectId ,
    //    ref:"Class",
    //     required:true
    // },
},{timestamp:true})
module.exports=mongoose.model('Ducument',ducumentsSchema)