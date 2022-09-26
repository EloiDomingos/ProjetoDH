module.exports = (sequelize, Datatypes) => {

    const usuario = sequelize.define("Usuario", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: Datatypes.STRING,
        email: Datatypes.STRING,
        cpf: Datatypes.STRING,
        data: Datatypes.INTEGER,
        tele: Datatypes.INTEGER,
        senha: Datatypes.STRING,
        
    },
        {
            tableName: 'usuarios',
            timestamps: false
        })

        usuario.associate= (models)=>{
            usuario.hasMany(models.Endereco, {
                as:'usuario_endereco',
                foreignKey:'usuarios_id' 
            })
            usuario.hasMany(models.Pedido, {
                as:'usuario_pedido',
                foreignKey:'usuarios_id'
            })
        }
    return usuario
    }