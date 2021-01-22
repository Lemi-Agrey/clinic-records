const express=require('express')
const { userMiddleware, requireSignin } = require('../common-middle')
const { addCart } = require('../controllers/cart')
const router=express()

router.post('/cart/create', requireSignin, userMiddleware, addCart)
//router.get('/cart/getcart',  getCart)

module.exports=router