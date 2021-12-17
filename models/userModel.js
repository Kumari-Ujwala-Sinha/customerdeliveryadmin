const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    role: {
        type: Number,
        default: 0 // 0 = user, 1 = admin
    },
    phoneNo:{
        type:Number,
        required:[true, "Please enter your Phone Number"]
    },
    profileImg:{
        type:String,
        required:[true, "Please select profile image"]
    },
    adharImg:{
        type:String,
        required:[true, "Please select adhaar card image"]
    },
    vehicleType:{
        type:String,
        required:[true, "Please select Vehicle Type"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)