const editMile = (Milha, Programa) => (req, res, next) => {

  	Programa.findOne({ where: {
  			nome: req.body.program,
  			contaLogin: req.body.user,

  		} }).then(program => {
  		// project will be the first entry of the Projects table with the title 'aProject' || null

  		if(program == null) {
  			console.log("[addMiles] Programa não existe, criando novo programa para usuário!")
		 	Programa.create({
	  			nome: req.body.program,
	  			somaMilhas: req.body.miles,
	  			milha_expiracao_maisProxima: null,
	  			contaLogin: req.body.user
	  		}).then(createdProgram => {
			  	Milha.create({ 
					quantidade: req.body.miles, 
					dt_expiracao: (req.body.expirationDate ? req.body.expirationDate : new Date()),
					cod_programa: createdProgram.dataValues.cod_programa,
					contaLogin: createdProgram.dataValues.contaLogin
				})
				.then(mile => {
				  	console.log('[addMiles] SUCESS!')
				  	res.writeHead(201, {'Content-Type': 'text/html'});
					res.end('CREATED');
				})
	  		})
	  	} else {
	  		console.log("[addMiles] Programa encontrado!")
	  		codProgram = program.cod_programa
		  	Milha.create({ 
				quantidade: req.body.miles, 
				dt_expiracao: (req.body.expirationDate ? req.body.expirationDate : new Date()),
				cod_programa: program.cod_programa,
				contaLogin: req.body.user
			})
			.then(mile => {
			  	console.log('[addMiles] SUCESS!')
			  	res.writeHead(201, {'Content-Type': 'text/html'});
				res.end('CREATED');
			})
	  	}
  		
	})
	.catch(err => {
      	console.error(`[addMiles][ERROR] ${JSON.stringify(err)}`)
      	next({ status: 500, message: "internal_server_error" })
    })
}

module.exports = editMile