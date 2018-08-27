const sequelize = require('sequelize')
const programa = require('./Programa')
const conta = require('./Conta')
const milha = require('./Milha')
const usuario = require('./Usuario')

module.exports = db => {
    // `cod_programa`, `nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`
    const Programa = programa(db)
    const Conta = conta(db)
    const Milha = milha(db)
    const Usuario = usuario(db)

    Usuario.hasMany(Conta)
    Conta.belongsTo(Programa)
    Programa.hasMany(Milha)

    return { Usuario, Programa, Conta, Milha }
}