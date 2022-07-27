const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
//const controller = require(); //
//modelo pra adicionar os controllers//

router.get('/login', userController.login)
router.get('/cadastro', userController.cadastro)
router.get('/usuario', userController.usuario)

module.exports = router;