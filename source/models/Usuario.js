//INSERT INTO USUARIOs (`cod_usuario`, `email`, `nome`, `telefone`, `aviso_expiracao_telefone`, `aviso_expiracao_email`, `oferta_compra`)

const sequelize = require('sequelize')

module.exports = db => {
    const Usuario = db.define('usuario', {
       cod_usuario: sequelize.INTEGER,
       email: sequelize.STRING,
       nome: sequelize.STRING,
       telefone: sequelize.INTEGER,
       aviso_expiracao_telefone: sequelize.INTEGER,
       aviso_expiracao_email: sequelize.INTEGER,
       oferta_compra: sequelize.INTEGER
    })

    return {Usuario}
}
