const postResetPassword = (Conta, Esqueci_senha) => (req, res, next) => {
    
    Conta.findOne({ 
        where: {
            login: req.body.email
        }
    }).then(currentUser => {
        console.log("aaaaaaa")
        console.log(currentUser)
        console.log("bbbbbbbbbbbbbb")
        currentUser.updateAttributes({
            senha: req.body.password  
        })
        console.log("CCCCCCCCCCCC")
        Esqueci_senha.findOne({
            where: {
                idesqueci_senha: req.body.idesqueci_senha
            }
        }).then(deleteToken => {
            console.log(deleteToken)
            deleteToken.destroy()
            console.log('[reset] SUCESS!')
            res.writeHead(201, {'Content-Type': 'text/html'});
            res.end('RESETED')
        })
            
        
    }).catch(err => {
        console.error(`[reset][ERROR] ${JSON.stringify(err)}`)
        next({ status: 500, message: "internal_server_error" })
  })
}
module.exports = postResetPassword