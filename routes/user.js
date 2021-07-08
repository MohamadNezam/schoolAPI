const express = require('express');
const userController = require('../controllers/user.controller');
const checkAuthMiddleware = require('../middleware/check-auth');
const router = express.Router();


router.get('/',userController.index);
router.post('/sign-up', userController.signUp);
router.post('/login', userController.login);
router.get('/rule/:id',userController.getUserRules);
router.get('/auth-user',checkAuthMiddleware.checkAuth,userController.authUser);



module.exports = router;



