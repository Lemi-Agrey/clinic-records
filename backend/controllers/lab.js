const Lab =require('../models/lab')
const slugify=require('slugify')

exports.labTest=(req, res)=>{

    const {name, test1, test2, test3, findings, createdBy}=req.body;
    const lab=new Lab({
        name: name,
        // slug: slugify(name),
        test1,
        test2,
        test3, 
        findings,
        createdBy: req.user._id
    })

    lab.save((error, lab)=>{
        if(error){
            return res.status(400).json({error})
        } 
        if(lab){
            return res.status(200).json({message:lab})
        }

    })
}

exports.getLab=(req, res)=>{
    Lab.find({}).exec((error, result)=>{
        if(error) return res.status(500).json({error})
        if(result){
            res.status(200).json({result})
        }
    })
}