module.exports = (sequelize, Datatypes) => {

    const produto = sequelize.define("Produto", {
        nome: Datatypes.STRING,
        tamanho: Datatypes.INTEGER,
        tipo: Datatypes.STRING,
        preco: Datatypes.INTEGER,
        marca: Datatypes.STRING,
        tipo_id: Datatypes.INTEGER
    },
        {
            tableName: 'produtos',
            timestamps: false
        })

        produto.associate= (models)=>{
            produto.belongsTo(models.Tipo, {
                as:'produto_tipo',
                foreignKey:'tipo_id'
            })

            produto.associate= (models)=>{
                produto.belongsToMany(models.Pedido, {
                    as:'produto_pedido',
                    through:'produto_has_pedidos',
                    foreignKey:'produto_id',
                    otherkey:'pedido_id',
                    timestamps:false

                })
            }
        }
    return produto
}