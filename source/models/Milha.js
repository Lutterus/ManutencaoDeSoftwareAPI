const sequelize = require('sequelize')

module.exports = db => {
    //INSERT INTO MILHA (`cod_milha`, `quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`)

    const Milha = db.define('milha', {
       cod_milha: sequelize.INTEGER,
       quantidade: sequelize.STRING,
       dt_expiracao: sequelize.DATE,
       cod_programa: sequelize.INTEGER,
       contaLogin: sequelize.STRING
    })

    return {Milha}
}
