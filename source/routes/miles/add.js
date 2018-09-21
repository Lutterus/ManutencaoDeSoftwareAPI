const addMiles = (Milha, Programa) => (req, res, next) => {

	console.log('POST /');
	console.log(req.body);
	console.log(req.body.program);

	//Programa.findById(req.body.program).then(program => {
  		// project will be an instance of Project and stores the content of the table entry
  		// with id 123. if such an entry is not defined you will get null

  	Programa.findOne({ where: {
  			nome: req.body.program,
  			contaLogin: req.body.user,

  		} }).then(program => {
  		// project will be the first entry of the Projects table with the title 'aProject' || null

  		let codProgram;
  		console.log(program);
  		if(program == null) {
  			console.log("[addMiles] Programa não existe, criando novo programa para usuário!")
  			Programa.max('cod_programa').then(max => {
			 	Programa.create({
		  			cod_programa: max+1,
		  			nome: req.body.program,
		  			somaMilhas: req.body.milhas,
		  			milha_expiracao_maisProxima: req.body.closestExpiration
		  		}).then(createdProgram => {
		  			codProgram = createdProgram.cod_programa
		  		})
			})
	  	} else {
	  		console.log("[addMiles] Programa encontrado!")
	  		codProgram = program.cod_programa
	  	}

		Milha.max('cod_milha').then(max => {
		  	Milha.create({ 
				cod_milha: max+1, 
				quantidade: req.body.miles, 
				dt_expiracao: (req.body.expirationDate ? req.body.expirationDate : new Date()),
				cod_programa: codProgram,
				contaLogin: req.body.user
			})
			.then(mile => {
			  	console.log('SUCESS!')
			  	res.writeHead(201, {'Content-Type': 'text/html'});
				res.end('CREATED');
			})
		})
  		
	})
	.catch(err => {
      	console.error(`[ERROR] ${JSON.stringify(err)}`)
      	next({ status: 500, message: "internal_server_error" })
    })

	/*
  Milha.findAll({ where: {contaLogin: 'ciclano', cod_programa: '21'} })
    .then(milhas => {
      res.send(milhas)
    })
    .catch(err => {
      console.error(`[ERROR] ${JSON.stringify(err)}`)
      next({ status: 500, message: "internal_server_error" })
    })
    */
}

module.exports = addMiles