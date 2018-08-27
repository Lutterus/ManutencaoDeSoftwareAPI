const express = require('express')
const routes = require('./routes/routes.js')
const { PORT } = require('../settings.js')
const DB = require('./database.js')
const connection = DB.connect()

const app = express()


connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
const Programa = require('./models/index.js')(connection)

const startApp = () => {
  app.get('/', (req, res) => {
    Programa.findOne({})
      .then(data => {
        res.send('DATA: '+data)
      })
    
  })
  
  app.get('/api/getPrograms/:userId', routes.getPrograms)
  
  app.listen(PORT, () => {
    console.log(`Started application at port: ${PORT}`)
  })
  
  
}

connection.sync()
  .then(startApp())
  .catch(err => console.log(err))