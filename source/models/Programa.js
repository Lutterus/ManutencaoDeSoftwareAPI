const sequelize = require('sequelize')

module.exports = db => {
    // `cod_programa`, `nome`, `somaMilhas`, `milha_expiracao_maisProxima`, `contaLogin`, `contaSenha`

    const Programa = db.define('programa', {
       nome: sequelize.STRING,
       somaMilhas: sequelize.INTEGER,
       milha_expiracao_maisProxima: sequelize.INTEGER,
       contaLogin: sequelize.STRING,
       contaSenha: sequelize.STRING
    })

    return {Programa}
}
