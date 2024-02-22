const joi =require('joi');
const multer =  require('multer');
const ducumenteModel = require('../models/ducumentsmodel');
 //create localstorage
 const localstorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'Ducuments')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const uploadDucuments= multer(
    {storage:localstorage})
    
    ///end

//get all ducuments
const getDucuments = async(req,res)=>{
    try {
        const coursedata = await ducumenteModel.find();
        
        if(coursedata){
            res.status(200).send(coursedata);
        }
    } catch (error) {
        res.status(400).send(error);
    }
}
//get a student by id
const getDucumentById = async(req,res)=>{
    try {
        const Class = await ducumenteModel.find({_id:req.params.id});
        res.status(200).send(Class);
      
    } catch (error) {
        res.status(400).send(error);
    }
}
//validations
const validationducments  = (valida)=>{
  const ducuvalidation=joi.object({
    File:joi.string().required(),
   
    })
    return ducuvalidation.validate(valida);
} ;
   


//create a student
const createducuments= async(req,res)=>{
const {error} = validationducments(req.body)
    if(error){
        res.status(400).send(error.message);
    }
    try {
        const ducumen =  ducumenteModel({
            File:req.file.filename
        });
        const newcLASS=  await ducumen.save();
        if(newcLASS){
  res.json(ducumen);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}
//update a student

const updateDucuments=async(req,res)=>{
    try {
        const updatedata= await ducumenteModel.updateOne({
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
const deleteDucuments=async(req,res)=>{
    try {
        const deletedata= await ducumenteModel.deleteOne({
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
    getDucuments,
    getDucumentById,
    createducuments,
    updateDucuments,
    deleteDucuments,
    uploadDucuments
}