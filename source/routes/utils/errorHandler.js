const errorHandler = () => (err, req, res, next) => {
  if(!err) return next()

  err.status && err.message
    ? res.send(err)
    : res.send({status: 400, message: `Unkown API error: ${err}` })
}

module.exports = errorHandler