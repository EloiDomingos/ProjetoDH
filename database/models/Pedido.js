module.exports = (sequelize, Datatypes) => {

    const pedido = sequelize.define("Pedido", {
        quantidade: Datatypes.INTEGER,
        valortotal: Datatypes.INTEGER,
        usuarios_id: Datatypes.INTEGER
    },
        {
            tableName: 'pedidos',
            timestamps: false
        })

        pedido.associate= (models)=>{
            pedido.belongsTo(models.Usuario, {
                as:'pedido_usuario',
                foreignKey:'usuarios_id' 
            })
        }
        return pedido
}