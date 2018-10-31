// Routes
const addMile = require('./miles/add')
const editMile = require('./miles/edit')
const deleteMile = require('./miles/delete')
const addUser = require('./user/add')
const getPrograms = require('./programs/all.get')
const getProgramsDefault = require('./programs_default/all.get')
const getAllUsersMiles = require('./miles/all.users.miles.get')
const getMiles = require('./miles/all.get')
const getCurrentUser = require('./user/me.get')
const login = require('./user/login')
const notFound = require('./utils/404')
const errorHandler = require('./utils/errorHandler')
const authenticate = require('./auth/authenticate')
const resetPassword = require('./user/resetPassword')
// Dependencies

module.exports = models => ({
  authenticate: authenticate(),
  addMile: addMile(models.Milha, models.Programa),
  editMile: editMile(models.Milha),
  deleteMile: deleteMile(models.Milha),
  addUser: addUser(models.Usuario, models.Conta),
  getCurrentUser: getCurrentUser(),
  getPrograms: getPrograms(models.Programa, models.ProgramaDefault, models.Milha),
  getProgramsDefault: getProgramsDefault(models.ProgramaDefault),
  getAllUsersMiles: getAllUsersMiles(models.Milha, models.Usuario, models.Programa),
  getMiles: getMiles(models.Milha),
  login: login(models.Conta),
  errorHandler: errorHandler(),
  notFound: notFound(),
  resetPassword: resetPassword()

})