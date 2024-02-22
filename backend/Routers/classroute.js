const express = require('express')
const classroute = express.Router()
const classtControler=require('../controllaers/classControler')
classroute.get('/class/',classtControler.getClass)
classroute.post('/class',classtControler.createClass)
classroute.get('/class/:id',classtControler.getClassById)
classroute.put('/class/:id',classtControler.updateClas)
classroute.delete('/class/:id',classtControler.deleteClas)

module.exports = classroute