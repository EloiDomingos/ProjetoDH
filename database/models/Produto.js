module.exports = (sequelize, Datatypes) => {

    const produto = sequelize.define("Produto", {
        nome: Datatypes.STRING,
        tamanho: Datatypes.INTEGER,
        tipo: Datatypes.STRING,
        preco: Datatypes.INTEGER,
        marca: Datatypes.STRING,
        status: Datatypes.STRING,
        forma: Datatypes.STRING,
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
        }
    return produto
}