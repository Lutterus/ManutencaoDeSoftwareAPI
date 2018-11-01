const resetPassword = () => (req, res, next) => {
    var nodemailer = require('nodemailer')
    const email= req.body.email;
    const emailSuperMilhas = "email super milhas"
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'emailSuperMilhas',
        pass: 'senha'
    }
    });

    var mailOptions = {
    from: emailSuperMilhas,
    to: email,
    subject: 'Super Milhas, redefinição de senha',
    text: 'NÃO RESPONDA ESTA MENSAGEM \nRecebemos uma solicitação de redefinição da senha vinculada a este e-mail no nosso aplicativo. Se realmente foi você, finalize a redefinição através deste link: www.umSite.com.br'
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log("ERROR: " + error);
        //em caso de erro, marcar como positivo a opção neste site https://www.google.com/settings/security/lesssecureapps
    } else {
        console.log('Email sent: ' + info.response);
    }
    });
  }
  
  module.exports = resetPassword
 