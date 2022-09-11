/*const { DataTypes } = require("sequelize/types");*/

module.exports = (sequelize, DataTypes) => {
    const endereco = sequelize.define("Endereco", {
        endereco: DataTypes.STRING,
        cep: DataTypes.STRING,
        cidade: DataTypes.STRING,
    },
        {
            tableName: 'endereco',
            timestamps: false
        })/*

        endereco.associate= (models)=>{
            endereco.belongsTo(models.Usuario,{
                as:'endereco_usuario'
                foreignKey:'endereco_idendereco'
            })
        }*/
    return endereco
}