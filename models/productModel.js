const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    deliveryitem:{
        type:String,
        required:[true, "Please enter delivery item name"],
        
    },
    addresstodeli:{
        type:String,
        required:[true, "Please enter address to be delivered"],
    },
    deliveryboy:{
        type:String,
        required:[true, "Please enter the delivery boy name"]
    },
    deliveryType:{
        type:String,
    },
    paymentMode:{
        type:String,
    },
    pickedStatus:{
        type:Boolean,
        default:false
    },
    deliveredStatus:{
        type:Boolean,
        defaul:false
    },
     customeraccepted:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Product", productSchema)