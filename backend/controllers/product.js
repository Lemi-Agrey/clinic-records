const slugify=require('slugify')
const Product=require('../models/product')

exports.createProduct=(req, res)=>{
    //res.status(200).json({file: req.file, body: req.body})
    const {name, unit, price, description, catergory, quantity, expiry, createdby}=req.body;
    const product=new Product({
        name: name,
        slug: slugify(name),
        unit,
        price,
        description,
        expiry,
        catergory,
        quantity,
        createdby: req.user._id
    });
    product.save((error, product)=>{
        if(error) return res.status(400).json({error})
        if(product){
            return res.status(201).json({product})
        }
    })
}