const User=require('../models/user')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

exports.signup=(req, res, next)=>{
    
    User.findOne({email: req.body.email})
    .exec(async(error, user)=>{
        if(user) return res.status(400).json({
                message: 'This email has already being registered'
        });
        const {
            firstName, 
            lastName, 
            email, 
            userName, 
            password
        }=req.body;
        const hash_password= await bcrypt.hash(password, 10) 
        const _user= new User({
            firstName, 
            lastName, 
            email, 
            userName: Math.random().toString(),  
            password
        })
        _user.save((error, data)=>{
            if(error){
                return res.status(400).json({
                    message: 'Something went wrong'
                })
            }
            if(data){
                return res.status(201).json({
                    message: 'User was created successfully'
                })
            }
        })
    })
}
exports.signin=(req, res)=>{
    User.findOne({email:req.body.email})
    .exec((error, user)=>{
        if(error) return res.status(400).json(error)
        if(user){
            if(user.authenticate(req.body.password) && user.role==='user'){
                const token=jwt.sign({_id: user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn:'1d'})
                const {_id, firstName, lastName, email, role, fullName}=user;
                res.status(200).json({
                    token,
                    user:{_id, firstName, lastName, email, role, fullName}
                })
            } else {
                return res.status(400).json({
                    message: 'Invalid password or username'
                })
            }
        } else {
            return res.status(400).json({message: 'Something went wrong'})
        }
    })
}
