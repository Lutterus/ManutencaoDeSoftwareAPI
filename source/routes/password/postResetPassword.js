const postResetPassword = (Conta) => (req, res, next) => {
    
    Conta.findOne({ 
        where: {
            login: req.body.login
        }
    }).then(currentUser => {
        console.log("aaaaaaa")
        console.log(currentUser)
        console.log("bbbbbbbbbbbbbb")
        currentUser.updateAttributes({
            senha: req.body.password
        })
        
        console.log('[reset] SUCESS!')
		res.writeHead(201, {'Content-Type': 'text/html'});
		res.end('RESETED');
    }).catch(err => {
        console.error(`[reset][ERROR] ${JSON.stringify(err)}`)
        next({ status: 500, message: "internal_server_error" })
  })
}
module.exports = postResetPassword