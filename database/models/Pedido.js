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
            pedido.associate= (models)=>{
                pedido.belongsToMany(models.Produto, {
                    as:'pedido_produto',
                    through:'produto_has_pedidos',
                    foreignKey:'pedido_id',
                    otherkey:'produto_id',
                    timestamps:false

                })
            }
        }
        return pedido
}