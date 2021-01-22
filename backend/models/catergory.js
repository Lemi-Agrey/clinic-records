const mongoose = require('mongoose')

const caterSchema= new mongoose.Schema({
    name:{
        type:String, 
        required:true, 
        trim: true
    },
    slug: {
        type: String,
        trim: true,
        unique: true
    }, 
    catergoryImage:{type:String},
    parentId: {type:String}
}, {timestamps:true})

module.exports=mongoose.model("Catergory", caterSchema);