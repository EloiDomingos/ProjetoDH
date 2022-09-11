module.exports = (sequelize, Datatypes) => {

    const usuario = sequelize.define("Usuario", {
        nome: Datatypes.STRING,
        email: Datatypes.STRING,
        cpf: Datatypes.STRING,
        data: Datatypes.INTEGER,
        tele: Datatypes.INTEGER,
        senha: Datatypes.STRING,
        endereco_idendereco: Datatypes.INTEGER
    },
        {
            tableName: 'usuarios',
            timestamps: false
        })

        return usuario
    }