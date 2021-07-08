const express = require('express');

const ruleController = require('../controllers/rule.controller');
const checkAuthMiddleware = require('../middleware/check-auth');
const router = express.Router();

router.get('/', ruleController.index);
router.get('/:id', ruleController.show);
router.post('/',ruleController.add);
router.patch('/:id',ruleController.update);
router.delete('/:id',ruleController.destroy);


module.exports = router;



