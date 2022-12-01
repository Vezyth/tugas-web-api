const{Sequelize} = require('sequelize')

const sequelize = new Sequelize('api-test', 'root', '',{
    dialect:'mysql',
    host:'localhost'
})


module.exports = sequelize