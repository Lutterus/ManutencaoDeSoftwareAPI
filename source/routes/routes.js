// Routes
const getPrograms = require('./programs/all.get')
const getProgramsDefault = require('./programs_default/all.get')
const getMiles = require('./miles/all.get')
const addMile = require('./miles/add')
const notFound = require('./utils/404')
const errorHandler = require('./utils/errorHandler')
// Dependencies

module.exports = models => ({
  getPrograms: getPrograms(models.Programa, models.ProgramaDefault),
  getProgramsDefault: getProgramsDefault(models.ProgramaDefault),
  getMiles: getMiles(models.Milha),
  addMile: addMile(models.Milha, models.Programa),
  errorHandler: errorHandler(),
  notFound: notFound()

})