const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

router.post('/sign-up', userController.signUp);
router.post('/login', userController.login);
router.get('/',userController.index);
router.get('/test',userController.test);
module.exports = router;


/**
 * @swagger
 * /user/sign-up:
 *   post:
 *     summary: Creates a new user.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: sign-up a user
 *         description: Create a new user.
 *         schema:
 *           type: object
 *           required:
 *             - email
 *           properties:
 *             email:
 *               type: string
 *               example: test@hotmail.com
 *             password:
 *               type: string
 *               example: Pa$$w0rd
 *             firstName:
 *               type: string
 *               example: test
 *             lastName:
 *               type: string
 *               example: test
 *             mobilePhone:
 *               type: string
 *               example: 911111111
 *     responses:
 *       201:
 *         description: Created
*/



/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Login.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: login a user
 *         description: login a user.
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *               example: test@hotmail.com
 *             password:
 *               type: string
 *               example: Pa$$w0rd
 *     responses:
 *       200:
 *         description: Created
*/


/**
 * @swagger
 * /user:
 *  get:
 *    description: Use to request all users
 *    responses:
 *      '200':
 *        description: A successful response
 * 
 */


