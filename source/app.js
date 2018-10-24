const express = require('express')
const bodyParser = require('body-parser')
const { PORT, DB_PASSWORD } = require('../settings.js')
const docs = require('./docs')
const modelsInitializer = require('./models/index.js')
const routesInitializer = require('./routes/routes.js')
const DB = require('./database.js')
const cors = require('cors')
const db_connection = DB.connect()
const models = modelsInitializer(db_connection)
const routes = routesInitializer(models)

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const auth = require('./services/localAuth')(models.Conta)
const session = require('express-session')
passport.use(new LocalStrategy(auth))
passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

const startApp = () => {
  const app = express()
  
  app
    .set('json spaces', 2)
    .use(cors())
    .use(express.static(__dirname + '/public'))
    .use(bodyParser.json())
    .use(session({
      secret: 'keyboard_cat',
      resave: true,
      saveUninitialized: false
    }))
    .use(passport.initialize())
    .use(passport.session())
    .use('/api/docs', docs.serve, docs.setup)
    .get('/api/getPrograms/:id_user', routes.getPrograms, routes.getMiles)//routes.authenticate
    .get('/api/user', routes.authenticate, routes.getCurrentUser)
    .get('/api/getProgramsDefault', routes.getProgramsDefault)
    .get('/api/getAllUsersMiles/:page', routes.authenticate, routes.getAllUsersMiles)
    .get('/api/getMiles/:id_user/:cod_program', routes.authenticate, routes.getMiles)
    .post('/api/addMile', routes.authenticate, routes.addMile)
    .post('/api/addUser', routes.authenticate, routes.addUser)
    .post('/api/login', passport.authenticate('local', { successRedirect: '/api/user' }))
    .use(routes.errorHandler)
    .use(routes.notFound)
    .listen(PORT, () => {
      console.log(`Started application at port: ${PORT}`)
    })  
}

db_connection.sync()
  .then(startApp())
  .catch(err => console.log(err))