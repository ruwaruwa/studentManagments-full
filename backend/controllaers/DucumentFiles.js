
const multer = require('multer');
const DucumentModel = require('../models/ducumentsmodel');
const stroragelocation= multer.diskStorage({
destination:(req,file,cb)=>{
    cb(null,'Ducuments')
},
filename:(req,file,cb)=>{
    cb(null,file.originalname)
}

})
const uploadducument= multer({
    storage: stroragelocation
})
//now we write the api 
//upload.single('file')
const regesterducuments=  async(req,res)=>{
    const newfiledata= await DucumentModel({
        file:req.file.filename
    })
    const data= await newfiledata.save()

    if(data){
        res.send(data)
    }else{
        res.send({error:'error'})
    }
}

//get 
const getDucuments= async(req, res) => {
    const data= await DucumentModel.find();
    if(data){
    res.send(data)
    }
}
module.exports={
    regesterducuments,
    uploadducument,
    getDucuments
}