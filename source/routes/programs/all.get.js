const getPrograms = (Programa, ProgramaDefault, Milha) => (req, res, next) => {
  const name = req.params.id_user 
  const {contaLogin} = req.body
  Programa.findAll({ 
    include: [{ 
      model: ProgramaDefault 
    }],
    where: {
      contaLogin: name
    }
	})
    .then(programas => {
      var listaFinal = []
      var contPrograma = 0;
      if (programas != null) {
        programas.forEach(function(programa) {
          Milha.findOne({ where: {
            cod_milha: programa.dataValues.milha_expiracao_maisProxima
            
          } }).then(milha => {
            let novoPrograma = {
              cod_programa: programa.dataValues.cod_programa,
              nome: programa.dataValues.nome,
              somaMilhas: programa.dataValues.somaMilhas,
              milha_expiracao_maisProxima: milha.dataValues,
              contaLogin: programa.dataValues.contaLogin,
              contaSenha: programa.dataValues.contaSenha,
              programa_default: programa.dataValues.programa_default
            }
            listaFinal.push(novoPrograma)
            contPrograma++
            if(contPrograma === programas.length) {
              res.send(listaFinal)
            }
          })
        });
      }  
    })
    .catch(err => {
      console.error(`[ERROR] ${JSON.stringify(err)}`)
      next({status:500, message: "internal_server_error"})
    })
}

module.exports = getPrograms

/**
 * @swagger
 * {
 *  "paths": {
 *    "/api/getPrograms": {
 *      "get": {
 *        "description": "Some description...",
 *        "consumes": [],
 *        "produces": ["application/json"],
 *        "parameters": [{}],
 *        "responses":{
 *          "200": {
 *            "description": "Some description...",
 *            "examples": {
 *              "Response": [
 *                {
 *                   "nome":"programa2",
 *                   "somaMilhas":5000,
 *                   "milha_expiracao_maisProxima":null,
 *                   "contaLogin":"ciclano",
 *                   "contaSenha":"123"
 *                },
 *                {
 *                   "nome":"programa1",
 *                   "somaMilhas":5000,
 *                   "milha_expiracao_maisProxima":null,
 *                   "contaLogin":"ciclano",
 *                   "contaSenha":"123"
 *                },
 *                {
 *                   "nome":"programa3",
 *                   "somaMilhas":5000,
 *                   "milha_expiracao_maisProxima":null,
 *                   "contaLogin":"ciclano",
 *                   "contaSenha":"123"
 *                }
 *              ]
 *            }
 *          }
 *        }
 *       }
 *     }
 *  }
 * }
 */