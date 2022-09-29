const express = require('express');
const router = express.Router();
const shopController = require('../controller/shopController');
const auth = require('../middleware/isAuthUser');

router.get ('/carrinho', shopController.carrinho);
router.post('/carrinho/esvasiar', shopController.esvasiar)
router.get ('/compra', shopController.compra);
router.get ('/:id', shopController.produto);
router.post ('/comprar/:id', shopController.comprar)

module.exports = router