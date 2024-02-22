const mongoose = require('mongoose')
const dbConnection=async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/studntmanagment').then((respo)=>{
            console.log('DB succssfully connected !!')
        })
    } catch (error) {
        console.log('db failed !!',error)
    }
}
module.exports=dbConnection
///