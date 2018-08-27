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

const startApp = () => {
  app.get('/', (req, res) => {
    res.send('Everything seems fine here')
    
  })
  
  app.get('/api/getPrograms/:userId', routes.getPrograms)
  
  app.listen(PORT, () => {
    console.log(`Started application at port: ${PORT}`)
  })  
}

connection.sync()
  .then(() => {

    const { Usuario } = require('./models/index.js')(connection)
    Usuario.findAll()
      .then(data => {
        console.log('DATA: '+data)
      })
      .catch(err => console.log('error: \n'+JSON.stringify(err)))
      
  })
  .then(startApp())
  .catch(err => console.log(err))