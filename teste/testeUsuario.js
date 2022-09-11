const {sequelize,Usuario} = require('../database/models/index')

Usuario.findAll().then(result=>{
    console.log(result)
})