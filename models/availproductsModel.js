const mongoose = require('mongoose')


const availproductsSchema = new mongoose.Schema({
    product_id:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    title:{
        type: String,
        trim: true,
        required: true
    },
    price:{
        type: Number,
        trim: true,
        required: true
    },
    category:{
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    sold:{
        type: Number,
        default: 0
    }
}, {
    timestamps: true //important
})


module.exports = mongoose.model("AvailProducts", availproductsSchema)