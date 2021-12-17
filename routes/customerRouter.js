const router = require('express').Router()
const customerCtrl = require('../controllers/customerCtrl')
const authCustom = require('../middleware/authCustom')



router.post('/customerlogin', customerCtrl.customerlogin)


router.get('/customerinfor', authCustom,  customerCtrl.getCustomer)
router.get('/customerorders', authCustom,  customerCtrl.getAllOrderstoDeliver)

router.patch('/addcart', authCustom, customerCtrl.addCart)




module.exports = router