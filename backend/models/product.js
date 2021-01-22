const mongoose=require('mongoose')

const productSchema= new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    slug: { 
        type: String,
        trim: true,
        unique: true
    }, 
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    unit: {
        type: String,
        required: true
    },
    expiry: {
        type: String,
        required: true
    },
    offer: {
        type: String
    },
    productPictures: [
        {img: {type: String}}
    ], 
    reviews: [ 
        {
            userId:{type:mongoose.Schema.Types.ObjectId, ref: 'User'},
            review: String
        }
    ],
    catergory: {
        type: mongoose.Schema.Types.ObjectId, ref:'Catergory',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    createdby: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    updatedat: Date

}, {timestamps: true})

module.exports=mongoose.model('Product', productSchema)