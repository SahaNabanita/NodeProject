const router = require('express').Router();
const adminController = require('../controllers/admin.controller')

router.get('/', adminController.showIndex);
router.get('/dashboard', adminController.dashboard);
router.get('/template', adminController.template);
router.get('/register',adminController.register)
router.post('/getRegister',adminController.getRegister)
router.post('/getLogIn',adminController.getLogIn)



module.exports = router;