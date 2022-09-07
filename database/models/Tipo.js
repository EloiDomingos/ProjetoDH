module.exports = (sequelize, Datatypes) => {

    const tipo = sequelize.define("Tipo", {
        nome: Datatypes.STRING
    },
        {
            tableName: 'tipo',
            timestamps: false
        })
    return tipo
}