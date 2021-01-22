const express=require('express');
const { startData } = require('../../controllers/admin/startData');
const router=express.Router();

router.post('/startData', startData);

module.exports=router