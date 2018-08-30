const express = require('express')
const bodyParser = require('body-parser')
const { PORT } = require('../settings.js')
const DB = require('./database.js')
const db_connection = DB.connect()


const modelsInitializer = require('./models/index.js')
const models = modelsInitializer(db_connection)

const routesInitializer = require('./routes/routes.js')
const routes = routesInitializer(models)

const startApp = () => {
  const app = express()

  app
    .use(bodyParser.json())
    .get('/', (req, res) => {
      res.send('Everything seems fine here')
    })
    .get('/api/getPrograms', routes.getPrograms)
    .get('/api/getMiles', routes.getMiles)
    .use(routes.notFound)
    .listen(PORT, () => {
      console.log(`Started application at port: ${PORT}`)
    })  
}

db_connection.sync()
  .then(startApp())
  .catch(err => console.log(err))