// Bonus
// Creare inoltre un filtro in querystring per tag, che ritorna in formato json tutti i post che hanno quei tag
// Esercizio
// e se volessi aggiornare un post? sapresti implementare la rotta update per aggiornare una risorsa esistente?
// Alla fine dovrete usare postman come visto in classe per testare tutti i vostri endpoint.

// #region variabili d'importazione
const express = require('express');
const cors = require('cors');
const app = express();
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const postsRouter = require('./routes/posts.js');
// #endregion variabili d'importazione

// elaborazione corpo richiesta
app.use(express.json());

// impostazione iniziale server
app.listen(PORT, (req,res) => {
    console.log(`Server disponibile su: ${HOST}:${PORT}`);
})

// uso di cors su tutte le rotte
app.use(cors());

// importazione rotte
app.use('/posts', postsRouter);

// assets statici
app.use(express.static('public'));