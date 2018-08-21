const mockedGetPrograms = () => (req, res) => {
  const response = require('./mockedResponse.js')

  res.send(response)
}

module.exports = mockedGetPrograms