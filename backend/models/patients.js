const mongoose=require('mongoose')

const patientsSchema=new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    slug:{
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        trim: true,
        required: true
    },
    blood_grp: {
        type: String,
        trim: true,
        required: true
    },
    temperature: {
        type: String,
        trim: true,
        required: true
    },
    gender: {
        type: String,
        trim: true,
        required: true
    },
    contact: {
        type: String,
        trim: true,
        required: true
    },
    address: {
        type: String,
        trim: true,
        required: true
    },
    allegies: {
        type: String,
        trim: true,
        required: true
    },
    next_of_kin: {
        type: String,
        trim: true,
        required: true
    },
    nok_address:{
        type: String,
        trim: true,
        required: true
    },
    nok_contact: {
        type: String,
        trim: true,
        required: true
    },
    createdby: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        //required: true
    }
}, {timestamps: true})

module.exports=mongoose.model('Patient', patientsSchema);