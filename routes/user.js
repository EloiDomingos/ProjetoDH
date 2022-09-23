const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const xablau = require('../middleware/isAuthUser')

const validacaoCadastro = require('../middleware/validacaoCadastro');
//const controller = require(); //
//modelo pra adicionar os controllers//

router.get('/login', userController.login)
router.post('/login', userController.auth)
router.get('/cadastro', userController.renderCadastro)
router.post('/cadastro', userController.cadastro)
router.get('/usuario', xablau, userController.usuario)
router.post('/cadastro', userController.salvar)




module.exports = router;