// Routes
const addMile = require('./miles/add')
const addUser = require('./user/add')
const getPrograms = require('./programs/all.get')
const getProgramsDefault = require('./programs_default/all.get')
const getMiles = require('./miles/all.get')
const getCurrentUser = require('./user/me.get')
const login = require('./user/login')
const notFound = require('./utils/404')
const errorHandler = require('./utils/errorHandler')
const authenticate = require('./auth/authenticate')
// Dependencies

module.exports = models => ({
  authenticate: authenticate(),
  addMile: addMile(models.Milha, models.Programa),
  addUser: addUser(models.Usuario, models.Conta),
  getCurrentUser: getCurrentUser(),
  getPrograms: getPrograms(models.Programa, models.ProgramaDefault, models.Milha),
  getProgramsDefault: getProgramsDefault(models.ProgramaDefault),
  getMiles: getMiles(models.Milha),
  login: login(models.Conta),
  errorHandler: errorHandler(),
  notFound: notFound()

})