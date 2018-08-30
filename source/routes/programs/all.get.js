const getPrograms = Programa => (req, res) => {
  Programa.findAll({ where: { contaLogin: 'ciclano' } })
    .then(programas => {
      res.send(programas)
    })
    .catch(err => {
      console.error(JSON.stringify(err))
      
      res.send(err)
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