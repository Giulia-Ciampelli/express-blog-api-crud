// #region variabili d'importazione
const express = require('express');
const cors = require('cors');
const app = express();
const HOST = process.env.HOST;
const PORT = process.env.PORT;

// importazione router
const productsRouter = require('./bonus-routes/bonus-products.js');

// importazione middleware
const notFound = require('./middlewares/notFound.js');
// #endregion variabili d'importazione

// richiesta elaborazione corpo
app.use(express.json());

// server start
app.listen(PORT, (req, res) => {
    console.log(`Server bonus disponibile su: ${HOST}:${PORT}`);
})

// cors su tutte le rotte
app.use(cors());

// uso rotte
app.use('/products', productsRouter);

// uso assets statici
app.use(express.static('public'));

// uso middleware errore
app.use(notFound);