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

        usuario.associate= (models)=>{
            usuario.belongsTo(models.Endereco, {
                as:'usuario_endereco',
                foreignKey:'endereco_idendereco' 
            })
        }
    return usuario
    }