// #region variabili d'importazione
const express = require('express');
const router = express.Router();
const productsController = require('../bonus-controllers/bonus-products-controller.js');
// #endregion variabili d'importazione

// importazione index
router.get('/', productsController.index);

// importazione C

// importazione R
router.get('/:name', productsController.show);

// importazione U

// importazione D

// esportazione totale
module.exports = router;