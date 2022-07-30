const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

const validacaoCadastro = require('../middleware/validacaoCadastro');
//const controller = require(); //
//modelo pra adicionar os controllers//

router.get('/login', userController.login)
router.post('/cadastro', validacaoCadastro, userController.cadastro)
router.get('/usuario', userController.usuario)

module.exports = router;