const {sequelize, Endereco} = require('../database/models/index')

Endereco.findAll().then(result=>{
    console.log(result)
})