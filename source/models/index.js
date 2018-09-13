const sequelize = require('sequelize')
const programa = require('./Programa')
const conta = require('./Conta')
const milha = require('./Milha')
const usuario = require('./Usuario')
const programa_default = require('./Programa_default')

module.exports = db => {
    const Programa = programa(db)
    const Programa_default = programa_default(db)
    const Conta = conta(db)
    const Milha = milha(db)
    const Usuario = usuario(db)
    
    return { Usuario, Programa, Conta, Milha, Programa_default }
}
