const express=require('express');
const { requireSignin, adminMiddleware } = require('../common-middle');
const router = express.Router();
// const { addCategory, getCategory } = require('../controller/catergory');
const {createMedicine, getMedicine } = require('../controllers/medicine');
const multer=require('multer');
const shortid = require('shortid');
const path=require('path')


const storage=multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function(req, file, cb){
        cb(null, shortid.generate()+'-'+file.originalname)
    }
})
const upload=multer({storage});

router.post('/medicine/create', requireSignin, adminMiddleware, upload.array('productPictures'), createMedicine)
router.get('/medicine/getMedicine', getMedicine)


module.exports=router;