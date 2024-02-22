const mongoose = require('mongoose')
const courseSchema=mongoose.Schema({
    Coursename:{
        type:String,
        required:true
    },
    courseID:{
    //    type:mongoose.Schema.Types.ObjectId ,
    //    ref:"Class",
    type:String,
        required:true
    },
})
module.exports=mongoose.model('courses',courseSchema)