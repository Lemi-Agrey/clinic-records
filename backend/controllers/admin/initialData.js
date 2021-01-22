const Catergory=require('../../models/catergory')
const Product=require('../../models/product')

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
exports.initialData=async (req, res)=>{
    const catergories=await Catergory.find({}).exec()
    const products=await Product.find({})
        .select('_id name unit price description expiry catergory quantity')
        .populate({path: 'catergory', select: '_id name'})
        .exec()
    res.status(200).json({
        catergories: createCatergories(catergories),
        products
    })
}