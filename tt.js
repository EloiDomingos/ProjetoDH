const { Produto } = require('./database/models');
const beerList = [{
    id: 1,
    name: 'Heineken',
    price: 15,
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
async function criandoProduto(){
    for (let index = 0; index < beerList.length; index++) {
        const element = beerList[index];
        console.log(element)
        const resultSave = await Produto.create({
            nome:element.name,
            preco:element.price,
            tamanho: 500,
            img:element.img,
            marca: 'Devs',
            tipo_id: 1
        })
    }

};
criandoProduto();