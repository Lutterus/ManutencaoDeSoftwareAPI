const Sequelize = require('sequelize')
const Op = Sequelize.Op
const {DATABASE_URL} = require('../settings.js')

module.exports = {
  connect() {
    return new Sequelize(DATABASE_URL, {
      dialect: 'mysql',
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
  }
}