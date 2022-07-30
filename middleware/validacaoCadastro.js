function validacaoCadastro(res, req, next){
    var cad = req.body

    if (cad.NomeCompleto == '' && cad.DataNascimento == ''
    && cad.CadPessoaFisica == '' && cad.Email == '' && cad.SenhaCad){
    res.status(403).send("Preencha todos os dados");
    }else{
        next
    }

}

module.exports = validacaoCadastro