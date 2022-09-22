const fs = require("fs");
const usersJson = require('../users.json')
const bcrypt = require('bcrypt')
const url = require('url')

const userController = {
    renderCadastro: (req, res) => {
        res.render('cadastro')
    },
    cadastro: (req, res) => {
        const user = req.body
        const cryptLurker = bcrypt.hashSync(user.password, 11)
        user.password = cryptLurker
        usersJson.push(user)
        fs.writeFile("users.json", JSON.stringify(usersJson, null, 4), err => {
            if (err) throw err;
            console.log("Done writing");
        });
        return res.redirect('/user/login')
    },

    salvar: async(req, res) =>{
        const {nome, email, cpf, data, tele, senha, endereco } = req.body

        const resultSave = await Usuario.create ({
            nome,
            email,
            cpf,
            data,
            tele,
            senha,
            
        
        })
    },

    login: (req, res) => {
        res.render('login')
    },
    usuario: (req, res) => {
        res.render('usuario', { userData: req.session.usuario })

    },
    auth: (req, res) => {
        const user = req.body
        const wol = usersJson.find((userData) => userData.email === user.email)
        if (wol) {
            const validPass = bcrypt.compareSync(user.password, wol.password)
            if (validPass) {
                req.session.isAuth = user.email
                req.session.usuario = {"name":wol.NomeCompleto,
                "cpf":wol.CadPessoaFisica,
                "dna":wol.DataNascimento,
                "phone":wol.phone,
                "add":wol.address,
                "city":wol.city,
                "zip":wol.zip
            }
                return res.redirect(url.format({
                    pathname: '/user/usuario',
                    query:{
                        "name":wol.NomeCompleto,
                        "cpf":wol.CadPessoaFisica,
                        "dna":wol.DataNascimento,
                        "phone":wol.phone,
                        "add":wol.address,
                        "city":wol.city,
                        "zip":wol.zip
                    }
                }))
            }
        }
        return res.send('Login ou senha inválidos')
    }


}


module.exports = userController