const sequelize = require('sequelize')

module.exports = db => {
    //INSERT INTO CONTA (`login`, `senha`, `cod_usario`)

    const Conta = db.define('conta', {
       login: sequelize.STRING,
       senha: sequelize.INTEGER,
       cod_usario: sequelize.INTEGER,
    })

    return {Conta}
}
