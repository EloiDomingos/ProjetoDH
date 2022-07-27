const shopController ={
    produto: (req,res)=>{
        res.render('produto')
    },
    carrinho: (req,res)=>{
        res.render('carrinho')
    }
}

module.exports = shopController