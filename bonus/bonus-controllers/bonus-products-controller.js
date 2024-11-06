// importazione db
const products = require('../bonus-db/bonus-db.js');

// importazione modulo fs
const fs = require('fs');

// creazione index
const index = (req,res) => {
    res.json({
        data: products,
        count: products.length
    })
}

// creazione C

// creazione R
const show = (req, res) => {
    const product = products.find(product => product.name === req.params.name);

    if(!product) {
        res.status(404).json({
            error: `404. Product not found at ${req.params.name}`
        })
    }
    res.status(200).json({
        data: products,
        count: products.length
    })
}

// creazione U

// creazione D

// esportazione
module.exports = {
    index,
    show
}