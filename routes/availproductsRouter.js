const router = require('express').Router()
const availproductsCtrl = require('../controllers/availproductsCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/products')
    .get(availproductsCtrl.getProducts)
    .post(auth, authAdmin, availproductsCtrl.createProduct)


router.route('/products/:id')
    .delete(auth, authAdmin, availproductsCtrl.deleteProduct)
    .patch(auth, authAdmin, availproductsCtrl.updateProduct)



module.exports = router