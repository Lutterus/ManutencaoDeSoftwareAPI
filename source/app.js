const express = require('express')
const bodyParser = require('body-parser')
const { PORT } = require('../settings.js')
const docs = require('./docs')
const modelsInitializer = require('./models/index.js')
const routesInitializer = require('./routes/routes.js')
const DB = require('./database.js')

const db_connection = DB.connect()
const models = modelsInitializer(db_connection)
const routes = routesInitializer(models)

const startApp = () => {
  const app = express()

  app
    .set('json spaces', 2)
    .use(express.static(__dirname + '/public'))
    .use(bodyParser.json())
    .use('/api/docs', docs.serve, docs.setup)
    .get('/api/getPrograms', routes.getPrograms)
    .get('/api/getProgramsDefault', routes.getProgramsDefault)
    .get('/api/getMiles', routes.getMiles)
    .post('/api/addMile', routes.addMile)
    .use(routes.errorHandler)
    .use(routes.notFound)
    .listen(PORT, () => {
      console.log(`Started application at port: ${PORT}`)
    })  
}

db_connection.sync()
  .then(startApp())
  .catch(err => console.log(err))