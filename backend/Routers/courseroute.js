const express = require('express')
const courseroute = express.Router()
const coursetControler=require('../controllaers/courseControler')
courseroute.post('/course/',coursetControler.createCourse)
courseroute.get('/course',coursetControler.getCourse)
courseroute.get('/course/:id',coursetControler.getCourseById)
courseroute.put('/course/:id',coursetControler.updateOURSE)
courseroute.delete('/course/:id',coursetControler.deleteCOURSE)

module.exports = courseroute
