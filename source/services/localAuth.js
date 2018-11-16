module.exports = (Conta) => (req, login, senha, done) => {
  Conta.findOne({
    where: {
      login: login,
      senha: senha
    }
  })
    .then(conta => {
      console.log(req.body)
      if (!conta) {
          return done(null, false, { message: 'Incorrect username or password.' });
      }

      // Verifica se usuário tem acesso de admin ou não
      // Precisa passar a flag 'is_admin' como false no mobile e como true no web

      // if (conta && conta.is_admin != req.body.is_admin) {
      //   return done(null, false, { message: 'Invalid access.'});
      // }

      done(null, conta)
    })
    .catch(err => {
      console.error(`[ERROR] ${JSON.stringify(err)}`)
      done(err)
    })
}