module.exports = () => (req, res, next) => {
  req.user
    ? res.send(req.user)
    : next({ status: 401, error: "401 Unauthorized"})
}