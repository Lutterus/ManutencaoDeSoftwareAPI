const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const options = require('../swagger')
const swaggerSpec = swaggerJSDoc(options)

module.exports = {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(swaggerSpec)
}
