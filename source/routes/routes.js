// Routes
const getPrograms = require('./programs/all.get')
const notFound = require('./404/notFound')
// Dependencies

module.exports = models => ({
  getPrograms: getPrograms(models.Programa),
  notFound: notFound()
})