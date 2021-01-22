const mongoose=require('mongoose')
const labSchema=new mongoose.Schema({
    name: {
        type: String,
        required: false,
        trim: true
    }, 
    // slug:{
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    test1 : {
        type: String,
        required: false
    },
    test2:{
        type: String,
       
    },
    test3: {
        type: String,
        trim: true
    },
    findings: {
        type: String,
        trim: true
    },
    
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref:'User', required:true },
    updatedAt: Date,
}, {timestamps: true})

module.exports=mongoose.model("Lab", labSchema)