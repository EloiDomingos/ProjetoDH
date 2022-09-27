const fs = require("fs");
const usersJson = require('../users.json')
const bcrypt = require('bcrypt')
const url = require('url')
const { Usuario, Endereco } = require('../database/models');


const userController = {
    renderCadastro: (req, res) => {
        res.render('cadastro')
    },

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
        //console.log(resultJSON.id)
        const addPayload = {
            endereco: address,
            cep: zip,
            cidade: city,
            usuarios_id: resultJSON.id
        }
        const addResult = await Endereco.create (addPayload)
        return res.redirect('/user/login')
    },

    editar: async (req, res)=>{
        /*const {id} = req.params;

        const usuario = await Usuario.findByPk(id);*/
        //console.log(req.session)
        res.render ('editarCadastro', { usuario: req.session.usuario, email: req.session.isAuth })
    },

    alterar: async (req, res) => {
        const {id} = req.params;
        const {nome, email, cpf, data, tele, senha, endereco, cidade, cep } = req.body
        const cryptLurker = bcrypt.hashSync(senha, 11)
        const resultAlterar = await Usuario.update({
            nome,
            email,
            cpf,
            data,
            tele,
            ...(senha ? {senha: cryptLurker} : {})
        },
            {
                where: { id }
            })
        const alterarEnd = await Endereco.update({
            endereco,
            cidade,
            cep
        },
            {
                where: {usuarios_id: id}
            })
    return res.redirect('/user/usuario')
},

    login: (req, res) => {
        res.render('login')
    },

    usuario: async (req, res) => {
        const wol = await Usuario.findOne({
            where: {email: req.session.isAuth},
            include: [{model:Endereco, as:"usuario_endereco"}]
        })
        if (wol){
            const wolJSON = wol.toJSON()
            const address = wolJSON.usuario_endereco[0]
            const userData = {
                "name":wolJSON.nome,
                "cpf":wolJSON.cpf,
                "dna":wolJSON.data,
                "phone":wolJSON.tele,
                "add":address.endereco,
                "city":address.cidade,
                "zip":address.cep,
                "id":wolJSON.id
            }
        res.render('usuario', { userData })
        }
    },

    auth: async (req, res) => {
        const user = req.body
        const wol = await Usuario.findOne({
            where: {email: user.email},
            include: [{model:Endereco, as:"usuario_endereco"}]
        })
        if (wol){
            const wolJSON = wol.toJSON()
            //console.log(wolJSON)
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
    },

    logout: (req,res)=>{
        console.log(req)
        if(req.session){
            req.session.destroy()
            res.redirect('/home')
        }
    }

}


module.exports = userController