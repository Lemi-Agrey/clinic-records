const express=require('express')
const { requireSignin, adminMiddleware } = require('../common-middle');

const { addDoctor, getDoctors } = require('../controllers/doctors')
const router=express()


router.post('/doctor/create',requireSignin, adminMiddleware, addDoctor)
router.get('/doctor/getDoc', getDoctors);

module.exports=router