const express = require('express');

const user_ruleController = require('../controllers/user_rule.controller');
const checkAuthMiddleware = require('../middleware/check-auth');
const router = express.Router();

router.get('/', user_ruleController.index);
router.get('/:id', user_ruleController.show);
router.post('/',user_ruleController.add);
//router.patch('/:id',user_ruleController.update);
//router.delete('/:id',user_ruleController.destroy);


module.exports = router;



