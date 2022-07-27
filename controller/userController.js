const userController ={
    cadastro: (req,res)=>{
        res.render('cadastro')
    },
    login: (req,res)=>{
        res.render('login')
    },
    usuario: (req,res)=>{
        res.render('usuario')
    }
}


module.exports = userController