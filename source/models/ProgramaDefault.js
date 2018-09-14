const sequelize = require('sequelize')
//const programa = require('./Programa')

module.exports = db => {
    // `cod_programa`, `nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`

    const ProgramaDefault = db.define('programa_defaults', {
       nome: {
           type: sequelize.STRING,
           primaryKey: true
       },
       imagem: sequelize.STRING
    }, {
        timestamps  : false
    })

    //ProgramaDefault.belongsToMany(programa.Programa, {through: 'ProgramaDefaultConnect'});

    return ProgramaDefault
}