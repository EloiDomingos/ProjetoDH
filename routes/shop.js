const express = require('express');
const router = express.Router();
const shopController = require('../controller/shopController');

router.get ('/:id', shopController.produto);
router.get ('/carrinho', shopController.carrinho);
router.get ('/compra', shopController.compra);

module.exports = router