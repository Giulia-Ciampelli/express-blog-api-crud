// #region variabili d'importazione
const express = require('express');
const cors = require('cors');
const app = express();
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const productsRouter= require('./bonus-routes/bonus-products.js');
// #endregion variabili d'importazione

// richiesta elaborazione corpo
app.use(express.json());

// server start
app.listen(PORT, (req, res) => {
    console.log(`Server bonus disponibile su: ${HOST}:${PORT}`);
})

// cors su tutte le rotte
app.use(cors());

// importazione rotte
app.use('/products', productsRouter);

// importazione assets statici
app.use(express.static('public'));