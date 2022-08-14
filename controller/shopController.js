const shopController ={
    produto: (req,res)=>{
        res.render('produto')
    },
    carrinho: (req,res)=>{
        res.render('carrinho')
    },
    compra: (req,res)=>{
        res.render('compra')
    }
}

module.exports = shopController