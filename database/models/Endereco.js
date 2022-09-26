module.exports = (sequelize, DataTypes) => {
    const endereco = sequelize.define("Endereco", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        endereco: DataTypes.STRING,
        cep: DataTypes.STRING,
        cidade: DataTypes.STRING,
    },
        {
            tableName: 'endereco',
            timestamps: false
        })

        endereco.associate= (models)=>{
            endereco.belongsTo(models.Usuario, {
                as:'endereco_usuario',
                foreignKey:'usuarios_id' 
            })
        }
    return endereco
}