const getProgramsDefault = ProgramaDefault => (req, res, next) => {
    ProgramaDefault.findAll()
      .then(programa_defaults => {
        res.send(programa_defaults)
      })
      .catch(err => {
        console.error(`[ERROR] ${JSON.stringify(err)}`)
        next({status:500, message: "internal_server_error"})
      })
  }
  
  module.exports = getProgramsDefault
  
  /**
 * @swagger
 * {
 *  "paths": {
 *    "/api/getProgramsDefault": {
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
 *                    {
 *                       "nome": "programa1",
 *                      "imagem": "https://http2.mlstatic.com/locomotiva-motorizada-thomas-seus-amigos-thomas-10cm-trem-D_NQ_NP_602328-MLB26013645215_092017-F.jpg"
 *                    },
 *                    {
 *                      "nome": "programa2",
 *                      "imagem": "https://vignette.wikia.nocookie.net/jayjay/images/f/f8/Fun_meet_savannah_lg.jpg/revision/latest?cb=20120725183431"
 *                    },
 *                    {
 *                      "nome": "programa3",
 *                      "imagem": "https://i.imgur.com/qbjvM45.jpg"
 *                    }
 *                  ]
 *            }
 *          }
 *        }
 *       }
 *     }
 *  }
 * }
 */