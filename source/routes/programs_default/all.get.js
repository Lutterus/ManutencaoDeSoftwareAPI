const getPrograma_default = Programa_default => (req, res, next) => {
    Programa_default.findAll()
      .then(programa_defaults => {
        res.send(programa_defaults)
      })
      .catch(err => {
        console.error(`[ERROR] ${JSON.stringify(err)}`)
        next({status:500, message: "internal_server_error"})
      })
  }
  
  module.exports = getPrograma_default
  