const router = require('express').Router()
const productCtrl = require('../controllers/productCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/product')
    .get(productCtrl.getProducts)
    .post(auth, authAdmin, productCtrl.createProduct)

router.route('/product/:id')
    .delete(auth, authAdmin, productCtrl.deleteProduct)
    .put(auth, authAdmin, productCtrl.updateProduct)

    
//router.route('/product/pickedStatus/:id').patch(auth,productCtrl.updatepickedStatus)
//router.route('/product/deliveredStatus/:id').patch(auth,productCtrl.updatedeliveredStatus)
router.route('/product/customeraccepted/:id').patch(auth,productCtrl.updatecustomeraccepted) 
router.route('/product/pickedStatus/:id').patch(auth,productCtrl.updatepickedStatus)  

//router.route('/product/deliveredStatus/:id').patch(auth,productCtrl.updatedeliveredStatus) 
 


module.exports = router