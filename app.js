const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const port = process.env.PORT || 3000;
const app = express();
const userRoute = require('./routes/user');

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
      }
    },
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


app.use("/user", userRoute);


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
    res.json({'message': 'ok'});
  })
  

module.exports = app;