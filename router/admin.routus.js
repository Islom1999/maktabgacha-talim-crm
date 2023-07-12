const {Router} = require('express');

const {
    getDashboard,
    getOrders,
    getWorkers,
    getGroups,
    getSettings,
    getAdmins
} = require('../controls/admin.pages.controls');

const {
    createGroup,
    deleteGroup,
    updateGroup,
    createWorker,
    deleteWorker,
    updateWorker,
    createChildren,
    deleteChildren,
    updateChildren,
    createAdmin,
    deleteAdmin,
    updateAdmin,
    doneOrder,
    deleteOrder
} = require('../controls/admin.crud.controls');

const router = Router();

router.get('/', getDashboard);
router.get('/orders', getOrders);
router.get('/workers', getWorkers);
router.get('/groups', getGroups);
router.get('/settings', getSettings);
router.get('/admins', getAdmins);



router.post('/group/create', createGroup);
router.post('/group/delete/:id', deleteGroup);
router.post('/group/update/:id', updateGroup);

router.post('/worker/create', createWorker);
router.post('/worker/delete/:id', deleteWorker);
router.post('/worker/update/:id', updateWorker);

router.post('/children/create', createChildren);
router.post('/children/delete/:id', deleteChildren);
router.post('/children/update/:id', updateChildren);

router.post('/admin/create', createAdmin);
router.post('/admin/delete/:id', deleteAdmin);
router.post('/admin/update/:id', updateAdmin);

router.post('/order/done/:id', doneOrder);
router.post('/order/delete/:id', deleteOrder);



router.get('/:id', require('../controls/404.pages.errors'))



module.exports = router;