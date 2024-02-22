const express = require('express')
const students = express.Router()
const studentControler=require('../controllaers/studentcontroler')
students.get('/student',studentControler.getStudent)
students.post('/student',studentControler.createStudent)
students.get('/student/:id',studentControler.getStudentById)
students.put('/student/:id',studentControler.updaStudents)
students.delete('/student/:id',studentControler.deleteStudent)

module.exports = students