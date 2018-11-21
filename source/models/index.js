const sequelize = require('sequelize')
const programa = require('./Programa')
const conta = require('./Conta')
const milha = require('./Milha')
const usuario = require('./Usuario')
const programaDefault = require('./ProgramaDefault')
const esqueci_senha = require('./Esqueci_senha')

module.exports = db => {
    const Programa = programa(db)
    const ProgramaDefault = programaDefault(db)
    const Conta = conta(db)
    const Milha = milha(db)
    const Usuario = usuario(db)
    const Esqueci_senha = esqueci_senha(db)
    
    //ProgramaDefault.belongsToMany(Programa, {as: 'Programa'});
    //Programa.hasOne(ProgramaDefault, {foreignKey: 'nome'});
    //ProgramaDefault.belongsTo(Programa);
    Programa.belongsTo(ProgramaDefault, {foreignKey: 'nome'})
    Programa.hasOne(Programa, {foreignKey: 'cod_programa'})
    Milha.belongsTo(Usuario, {foreignKey: 'contaLogin', targetKey: 'email'})
    Milha.belongsTo(Programa, {foreignKey: 'cod_programa', targetKey: 'cod_programa'})

    return { Usuario, Programa, Conta, Milha, ProgramaDefault, Esqueci_senha }
}
