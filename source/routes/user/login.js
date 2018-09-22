const login = Conta => (req, res, next) => {
	const {login, senha} = req.body
  	Conta.findOne({ where: {
	  			login: login, 
	  			senha: senha
	  		} 
  		})
	    .then(conta => {
	      	if(conta != null) {
	      		res.writeHead(200, {'Content-Type': 'text/html'});
				res.end('SUCCESS');
	      	} else {
	      		res.status(404)        // HTTP status 404: NotFound
   				.send('Not found')
	      	}
	      	
	    })
	    .catch(err => {
	      console.error(`[ERROR] ${JSON.stringify(err)}`)
	      next({ status: 500, message: "internal_server_error" })
	    })
}

module.exports = login