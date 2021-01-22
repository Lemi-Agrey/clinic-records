const express=require('express')
const multer=require('multer')
const { adminMiddleware, requireSignin } = require('../common-middle')
const { addCater, getCatergories } = require('../controllers/catergory')
const router=express()
const shortid=require('shortid')
const path=require('path')

const storage=multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function(req, file, cb){
        cb(null, shortid.generate() + '-'+ file.originalname)
    }
})
 
const upload=multer({storage})

router.post('/catergory/create',  upload.single('catergoryImage'), addCater)
router.get('/catergory/getcat', getCatergories)

module.exports=router