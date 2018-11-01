const updateProgramMiles = (Programa, Milha) => (req, res, next) => {
	console.log(req.body.cod_programa)
  	Programa.findOne({ 

  		where: {
  			$or: [{nome: req.body.program}, {cod_programa: req.body.cod_programa}],
  			contaLogin: req.body.user

  		} 
  	}).then(program => {
  		// project will be the first entry of the Projects table with the title 'aProject' || null

  		if(program == null) {
  			console.log("[updateProgramMiles] Programa não existe!")
  			// res.writeHead(404, {'Content-Type': 'text/html'});
			res.end('PROGRAM NOT FOUND');
  			
	  	} else {
	  		console.log("[updateProgramMiles] Programa encontrado!")

	  		var somaMilhas = 0
	  		var nextDate = "2099-12-30"
	  		var mileCode = 0

	  		Milha.findAll({ where: {
            	cod_programa: program.cod_programa
            
          		}
          	}).then(miles => {

          		miles.forEach(function(mile) {
          			somaMilhas += Number(mile.dataValues.quantidade)

          			if(mile.dataValues.dt_expiracao < nextDate) {
          				nextDate = mile.dataValues.dt_expiracao
          				mileCode = mile.dataValues.cod_milha
          			}
          		})
          		console.log("Soma de milhas: " + somaMilhas)
          		console.log("Código da milha: " + mileCode)
          		console.log("Data de expiração: " + nextDate)

          		program.update({
  					 somaMilhas: somaMilhas,
  					 milha_expiracao_maisProxima: mileCode
				}).then(() => {
					console.log('[updateProgramMiles] SUCESS!')
					// res.writeHead(200, {'Content-Type': 'text/html'});
					res.end('UPDATED');
				})
          	})
	  	}
  		
	})
	.catch(err => {
      	console.error(`[updateProgramMiles][ERROR] ${JSON.stringify(err)}`)
      	next({ status: 500, message: "internal_server_error" })
    })
}

module.exports = updateProgramMiles