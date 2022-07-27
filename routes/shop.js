const express = require('express');
const router = express.Router();
const shopController = require('../controller/shopController');

router.get ('/', shopController.produto);
router.get ('/carrinho', shopController.carrinho);

module.exports = router