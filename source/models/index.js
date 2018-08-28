const sequelize = require('sequelize')
const programa = require('./Programa').Programa
const conta = require('./Conta').Conta
const milha = require('./Milha').Milha
const usuario = require('./Usuario').Usuario

module.exports = db => {
    const Programa = programa(db).Programa
    const Conta = conta(db)
    const Milha = milha(db)
    const Usuario = usuario(db)
    return { Usuario, Programa, Conta, Milha }
}
