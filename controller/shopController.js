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

const shopController ={
    produto: (req,res)=>{
        const paramId = req.params.id;
        const result = beerList.find(beer => beer.id == paramId);
        res.render('produto',{ product:result })
    },
    carrinho: (req,res)=>{
        res.render('carrinho')
    },
    compra: (req,res)=>{
        res.render('compra')
    }
}

module.exports = shopController