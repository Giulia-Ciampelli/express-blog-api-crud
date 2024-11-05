// #region variabili d'importazione
const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts-controller.js');
// #endregion variabili d'importazione

// importazione index
router.get('/', postsController.index);

// importazione show
router.get('/:slug', postsController.show);

// importazione store
router.post('/', postsController.store);

// esportazione
module.exports = router;