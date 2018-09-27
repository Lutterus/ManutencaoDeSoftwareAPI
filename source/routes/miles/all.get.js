const getMiles = Milha => (req, res) => {
	const id_user = req.params.id_user 
	const cod_program = req.params.cod_program 
  Milha.findAll({ 
  		where: {
  			contaLogin: id_user, cod_programa: cod_program
  		},
  		order: [
            ['dt_expiracao', 'DESC']
        ]

  	})
    .then(milhas => {
      res.send(milhas)
    })
    .catch(err => {
      console.error(`[ERROR] ${JSON.stringify(err)}`)
      next({ status: 500, message: "internal_server_error" })
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