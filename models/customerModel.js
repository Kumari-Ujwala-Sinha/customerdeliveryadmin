const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    phone: {
        type: Number,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
    },
    cart: {
        type: Array,
        default: []
    },
    deliveryStatus:{
        type:Boolean,
        default :false
    },
    pickedStatus:{
        type:Boolean,
        default:false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Customers', customerSchema)