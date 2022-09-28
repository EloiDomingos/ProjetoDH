const express = require('express');
const router = express.Router();
const shopController = require('../controller/shopController');

router.get ('/carrinho', shopController.carrinho);
router.get ('/compra', shopController.compra);
router.get ('/:id', shopController.produto);
router.post ('/comprar/:id', shopController.comprar)

module.exports = router