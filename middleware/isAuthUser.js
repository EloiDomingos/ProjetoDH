
function isAuthUser(req,res,next){
console.log("isAuthUser")
console.log(req.session.isAuth)
    if(req.session.isAuth){
        next()
    }else{
       return res.redirect('/user/cadastro')
    }

}
module.exports = isAuthUser