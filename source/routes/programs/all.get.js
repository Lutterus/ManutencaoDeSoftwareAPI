const getPrograms = (Programa, ProgramaDefault) => (req, res, next) => {
  Programa.findAll({ include:
		[{ model: ProgramaDefault }] 
	})
    .then(programas => {
      res.send(programas)
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