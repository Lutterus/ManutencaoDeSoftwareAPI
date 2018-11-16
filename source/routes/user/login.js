const login = Conta => (req, res, next) => {
	const {username, password} = req.body
  	Conta.findOne({ where: {
	  			login: username, 
	  			senha: password
	  		} 
  		})
	    .then(conta => {
			console.log("aaaaaaaaaaaa")
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