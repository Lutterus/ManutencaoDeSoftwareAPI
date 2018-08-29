// Routes
const getPrograms = require('./programs/all.get')
const notFound = require('./404/notFound')
const getMiles = require('./miles/all.get')
// Dependencies

module.exports = models => ({
  getPrograms: getPrograms(models.Programa),
  getMiles: getMiles(models.Milha),
  notFound: notFound()
  
})