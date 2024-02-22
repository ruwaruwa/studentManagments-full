const express=require('express')
const app=express()

const cors=require('cors')
app.use(cors())
const dbConnection=require('./database/DBconnection')
//db connections
dbConnection()
///end database connection
app.use(express.json())

const studentRoute=require('./Routers/studentroute')
const classRoute=require('./Routers/classroute')
const courseRoute =require('./Routers/courseroute')
const ducumentRoute=require('./Routers/ducumentroute')
app.use(ducumentRoute)


app.use('/allducuments',express.static('Ducuments'))

app.use(courseRoute)
app.use(classRoute)
app.use(studentRoute)



app.listen(1000,async()=>{
    console.log('started !')
})


app.get('/',async(req,res)=>{
    res.send('app started !!!!!')
})