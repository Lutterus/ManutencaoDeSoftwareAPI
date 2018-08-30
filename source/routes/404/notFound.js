const notFound = () => (req, res) => {
  res.status(404).send('<center><h1>404 NOT FOUND</h1></center>')
}

module.exports = notFound