const getResetPassword = (Esqueci_senha) => (req, res, next) => {
    const userToken = req.params.token 
    Esqueci_senha.findOne({
        where: {
            token: userToken
        }
    }).then(currentToken => {
        if(currentToken===null){
            console.error(`[ERROR] ${JSON.stringify(err)}`)
            next({ status: 500, message: "internal_server_error" })
        }else{
            res.send(currentToken)
        }
    }).catch(err => {
        console.error(`[ERROR] ${JSON.stringify(err)}`)
        next({ status: 500, message: "internal_server_error" })
    })
}
module.exports = getResetPassword