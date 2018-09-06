// Routes
const getPrograms = require('./programs/all.get')
const getListPrograms = require('./listprograms/all.get')
const getMiles = require('./miles/all.get')
const notFound = require('./utils/404')
const errorHandler = require('./utils/errorHandler')
// Dependencies

module.exports = models => ({
  getPrograms: getPrograms(models.Programa),
  getListPrograms: getListPrograms(models.ListPrograma),
  getMiles: getMiles(models.Milha),
  errorHandler: errorHandler(),
  notFound: notFound()

})