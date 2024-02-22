const joi =require('joi');
const courseModel = require('../models/coursemodel');
//get all class
const getCourse = async(req,res)=>{
    try {
        const coursedata = await courseModel.find();
        // res.status(200).send(classes);
        if(coursedata){
            res.status(200).send(coursedata);
        }
    } catch (error) {
        res.status(400).send(error);
    }
}
//get a student by id
const getCourseById = async(req,res)=>{
    try {
        const Class = await courseModel.find({_id:req.params.id});
        res.status(200).send(Class);
      
    } catch (error) {
        res.status(400).send(error);
    }
}
//validations
const validationClassSchema  = (valida)=>{
  const clasvalidation=  joi.object({
    Coursename:joi.string().required(),
    courseID:joi.string().required(),
    })
    return clasvalidation.validate(valida);
} ;
    

//create a student
const createCourse = async(req,res)=>{
const {error} = validationClassSchema(req.body)
    if(error){
        res.status(400).send(error.message);
    }
    try {
        const Class =  courseModel(req.body);
        const newcLASS=  await Class.save();
        if(newcLASS){
  res.json(Class);
        }
    } catch (error) {
        res.status(400).send(error);
    }
}
//update a student

const updateOURSE=async(req,res)=>{
    try {
        const updatedata= await courseModel.updateOne({
            _id:req.params.id},
            {$set:req.body}
        )
        if(updatedata){
            res.status(200).send(updatedata);
        }
    } catch (error) {
        res.status(400).send(error)
    }
}
//delete class 
const deleteCOURSE=async(req,res)=>{
    try {
        const deletedata= await courseModel.deleteOne({
            _id:req.params.id}
        )
        if(deletedata){
            res.status(200).send(deletedata);
        }
    } catch (error) {
        res.status(400).send(error)
    }
}
module.exports = {
    getCourse,
    getCourseById,
    createCourse,
    updateOURSE,
    deleteCOURSE
}