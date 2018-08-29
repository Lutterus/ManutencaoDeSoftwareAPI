const getPrograms = Programa => (req, res) => {
  Programa.findAll()
    .then(programas => {
      res.send(programas)
    })
    .catch(err => {
      console.error(JSON.stringify(err))
      //TO DO
      //enviar para pagina de erro
      res.send(err)
    })
}

module.exports = getPrograms