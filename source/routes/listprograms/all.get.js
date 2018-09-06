const getListPrograms = ListPrograma => (req, res, next) => {
    ListPrograma.findAll()
      .then(listprogramas => {
        res.send(listprogramas)
      })
      .catch(err => {
        console.error(`[ERROR] ${JSON.stringify(err)}`)
        next({status:500, message: "internal_server_error"})
      })
  }
  
  module.exports = getListPrograms
  