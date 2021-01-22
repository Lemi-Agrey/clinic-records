const express=require('express');
const { addPatient, getPatients } = require('../controllers/patient');
const router=express();

router.post('/patient/create', addPatient)
router.get('/patient/getPatients', getPatients)

module.exports=router;