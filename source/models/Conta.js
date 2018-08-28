const sequelize = require('sequelize')

module.exports = db => {
    //INSERT INTO CONTA (`login`, `senha`, `cod_usario`)

    const Conta = db.define('contas', {
       login: {
        type:sequelize.STRING,
        primaryKey: true
       },
       senha: sequelize.INTEGER,
       cod_usario: sequelize.INTEGER
    }, {
        timestamps  : false
    })

    return {Conta}
}
