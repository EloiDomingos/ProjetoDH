module.exports = (sequelize, Datatypes) => {

    const tipo = sequelize.define("Tipo", {
        nome: Datatypes.STRING
    },
        {
            tableName: 'tipo',
            timestamps: false
        })

        tipo.associate= (models)=>{
            tipo.hasMany(models.Produto, {
                as:'tipo_produto',
                foreignKey:'tipo_id'
            })
        }
    return tipo
}
