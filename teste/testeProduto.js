const {sequelize,Produto} = require('../database/models/index')

Produto.findAll().then(result=>{
    console.log(result)
})