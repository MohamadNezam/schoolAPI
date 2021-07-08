var compression = require('compression')
const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const port = process.env.PORT || 3000;


const app = express();
app.use(helmet());
app.use(compression());
const userRoute = require('./routes/user');
const ruleRoute = require('./routes/rule');
const user_ruleRoute = require('./routes/user_rule');





// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "School Managment API",
        description: "School API Information",
        contact: {
          name: "Amazing Developer"
        },
        
        servers: [`http://localhost:${port}`]
      },
      
    },
    authAction :{ authentication: {name: "authentication", schema: {type: "apiKey", in: "header", name: "Authorization", description: ""}, value: "Bearer <JWT>"} },
    // ['.routes/*.js']
    apis: ["app.js"]
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
 

// Routes

app.use("/user", userRoute);
app.use("/rule", ruleRoute);
app.use("/user-rule", user_ruleRoute);

/**
 * @swagger
 * /:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */


app.get('/', (req, res) => {
 
    res.json({'message': `API link at http://localhost:${port}/api-docs/`});
  })
  

module.exports = app;


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


/**
 * @swagger
 * /user/auth-user:
 *  get:
 *    security:              # <--- ADD THIS
 *      - bearerAuth: []     # <--- ADD THIS
 *    description: Use to request all users
 *    responses:
 *      '200':
 *        description: A successful response
 * 
 */

// Rules ***********

/**
 * @swagger
 * /rule:
 *  get:
 *    description: get all
 *    responses:
 *      '200':
 *        description: A successful response
 *  post:
 *     summary: add a new .
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: add new record
 *         description: Create a new user.
 *         schema:
 *           type: object
 *           required:
 *             - ruleName
 *           properties:
 *             ruleName:
 *               type: string
 *               example: admin
 *             ruleDescription:
 *               type: string
 *               example: Do what he wants
 *             
 *     responses:
 *       201:
 *         description: Created 
 */

/**
 * @swagger
 * /rule/{id}:
 *  get:
 *    description: get by id
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *    responses:
 *      '200':
 *        description: A successful response
 *  patch:
 *     summary: edit a raw .     
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: edit a record
 *         description: edit an old record.
 *         schema:
 *           type: object
 *           required:
 *             - ruleName
 *           properties:
 *             ruleName:
 *               type: string
 *               example: admin
 *             ruleDescription:
 *               type: string
 *               example: Do what he wants
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true             
 *     responses:
 *       201:
 *         description: Created 
 * 
 *  delete:
 *    description: delete by id
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *    responses:
 *      '200':
 *        description: A Record Delete it succesfully
 *  
 * 
 */



// user-rule *********

/**
 * @swagger
 * /user-rule:
 *  get:
 *    description: get all
 *    responses:
 *      '200':
 *        description: A successful response
 *  post:
 *     summary: add a new .
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: add new record
 *         description: Create a new user.
 *         schema:
 *           type: object
 *           required:
 *             - user_id
 *             - rule_id
 *           properties:
 *             user_id:
 *               type: integer
 *             rule_id:
 *               type: integer
 *             
 *     responses:
 *       201:
 *         description: Created 
 */

/**
 * @swagger
 * /user-rule/{id}:
 *  get:
 *    description: get by id
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *    responses:
 *      '200':
 *        description: A successful response
 *  patch:
 *     summary: edit a raw .     
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: edit a record
 *         description: edit an old record.
 *         schema:
 *           type: object
 *           required:
 *             - user_id
 *             - rule_id
 *           properties:
 *             user_id:
 *               type: integer
 *             rule_id:
 *               type: integer
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true             
 *     responses:
 *       201:
 *         description: Created 
 * 
 *  delete:
 *    description: delete by id
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *    responses:
 *      '200':
 *        description: A Record Delete it succesfully
 *  
 * 
 */