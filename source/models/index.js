const sequelize = require('sequelize')
const programa = require('./Programa')
const conta = require('./Conta')
const milha = require('./Milha')
const usuario = require('./Usuario')
const programaDefault = require('./ProgramaDefault')

module.exports = db => {
    const Programa = programa(db)
    const ProgramaDefault = programaDefault(db)
    const Conta = conta(db)
    const Milha = milha(db)
    const Usuario = usuario(db)
    
    //ProgramaDefault.belongsToMany(Programa, {as: 'Programa'});
    //Programa.hasOne(ProgramaDefault, {foreignKey: 'nome'});
    //ProgramaDefault.belongsTo(Programa);
    Programa.belongsTo(ProgramaDefault, {foreignKey: 'nome'});
    Programa.hasOne(Programa, {foreignKey: 'cod_programa'})
    return { Usuario, Programa, Conta, Milha, ProgramaDefault }
}
