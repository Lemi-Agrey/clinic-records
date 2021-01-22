const slugify=require('slugify')
const Catergory = require('../models/catergory')
function createCatergories(catergories, parentId){
    const catergoryList=[];
    let catergory;
    if(parentId==null){
        catergory=catergories.filter(cat=>cat.parentId==undefined)
    } else {
        catergory=catergories.filter(cat=>cat.parentId==parentId)
    }
    for(let cate of catergory){
        catergoryList.push({
             _id: cate._id,
            name: cate.name,
            slug: cate.slug,
            parentId: cate.parentId,
            children: createCatergories(catergories, cate._id)
        })
    }
    return catergoryList;

}

exports.addCater=(req, res, next)=>{
    const cateObj={
        name: req.body.name,
        slug: slugify(req.body.name),
    }
    if(req.file){
        cateObj.catergoryImage=process.env.API+'/public/' + req.file.filename;
    }
    if(req.body.parentId){
        cateObj.parentId=req.body.parentId;
    }
    const cat=new Catergory(cateObj)

cat.save((error, catergory)=>{
    if(error) return res.status(400).json({error})
    if(catergory) {
        return res.status(201).json({catergory})
    }
})
}
exports.getCatergories=(req, res, next)=>{
    Catergory.find({})
    .exec((error, catergories)=>{
        if(error) return res.status(400).json({error})
        if(catergories){
            const catergoryList=createCatergories(catergories)
            return res.status(200).json({catergoryList})
        }
    })
}