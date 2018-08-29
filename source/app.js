const express = require('express')
const { PORT } = require('../settings.js')
const DB = require('./database.js')
const db_connection = DB.connect()

const modelsInitializer = require('./models/index.js')
const models = modelsInitializer(db_connection)

const routesInitializer = require('./routes/routes.js')
const routes = routesInitializer(models)

const startApp = () => {
  const app = express()

  app.get('/', (req, res) => {
    res.send('Everything seems fine here')
    
  })
  app.get('/api/getPrograms', routes.getPrograms)
  
  app.use(routes.notFound)
  
  app.listen(PORT, () => {
    console.log(`Started application at port: ${PORT}`)
  })  
}

db_connection.sync()
  .then(startApp())
  .catch(err => console.log(err))