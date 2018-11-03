const getMile = (Milha, Programa) => (req, res, next) => {
	const id_user = req.params.id_user 
    const cod_mile = req.params.cod_mile
  Milha.findOne({ 
  		where: {
            contaLogin: id_user,
  			cod_milha: cod_mile
  		}
  	})
    .then(milhas => {
        Programa.findOne({ 
            where: {
                cod_programa: milhas.dataValues.cod_programa
            }
        }).then(programas => {
            let response = {
                cod_milha: milhas.cod_milha,
                quantidade: milhas.quantidade,
                expiracao: milhas.dt_expiracao,
                nomePrograma: programas.nome
              }
            res.send(response)
      })
    })
    .catch(err => {
      console.error(`[ERROR] ${JSON.stringify(err)}`)
      next({ status: 500, message: "internal_server_error" })
    })
}

module.exports = getMile