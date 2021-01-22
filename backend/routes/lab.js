const express=require('express');
const { adminMiddleware, requireSignin } = require('../common-middle');
const { labTest, getLab } = require('../controllers/lab');
const router=express.Router();

router.post('/lab/create',  requireSignin, adminMiddleware, labTest)
router.get('/getlab/result', requireSignin, adminMiddleware, getLab)


module.exports=router