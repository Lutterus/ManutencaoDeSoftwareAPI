// Routes
const getPrograms = require('./programs/all.get')
const getProgramsDefault = require('./programs_default/all.get')
const getMiles = require('./miles/all.get')
const addMile = require('./miles/add')
const login = require('./user/login')
const getCurrentUser = require('./user/me.get')
const notFound = require('./utils/404')
const errorHandler = require('./utils/errorHandler')
const authenticate = require('./auth/authenticate')
// Dependencies

module.exports = models => ({
  authenticate: authenticate(),
  getCurrentUser: getCurrentUser(),
  getPrograms: getPrograms(models.Programa, models.ProgramaDefault),
  getProgramsDefault: getProgramsDefault(models.ProgramaDefault),
  getMiles: getMiles(models.Milha),
  addMile: addMile(models.Milha, models.Programa),
  login: login(models.Conta),
  errorHandler: errorHandler(),
  notFound: notFound()

})