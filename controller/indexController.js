const indexController ={
    home: (req,res)=>{
        res.render('home')
    },
    sobreNos: (req,res)=>{
        res.render('sobreNos')
    }
}


module.exports = indexController