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
    return pedido
}