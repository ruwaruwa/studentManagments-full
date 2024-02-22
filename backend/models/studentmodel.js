const mongoose = require('mongoose')
const studentSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    studentID:{
        type:String,
        required:true
    },
    classId:{
       type:mongoose.Schema.Types.ObjectId ,
       ref:"Class",
        required:true
    },
    courseId:{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"courses",
         required:true
     },
})

module.exports=mongoose.model('student',studentSchema)