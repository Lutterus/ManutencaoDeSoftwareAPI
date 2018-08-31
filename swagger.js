const options = {
  swaggerDefinition: {
    info: {
      title: 'SuperMilhas - DOCS',
      version: 'v0.1',
      description: 'REST API with Swagger doc',
      contact: {
        email: 'supermilas@contato.com'
      }
    },
    schemes: ['http'],
    host: 'localhost:3000',
    basePath: '/api'
  },
  apis: ['./source/routes/**/*.js']
}

module.exports = options