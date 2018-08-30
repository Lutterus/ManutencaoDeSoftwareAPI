/**
 * @swagger
 * /stocks:
 *   get:
 *     description: Retrieve the full list of stocks
 *     tags:
 *       - stocks
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: stocks
 *         schema:
 *           $ref: '#/definitions/Stocks'
 */

const notFound = () => (req, res) => {
  res.status(404).send('<center><h1>404 NOT FOUND</h1></center>')
}

module.exports = notFound