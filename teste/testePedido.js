const {sequelize,Pedido} = require('../database/models/index')

Pedido.findAll().then(result=>{
    console.log(result)
})