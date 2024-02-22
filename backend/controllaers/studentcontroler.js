const joi =require('joi');
const studentmodel = require('../models/studentmodel');
//get all students
const getStudent = async(req,res)=>{
    try {
        const student = await studentmodel.find()
        .papulate([
            {
            path:'classId',
            model:'Class',
            select:'classname _id'
        },{
            path:'courseId',
            model:'courses',
            select:'Coursename _id'
        }])
        if(student){
 res.status(200).send(student);
        }
    } catch (error) {
        res.status(400).send(error);
    }
}
//get a student by id
const getStudentById = async(req,res)=>{
    try {
        const student = await studentmodel.findOne({_id:req.params.id});
        res.status(200).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
}
//validations
const validationStudentSchema  = (valida)=>{
  const students=  joi.object({
        name:joi.string().required(),
        phone:joi.string().required(),
        address:joi.string().required(),
        studentID:joi.string().required(),
        classId:joi.string().required(),
        courseId:joi.string().required(),
    })
    return students.validate(valida);
} ;
    


//create a student
const createStudent = async(req,res)=>{
const {error} = validationStudentSchema(req.body)
    if(error){
        res.status(400).send(error.message);
    }
    try {
        const student = new studentmodel(req.body);
        const newstudent=  await student.save();
        if(newstudent){
       res.status(200).send(student);
        }
    } catch (error) {
        res.status(400).send(error);
    }
}
//update a student
const updaStudents=async(req,res)=>{
    try {
        const updatedata= await studentmodel.updateOne({
            _id:req.params.id},
            {$set:req.body}
        )
        if(updatedata){
            res.status(200).send(updatedata);
        }
    } catch (error) {
        res.status(400).send(error);
    }
}
//delete sttudet data
const deleteStudent=async(req,res)=>{
    try {
        const deletedata= await studentmodel.deleteOne({
            _id:req.params.id}
        )
        if(deletedata){
            res.status(200).send(deletedata);
        }
    } catch (error) {
        res.status(400).send(error);
    }
}
module.exports = {
    getStudent,
    getStudentById,
    createStudent,
    updaStudents,
    deleteStudent
}