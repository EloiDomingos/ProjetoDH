const fs = require("fs");
const usersJson = require('../users.json')
const bcrypt = require('bcrypt')
const url = require('url')
const { Usuario, Endereco } = require('../database/models');


const userController = {
    renderCadastro: (req, res) => {
        res.render('cadastro')
    },

    // cadastro: (req, res) => {
    //     const user = req.body
    //     const cryptLurker = bcrypt.hashSync(user.password, 11)
    //     user.password = cryptLurker
    //     usersJson.push(user)
    //     fs.writeFile("users.json", JSON.stringify(usersJson, null, 4), err => {
    //         if (err) throw err;
    //         console.log("Done writing");
    //     });
    //     return res.redirect('/user/login')
    // },

    salvar: async(req, res) =>{
        const {NomeCompleto, email, CadPessoaFisica, DataNascimento, phone, password, address, city, zip } = req.body
        const cryptLurker = bcrypt.hashSync(password, 11)
        const payload = {
            nome: NomeCompleto,
            email,
            cpf: CadPessoaFisica,
            data: DataNascimento,
            tele: phone,
            senha: cryptLurker
        }
        const resultSave = await Usuario.create (payload)
        const resultJSON = resultSave.toJSON()
        console.log(resultJSON.id)
        const addPayload = {
            endereco: address,
            cep: zip,
            cidade: city,
            usuarios_id: resultJSON.id
        }
        const addResult = await Endereco.create (addPayload)
        return res.redirect('/user/login')
    },

    login: (req, res) => {
        res.render('login')
    },

    usuario: (req, res) => {
        res.render('usuario', { userData: req.session.usuario })
    },

    auth: async (req, res) => {
        const user = req.body
        const wol = await Usuario.findOne({
            where: {email: user.email},
            include: [{model:Endereco, as:"usuario_endereco"}]
        })
        if (wol){
            const wolJSON = wol.toJSON()
            console.log(wolJSON)
            const validPass = bcrypt.compareSync(user.password, wolJSON.senha)
            const address = wolJSON.usuario_endereco[0]
            if (validPass) {
                    req.session.isAuth = user.email
                    req.session.usuario = {
                        "name":wolJSON.nome,
                        "cpf":wolJSON.cpf,
                        "dna":wolJSON.data,
                        "phone":wolJSON.tele,
                        "add":address.endereco,
                        "city":address.cidade,
                        "zip":address.cep,
                        "id":wolJSON.id
                    }
                        return res.redirect(url.format({
                            pathname: '/user/usuario',
                            query:{
                                "name":wolJSON.nome,
                                "cpf":wolJSON.cpf,
                                "dna":wolJSON.data,
                                "phone":wolJSON.tele,
                                "add":address.endereco,
                                "city":address.cidade,
                                "zip":address.cep,
                                "id":wolJSON.id
                            }
                        }))
                    }
            console.log(wolJSON)
        }
        return res.send('Login ou senha inválidos')
    },
    destroy: async(req,res)=>{
        const user = req.params
        const addressResult = await Endereco.destroy({
            where: {usuarios_id: user.id}
        })
        const result = await Usuario.destroy({
            where: {id: user.id},
        })
        req.session.usuario = {}
        req.session.isAuth = false
        return res.redirect('/user/cadastro')
    }


}


module.exports = userController