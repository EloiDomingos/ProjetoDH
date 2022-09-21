module.exports = (sequelize, DataTypes) => {
    const endereco = sequelize.define("Endereco", {
        endereco: DataTypes.STRING,
        cep: DataTypes.STRING,
        cidade: DataTypes.STRING,
    },
        {
            tableName: 'endereco',
            timestamps: false
        })

        endereco.associate= (models)=>{
            endereco.hasMany(models.Usuario, {
                as:'endereco_usuario',
                foreignKey:'endereco_id' 
            })
        }
    return endereco
}