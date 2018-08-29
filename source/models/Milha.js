const sequelize = require('sequelize')

module.exports = db => {
    //INSERT INTO MILHA (`cod_milha`, `quantidade`, `dt_expiracao`, `cod_programa`, `contaLogin`)

    const Milha = db.define('milhas', {
       cod_milha: {
        type:sequelize.INTEGER,
        primaryKey: true
       },
       quantidade: sequelize.STRING,
       dt_expiracao: sequelize.DATE,
       cod_programa: sequelize.INTEGER,
       contaLogin: sequelize.STRING
    }, {
        timestamps  : false
    })

    return Milha
}
