module.exports = () => (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.status(401)
    res.send({ error: '401 Unauthorized'})
  }
}