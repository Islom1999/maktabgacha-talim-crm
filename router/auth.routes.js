
const {Router} = require('express');

const {
    getLogin,
    loginAdmin
} = require('../controls/auth.controls')

const router = Router();

router.get('/login', getLogin);
router.post('/login', loginAdmin);

module.exports = router;
