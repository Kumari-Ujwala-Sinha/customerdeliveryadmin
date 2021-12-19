
## app.use('/customer', require('./routes/customerRouter'))
`Here customer could register by their mobile otp on email and add their product and admin will get list of ordered product`
`router.post('/customerlogin', customerCtrl.customerlogin)`
`router.get('/customerinfor', authCustom,  customerCtrl.getCustomer)`
`router.get('/customerorderstobepicked',   customerCtrl.getAllOrderstoPicked)`
`router.get('/deliveryboypickedorders',   customerCtrl.getAllPickedOrders)`
`router.get('/successdeliveredorders',   customerCtrl.getAllDeliveredOrders)`
`router.patch('/addcart', authCustom, customerCtrl.addCart)`

## app.use('/user', require('./routes/userRouter'))
`Here a delivery boy and admin could register themselves where a an otp will be sent to email and they would get registered`
`router.post('/register', userCtrl.register)`
`router.post('/activation', otpverify,userCtrl.activateEmail)`
`router.post('/login', userCtrl.login)`
`router.post('/refresh_token', userCtrl.getAccessToken)`
`router.post('/forgot', userCtrl.forgotPassword)`
`router.post('/reset',otpverify, userCtrl.resetPassword)`
`router.get('/infor', auth, userCtrl.getUserInfor)`
`router.get('/all_infor', auth, authAdmin, userCtrl.getUsersAllInfor)`
`router.get('/logout', userCtrl.logout)`
`router.patch('/update', auth, userCtrl.updateUser)`
`router.patch('/update_role/:id', auth, authAdmin, userCtrl.updateUsersRole)`
`router.delete('/delete/:id', auth, authAdmin, userCtrl.deleteUser)`



## app.use('/api', require('./routes/upload'))
`If there is image they could upload it`
`router.post('/upload_avatar', uploadImage, auth, uploadCtrl.uploadAvatar)`

## app.use('/api/avail', require('./routes/availproductsRouter'))
`Here admin could create their product and created product list could be shown to custormer`

`router.route('/products').get(availproductsCtrl.getProducts).post(auth, authAdmin, availproductsCtrl.createProduct)`
`router.route('/products/:id').delete(auth, authAdmin, availproductsCtrl.deleteProduct).patch(auth, authAdmin, availproductsCtrl.updateProduct)`

## app.use('/api', require('./routes/categoryRouter'))
`Here admin could create category for their product`
`router.route('/category').get(categoryCtrl.getCategories).post(auth, authAdmin, categoryCtrl.createCategory)`
`router.route('/category/:id').delete(auth, authAdmin, categoryCtrl.deleteCategory).put(auth, authAdmin, categoryCtrl.updateCategory)`

## app.use('/api', require('./routes/productRouter'))
`Here admin could give delivery boy the product list to be delivered and delivery boy would update his status `

`router.route('/product').get(productCtrl.getProducts).post(auth, authAdmin, productCtrl.createProduct)`
`router.route('/product/:id').delete(auth, authAdmin, productCtrl.deleteProduct).put(auth, authAdmin, productCtrl.updateProduct)`
`router.route('/product/deliveredStatus/:id').patch(auth,productCtrl.updatedeliveredStatus)`
`router.route('/product/customeraccepted/:id').patch(auth,productCtrl.updatecustomeraccepted)` 
`router.route('/product/pickedStatus/:id').patch(auth,productCtrl.updatepickedStatus) `
