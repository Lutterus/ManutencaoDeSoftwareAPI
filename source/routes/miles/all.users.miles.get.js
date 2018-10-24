const getAllUsersMiles = (Milha, Usuario, Programa) => (req, res) => {

  let limit = 7;   // number of records per page
  let offset = 0;

  Milha.findAndCountAll()
    .then(data => {
      let page = req.params.page;      // page number
      let pages = Math.ceil(data.count / limit);
      offset = limit * (page - 1);
      Milha.findAll({
        include: [
          { model: Usuario },
          { model: Programa }
        ],
        order: [
            ['dt_expiracao', 'DESC']
        ],
        limit: limit,
        offset: offset
      })
      .then((milhas) => {
        res.status(200).json({'result': milhas, 'count': data.count, 'pages': pages})
        //res.send()
      });
    })
    .catch(err => {
      console.error(`[ERROR] ${JSON.stringify(err)}`)
      next({ status: 500, message: "internal_server_error" })
    })
}

module.exports = getAllUsersMiles

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