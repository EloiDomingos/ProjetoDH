const beerList = [{
    id: 1,
    name: 'Heineken',
    price: 15.00,
    img: "/imagens/beer01.jpg"
},
{
    id: 2,
    name: 'Colorado',
    price: 20,
    img: "/imagens/cerveja-colorado-appia-600ml_77132.jpg"
},
{
    id: 3,
    name: 'Heineken',
    price: 15,
    img: "/imagens/beer01.jpg"
},
{
    id: 4,
    name: 'Colorado',
    price: 20,
    img: "/imagens/cerveja-colorado-appia-600ml_77132.jpg"
},
{
    id: 5,
    name: 'Heineken',
    price: 15,
    img: "/imagens/beer01.jpg"
},
{
    id: 6,
    name: 'Colorado',
    price: 20,
    img: "/imagens/cerveja-colorado-appia-600ml_77132.jpg"
}]
const session = require('express-session');
const { Produto } = require('../database/models');

const shopController ={
    produto: async (req,res)=>{
        const paramId = req.params.id;
        const produtos = await Produto.findAll({
            raw:true
        })
        const result = produtos.find(beer => beer.id == paramId);
        res.render('produto',{ product:result })
    },

    carrinho: async (req,res)=>{
        console.log(req.session.cart)
        if(!req.session.cart){
            req.session.cart = []
        };
        const totalPrice = req.session.cart.reduce((acc, product)=>{
            return acc+product.preco*Number(product.qtd)
        },0)
        res.render('carrinho', {cart: req.session.cart, totalPrice})
    },

    compra: (req,res)=>{
        res.render('compra')
    },
    comprar: async (req,res) =>{
        const product = await Produto.findByPk(req.params.id)
        if(req.session.cart){
            const productIndex = req.session.cart.map(p => p.id).indexOf(req.params.id)
            if(productIndex === -1){
                req.session.cart = req.session.cart.concat({...product.toJSON(), id:req.params.id,qtd:req.body.quantity})
                return res.redirect('/shop/carrinho')
            } 
            req.session.cart[productIndex].qtd = req.body.quantity
            return res.redirect('/shop/carrinho')
        } 
        req.session.cart = [{...product.toJSON(), id:req.params.id,qtd:req.body.quantity}]
        return res.redirect('/shop/carrinho')
    }
}

module.exports = shopController