const sequelize = require('sequelize')

module.exports = db => {
    //INSERT INTO CONTA (`login`, `senha`, `cod_usuario`)

    const Conta = db.define('contas', {
       login: {
        type:sequelize.STRING,
        primaryKey: true
       },
       senha: sequelize.INTEGER,
       cod_usuario: sequelize.INTEGER,
       is_admin: sequelize.BOOLEAN
    }, {
        timestamps  : false
    })

    return Conta
}
