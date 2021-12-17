const Product = require('../models/productModel')

const productCtrl = {
    getProducts: async(req, res) =>{
        try {
            const products = await Product.find()
            res.json(products)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getProductbyUsers:async(req, res)=>{
        try {
            const{deb_id}=req.body
            const product = await Product.find({deliveryboy:deb_id})

            res.json(product)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createProduct: async (req, res) =>{
        try {
            const {deliveryitem, addresstodeli, deliveryboy ,deliveryType } = req.body;
            const newProduct = new Product({deliveryitem, addresstodeli, deliveryboy ,deliveryType })
            await newProduct.save()
            res.json({msg: "Created a Product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteProduct: async(req, res) =>{
        try {    
            await Product.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateProduct: async(req, res) =>{
        try {
            const {deliveryitem, addresstodeli, deliveryboy ,deliveryType} = req.body;
            await Product.findOneAndUpdate({_id: req.params.id}, {deliveryitem, addresstodeli, deliveryboy ,deliveryType})

            res.json({msg: "Updated a Product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
       
    },
    updatepickedStatus:async(req, res) =>{
        try {
            const {pickedStatus} = req.body;
            await Product.findOneAndUpdate({_id: req.params.id}, {pickedStatus})

            res.json({msg: "Updated a Product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updatepickedStatus:async(req, res) =>{
        try {
            const {deliveredStatus} = req.body;
            await Product.findOneAndUpdate({_id: req.params.id}, {deliveredStatus})

            res.json({msg: "Updated a Product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updatecustomeraccepted:async(req, res) =>{
        try {
            const {customeraccepted} = req.body;
            await Product.findOneAndUpdate({_id: req.params.id}, {customeraccepted})

            res.json({msg: "Updated a Product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

}


module.exports = productCtrl