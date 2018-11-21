const resetPassword = (Esqueci_senha, Usuario) => (req, res, next) => {
    const emailSuperMilhas = "o email a ser usado"
    const senhaSuperMilhas = "a senha do email a ser usado"
    const emailUser = req.body.email;
    var nodemailer = require('nodemailer')
    const URL = 'www.umSite.com/changePassword/'
    const emailServico = 'gmail'

    Usuario.findOne({ where: {email: emailUser}
    }).then(user => { 
        if(user===null){
            console.error(`Usuario nao encontrado `)
            next({ status: 500, message: "internal_server_error" })
        }else{
            Esqueci_senha.findOne({ where: {
                email: emailUser
            } }).then(tempRequest => {
                if(tempRequest===null){
                    console.log("temp usuario/token nao encontrado... criando")
                    require('crypto').randomBytes(48, function(err, buffer) {
                        Esqueci_senha.create({ 
                            idesqueci_senha: user.cod_usuario, 
                            email: user.email,
                            token: buffer.toString('hex'),
                            dt_criacao:  new Date()
                        }).then(confirm => {
                            var transporter = nodemailer.createTransport({
                                service: emailServico,
                                auth: {
                                    user: emailSuperMilhas,
                                    pass: senhaSuperMilhas
                                }
                                });
                            
                                var mailOptions = {
                                from: emailSuperMilhas,
                                to: emailUser,
                                subject: 'Super Milhas, redefinição de senha',
                                text: 'NÃO RESPONDA ESTA MENSAGEM \nRecebemos uma solicitação de redefinição da senha vinculada a este e-mail no nosso aplicativo. Se realmente foi você, finalize a redefinição através deste link: ' + URL+confirm.token
                                };
                            
                                transporter.sendMail(mailOptions, function(error, info){
                                if (error) {
                                    console.log("ERROR: " + error);
                                    //em caso de erro, marcar como positivo a opção neste site https://www.google.com/settings/security/lesssecureapps
                                } else {
                                    console.log('Email sent: ' + info.response);
                                    res.send("SUCESSO")
                                }
                                }); 
                        })
                    });
                    
                }else{
                    var transporter = nodemailer.createTransport({
                        service: emailServico,
                        auth: {
                            user: emailSuperMilhas,
                            pass: senhaSuperMilhas
                        }
                        });
                    
                        var mailOptions = {
                        from: emailSuperMilhas,
                        to: emailUser,
                        subject: 'Super Milhas, redefinição de senha',
                        text: 'NÃO RESPONDA ESTA MENSAGEM \nRecebemos uma solicitação de redefinição da senha vinculada a este e-mail no nosso aplicativo. Se realmente foi você, finalize a redefinição através deste link: ' + URL+tempRequest.token
                        };
                    
                        transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                            console.log("ERROR: " + error);
                            //em caso de erro, marcar como positivo a opção neste site https://www.google.com/settings/security/lesssecureapps
                        } else {
                            console.log('Email sent: ' + info.response);
                            res.send("SUCESSO")
                        }
                        });                    
                }
                
            })
        }
    }).catch(err => {
        console.error(`[ERROR] ${JSON.stringify(err)}`)
        next({ status: 500, message: "internal_server_error" })
    })
  }  

  module.exports = resetPassword
 