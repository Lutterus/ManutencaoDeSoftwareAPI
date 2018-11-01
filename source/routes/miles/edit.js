const editMile = (Milha) => (req, res, next) => {

  	Milha.findOne({ where: {
  			cod_milha: req.body.cod_milha,
  			contaLogin: req.body.user,

  		} }).then(mile => {

  		if(mile != null && req.body.program) {

  			var qty =  req.body.quantidade
  			var dt_expiracao = req.body.dt_expiracao

  			if(qty != null && dt_expiracao != null) {
  				mile.update({
  					 quantidade: qty,
  					 dt_expiracao: dt_expiracao
				  })
				.then(() => {
          next()
					console.log('[editMile] SUCESS!')
					res.writeHead(200, {'Content-Type': 'text/html'});
					res.end('EDITED');
				}) 

  			} else {
  				res.writeHead(404, {'Content-Type': 'text/html'});
				  res.end('EMPTY FIELDS');
  			}
  			
	  	} else {
	  		res.writeHead(404, {'Content-Type': 'text/html'});
			  res.end('MILE NOT FOUND OR PROGRAM CODE EMPTY');
	  	}
  		
	})
	.catch(err => {
      	console.error(`[editMile][ERROR] ${JSON.stringify(err)}`)
      	next({ status: 500, message: "internal_server_error" })
    })
}

module.exports = editMile