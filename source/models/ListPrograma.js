const sequelize = require('sequelize')

module.exports = db => {
    // `cod_programa`, `nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`

    const ListPrograma = db.define('listprogramas', {
       nome: {
           type: sequelize.STRING,
           primaryKey: true
       },
       text: sequelize.STRING
    }, {
        timestamps  : false
    })

    return ListPrograma
}