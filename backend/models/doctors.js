const mongoose=require('mongoose')
const doctorSchema= new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    gender: {
        type: String,
        trim: true,
        required: true
    },
    address: {
        type: String,
        trim: true,
        required: true
    },
    status: {
        type: String,
        trim: true,
        required: true
    },
    contact: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    time_available: {
        type: String,
        trim: true,
        required: true
    },
    occupation: {
        type: String, 
        trim: true
    }

 }, {timestamps: true})
 module.exports=mongoose.model('Doctor', doctorSchema);