module.exports = (Conta) => (login, senha, done) => {
  Conta.findOne({
    where: {
      login: login,
      senha: senha
    }
  })
    .then(conta => {
      if (!conta) return done(null, false, { message: 'Incorrect username or password.' });

      done(null, conta)
    })
    .catch(err => {
      console.error(`[ERROR] ${JSON.stringify(err)}`)
      done(err)
    })
}