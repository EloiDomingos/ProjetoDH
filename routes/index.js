const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController');
//const controller = require(); //
//modelo pra adicionar os controllers//

router.get('/', indexController.home);
router.get('/sobrenos', indexController.sobreNos)

module.exports = router;