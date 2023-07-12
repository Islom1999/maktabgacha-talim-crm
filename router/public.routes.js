
const {Router} = require('express');

const {
    getDashboard,
    getOrders,
    getCreateOrders,
    createOrder
} = require('../controls/public.controls');


const router = Router();


router.get('/', getDashboard)
router.get('/orders', getOrders)
router.get('/orders/create', getCreateOrders)
router.post('/order/create', createOrder)


module.exports = router;
