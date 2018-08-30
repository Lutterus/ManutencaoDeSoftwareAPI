const getMiles = Milha => (req, res) => {
  Milha.findAll({ where: {contaLogin: 'ciclano', cod_programa: '21'} })
    .then(milhas => {
      res.send(milhas)
    })
    .catch(err => {
      console.error(JSON.stringify(err))
      //TO DO
      //enviar para pagina de erro
      res.send(err)
    })
}

module.exports = getMiles