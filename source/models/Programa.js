const sequelize = require('sequelize')

module.exports = db => {
    // `cod_programa`, `nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`

    const Programa = db.define('programas', {
       cod_programa: {
          type: sequelize.INTEGER,
          autoIncrement: true
       },
       nome: {
           type: sequelize.STRING,
           primaryKey: true
       },
       somaMilhas: sequelize.INTEGER,
       milha_expiracao_maisProxima: sequelize.INTEGER,
       contaLogin: sequelize.STRING,
       contaSenha: sequelize.STRING
    }, {
        timestamps  : false
    })

    return Programa
}
