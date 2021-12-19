const AvailProducts = require('../models/availproductsModel')


const availproductsCtrl = {
    getProducts: async(req, res) =>{
        try {
     

            const products =await AvailProducts.find()

            res.json({
                status: 'success',
                result: products.length,
                products: products
            })
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createProduct: async(req, res) =>{
        try {
            const { product_id, title, price, category} = req.body;
            

            const product = await AvailProducts.findOne({product_id})
            if(product)
                return res.status(400).json({msg: "This product already exists."})

            const newProduct = new AvailProducts({
                product_id, title: title.toLowerCase(), price, category
            })

            await newProduct.save()
            res.json({msg: "Created a product"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteProduct: async(req, res) =>{
        try {
            await AvailProducts.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateProduct: async(req, res) =>{
        try {
            const {title, price,  category} = req.body;
        

            await AvailProducts.findOneAndUpdate({_id: req.params.id}, {
                title: title.toLowerCase(), price,  category
            })

            res.json({msg: "Updated a Product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}


module.exports = availproductsCtrl