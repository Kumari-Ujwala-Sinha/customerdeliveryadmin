const Customers = require('../models/customerModel')

const jwt = require('jsonwebtoken')

const customerCtrl = {
    customerlogin: async (req, res) =>{
        try {
            const {phone,name} = req.body;

            const newCustomer = new Customers({
                name, phone
            })

            // Save mongodb
            await newCustomer.save()
            const accesstoken = createAccessToken({id: newCustomer._id})
            res.json({accesstoken})

           
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getCustomer: async (req, res) =>{
        try {
            const customer = await Customers.findById(req.user.id).select('-password')
            if(!customer) return res.status(400).json({msg: "customer does not exist."})

            res.json(customer)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    addCart: async (req, res) =>{
        try {
            const customer = await Customers.findById(req.user.id)
            if(!customer) return res.status(400).json({msg: "Customer does not exist."})

            await Customers.findOneAndUpdate({_id: req.user.id}, {
                cart: req.body.cart
            })
        
            return res.json({msg: "Added to cart"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getAllOrderstoPicked:async(req, res)=>{
        try{
            const orders = await Customers.find({pickedStatus:false,deliveryStatus:false})
            res.json(orders)
        }catch(err){
            return res.status(500).json({msg: err.message}) 
        }
    },
    getAllPickedOrders:async(req, res)=>{
        try{
            const orders = await Customers.find({pickedStatus:true,deliveryStatus:false})
            res.json(orders)
        }catch(err){
            return res.status(500).json({msg: err.message}) 
        }
    },
    getAllDeliveredOrders:async(req, res)=>{
        try{
            const orders = await Customers.find({pickedStatus:true,deliveryStatus:true})
            res.json(orders)
        }catch(err){
            return res.status(500).json({msg: err.message}) 
        }
    },
  
 }


const createAccessToken = (user) =>{
    return jwt.sign(user, process.env.CUSTOMER_TOKEN_SECRET, {expiresIn: '1d'})
}


module.exports = customerCtrl

