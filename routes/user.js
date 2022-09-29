const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const auth = require('../middleware/isAuthUser')

const validacaoCadastro = require('../middleware/validacaoCadastro');
//const controller = require(); //
//modelo pra adicionar os controllers//

router.get('/login', userController.login)
router.post('/login', userController.auth)
router.post('/logout', userController.logout)

router.get('/cadastro', userController.renderCadastro)
router.post('/cadastro',validacaoCadastro, userController.salvar)
//router.post('/cadastro', userController.cadastro) < rota antiga

router.get('/usuario', auth, userController.usuario)

router.get('/editar/:id', userController.editar)
router.put('/editar/:id', userController.alterar)

router.delete('/deletar/:id', userController.destroy)



module.exports = router;