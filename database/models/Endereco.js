//const { DataTypes } = require("sequelize/types");

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
    return endereco
}