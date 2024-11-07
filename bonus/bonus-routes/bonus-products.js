// #region variabili d'importazione
const express = require('express');
const router = express.Router();
const productsController = require('../bonus-controllers/bonus-products-controller.js');
// #endregion variabili d'importazione

// importazione index
router.get('/', productsController.index);

// importazione C
router.post('/', productsController.store);

// importazione R
router.get('/:id', productsController.show);

// importazione U
router.put('/:id', productsController.update);

// importazione D
router.delete('/:id', productsController.destroy);

// esportazione totale
module.exports = router;