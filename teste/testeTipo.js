const {sequelize,Tipo} = require('../database/models/index')

Tipo.findAll().then(result=>{
    console.log(result)
})