const sequelize = require('sequelize')

module.exports = db => {
    //INSERT INTO `super_milhas`.`esquecimento_senhas`(`idesqueci_senha`,`email`,`token`,`dt_criacao`);


    const Esqueci_senha = db.define('esquecimento_senhas', {
        idesqueci_senha: {
          type:sequelize.INTEGER,
          primaryKey: true
       },
       email: sequelize.STRING,
       token: sequelize.STRING,
       dt_criacao: sequelize.DATE
    }, {
        timestamps  : false
    })

    return Esqueci_senha
}
