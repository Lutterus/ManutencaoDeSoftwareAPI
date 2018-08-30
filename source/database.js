const Sequelize = require('sequelize')
const Op = Sequelize.Op
const {DATABASE_URL} = require('../settings.js')

module.exports = {
  connect() {
    const db_connection = new Sequelize(DATABASE_URL, {
      dialect: 'mysql',
      logging: false,
      operatorsAliases: {
        $and: Op.and,
        $or: Op.or,
        $eq: Op.eq,
        $gt: Op.gt,
        $lt: Op.lt,
        $lte: Op.lte,
        $like: Op.like
      }
    })

    this.testConnection(db_connection)

    return db_connection
  },
  testConnection(connection) {
    connection
      .authenticate()
      .then(() => {
        console.log('[MYSQL] Connection has been established successfully.');
      })
      .catch(err => {
        console.error('[MYSQL] Unable to connect to the database:', JSON.stringify(err));
      });
  }
}