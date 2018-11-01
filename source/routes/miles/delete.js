const deleteMile = (Milha) => (req, res, next) => {

  	Milha.find({ where: {
  			cod_milha: req.body.cod_milha,
  			contaLogin: req.body.user,

  		} 
    })

    .then(mile => {

  		if(mile != null && req.body.program) {

  			return mile.destroy();

	  	} else {

	  		res.writeHead(404, {'Content-Type': 'text/html'});
			  res.end('NOT FOUND OR PROGRAM CODE EMPTY');
  		}
	 })

   .then(() => {
      next()
 		  console.log('[deleteMile] SUCESS!')
			  res.writeHead(200, {'Content-Type': 'text/html'});
				res.end('DELETED');
	 })
	.catch(err => {
      	console.error(`[deleteMile][ERROR] ${err}`)
      	next({ status: 500, message: "internal_server_error" })
    })
}

module.exports = deleteMile