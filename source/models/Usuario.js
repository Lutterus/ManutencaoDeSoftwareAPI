const sequelize = require('sequelize')

module.exports = db => {
    const Usuario = db.define('usuario', {
        cod_usuario: {
            type:sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
       },
       email: sequelize.STRING,
       nome: sequelize.STRING,
       telefone: sequelize.STRING
    }, {
        timestamps  : false
    })

    return Usuario
}
