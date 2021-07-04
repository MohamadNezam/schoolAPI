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
 *     summary: Create a user.
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The user ID.
 *                       example: 0
 *                     email:
 *                       type: string
 *                       description: The user's email.
 *                       example: admin@admin.com
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