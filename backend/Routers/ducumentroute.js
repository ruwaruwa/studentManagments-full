const express = require('express');

const ducuments =express.Router()

const {getDucuments,uploadducument,
    regesterducuments }=require('../controllaers/DucumentFiles')

ducuments.post('/ducuments/file',uploadducument.single('file'),regesterducuments)

ducuments.get('/ducuments/file',getDucuments)

// ducuments.get('/ducuments/:id',getDucumentById)
// ducuments.put('/ducuments/:id',updateDucuments)
// ducuments.delete('/ducuments/:id',deleteDucuments)

module.exports = ducuments

