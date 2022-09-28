function validacaoCadastro(req, res, next){
    const cad = req.body
    const validationArray = Object.values(cad);
    const validate = validationArray.every(value => !!value)
    
    if (validate){
        next()
    } else {
        res.status(400)
        return res.send('Preencha todos os campos')
    }
    // if (cad.NomeCompleto == '' || cad.DataNascimento == ''
    // || cad.CadPessoaFisica == '' || cad.email == '' || cad.SenhaCad == '' || cad.phone == '' || cad.address == ''){
    // res.status(403).send("Preencha todos os dados");
    // }else{
    //     next
    // }

}

module.exports = validacaoCadastro