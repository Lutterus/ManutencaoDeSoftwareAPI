const sequelize = require('sequelize')

module.exports = db => {
    // `cod_programa`, `nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`

    const Programa_default = db.define('programa_defaults', {
       nome: {
           type: sequelize.STRING,
           primaryKey: true
       },
       text: sequelize.TEXT
    }, {
        timestamps  : false
    })

    return Programa_default
}