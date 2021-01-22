const Medicine=require('../models/medicine');
const Catergory=require('../models/medicine')
const slugify=require('slugify')

exports.createMedicine=(req, res)=>{
   //res.status(200).json({file: req.files, body:req.body})
   const {name, price, quantity, description,  category, createdBy}=req.body;
   let productPictures=[]
   if(req.files.length>0){
       productPictures=req.files.map(file=>{
           return {img:file.filename}
       })
   }
    
   const product=new Medicine({
       name:name,
       slug: slugify(name),
       price,
       quantity,
       description,
       productPictures,
       category,
       createdBy: req.user._id
   })
   product.save((error, product)=>{
    if(error) return res.status(400).json({error})
    if(product) {
        return res.status(201).json({product})
    }
})
}

exports.getMedicine=(req, res)=>{
    Catergory.find({}).exec();
    Medicine.find({})
    .select('_id name quantity description category')
    .populate('category')
    .exec((error, medicine)=>{
        if(error) return res.status(400).json({error})
        if(medicine){
            return res.status(200).json({medicine})
        }
    })
}