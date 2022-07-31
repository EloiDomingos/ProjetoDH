const beerList = [{
    id: 1,
    name: 'Heineken',
    price: 15.00,
    img: "/imagens/beer01.jpg"
},
{
    id: 2,
    name: 'Heineken',
    price: 15,
    img: "/imagens/beer01.jpg"
},
{
    id: 3,
    name: 'Heineken',
    price: 15,
    img: "/imagens/beer01.jpg"
},
{
    id: 4,
    name: 'Heineken',
    price: 15,
    img: "/imagens/beer01.jpg"
},
{
    id: 5,
    name: 'Heineken',
    price: 15,
    img: "/imagens/beer01.jpg"
},
{
    id: 6,
    name: 'Heineken',
    price: 15,
    img: "/imagens/beer01.jpg"
}]


const indexController ={
    home: (req,res)=>{
        res.render('home',{ cerva: beerList })
    },
    sobreNos: (req,res)=>{
        res.render('sobreNos')
    }
}


module.exports = indexController