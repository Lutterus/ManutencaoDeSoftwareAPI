const addUser = (Usuario, Conta) => (req, res, next) => {

  	Usuario.findOne({ where: {
  			email: req.body.email
  		} }).then(user => {

	  		if(user == null) {
	  			console.log("[addUser] Usuário não existe, criando novo usuário!")
			 	Usuario.create({
		  			email: req.body.email,
		  			nome: req.body.nome,
		  			telefone: req.body.telefone
		  		}).then(createdUser => {
		  			Conta.create({
		  				login: createdUser.dataValues.email,
		  				senha: req.body.senha,
		  				cod_usuario: createdUser.dataValues.cod_usuario,
		  				is_admin: false
		  			}).then(createdConta => {
		  				console.log('[addUser] SUCESS!')
				  		res.writeHead(201, {'Content-Type': 'text/html'});
						res.end('CREATED');
		  			})
		  		})
		  	} else {
		  		console.log("[addUser] usuário já existe!")
		  		res.writeHead(404, {'Content-Type': 'text/html'});
				res.end('USER ALREADY EXISTS');
		  	}
  		
	}).catch(err => {
      	console.error(`[addUser][ERROR] ${JSON.stringify(err)}`)
      	next({ status: 500, message: "internal_server_error" })
    })
}

module.exports = addUser