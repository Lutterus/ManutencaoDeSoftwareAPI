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

/**
 * @swagger
 * {
 *  "paths": {
 *    "/api/getMiles": {
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
 *                   "cod_milha":104,
 *                   "quantidade":"5000",
 *                   "dt_expiracao":"2018-12-15",
 *                   "cod_programa":21,
 *                   "contaLogin":"ciclano"
 *                },
 *                {
 *                   "cod_milha":105,
 *                   "quantidade":"2500",
 *                   "dt_expiracao":"2018-12-15",
 *                   "cod_programa":21,
 *                   "contaLogin":"ciclano"
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