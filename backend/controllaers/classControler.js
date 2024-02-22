const joi =require('joi');
const classmodel = require('../models/classmodel');
//get all class
const getClass = async(req,res)=>{
    try {
        const clasdata = await classmodel.find();
        // res.status(200).send(classes);
        if(clasdata){
            res.status(200).send(clasdata);
        }
    } catch (error) {
        res.status(400).send(error);
    }
}
//get a student by id
const getClassById = async(req,res)=>{
    try {
        const Class = await classmodel.find({_id:req.params.id});
        res.status(200).send(Class);
      
    } catch (error) {
        res.status(400).send(error);
    }
}
//validations
const validationClassSchema  = (valida)=>{
  const clasvalidation=  joi.object({
        classname:joi.string().required(),
        classid:joi.string().required(),
    })
    return clasvalidation.validate(valida);
} ;
    

//create a student
const createClass = async(req,res)=>{
const {error} = validationClassSchema(req.body)
    if(error){
        res.status(400).send(error.message);
    }
    try {
        const Class =  classmodel(req.body);
        const newcLASS=  await Class.save();
        if(newcLASS){
  res.json(Class);
        }
    } catch (error) {
        res.status(400).send(error);
    }
}
//update a student

const updateClas=async(req,res)=>{
    try {
        const updatedata= await classmodel.updateOne({
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
const deleteClas=async(req,res)=>{
    try {
        const deletedata= await classmodel.deleteOne({
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
    getClass,
    getClassById,
    createClass,
    updateClas,
    deleteClas
}