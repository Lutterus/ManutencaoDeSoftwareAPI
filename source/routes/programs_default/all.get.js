const getProgramsDefault = ProgramaDefault => (req, res, next) => {
    ProgramaDefault.findAll()
      .then(programa_defaults => {
        res.send(programa_defaults)
      })
      .catch(err => {
        console.error(`[ERROR] ${JSON.stringify(err)}`)
        next({status:500, message: "internal_server_error"})
      })
  }
  
  module.exports = getProgramsDefault
  