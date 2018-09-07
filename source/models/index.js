const sequelize = require('sequelize')
const programa = require('./Programa')
const conta = require('./Conta')
const milha = require('./Milha')
const usuario = require('./Usuario')
const listprograma = require('./ListPrograma')

module.exports = db => {
    const Programa = programa(db)
    const ListPrograma = listprograma(db)
    const Conta = conta(db)
    const Milha = milha(db)
    const Usuario = usuario(db)
    
    return { Usuario, Programa, Conta, Milha, ListPrograma }
}
