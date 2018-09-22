const sequelize = require('sequelize')

module.exports = db => {
    const Usuario = db.define('usuario', {
        cod_usuario: {
            type:sequelize.INTEGER,
            primaryKey: true
       },
       email: sequelize.STRING,
       nome: sequelize.STRING,
       telefone: sequelize.INTEGER,
       aviso_expiracao_telefone: sequelize.INTEGER,
       aviso_expiracao_email: sequelize.INTEGER,
       oferta_compra: sequelize.INTEGER
    }, {
        timestamps  : false
    })

    return Usuario
}
