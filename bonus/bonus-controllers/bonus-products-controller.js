// importazione db
const products = require('../bonus-db/bonus-db.js');

// importazione modulo fs
const fs = require('fs');

// creazione C
const store = (req, res) => {
    
    // creazione oggetto nuovo
    const productNew = {
        name: req.body.name,
        brand: req.body.brand,
        net_weight: req.body.net_weight,
        price: req.body.price
    }

    products.push(productNew);

    // aggiornamento db
    fs.writeFileSync('./bonus-db/bonus-db.js', `module.exports = ${JSON.stringify(products, null, 4)}`);

    res.json({
        staus: 201,
        data: products,
        count: products.length
    })
}

// creazione R
const index = (req,res) => {
    res.json({
        data: products,
        count: products.length
    })
}

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
const update = (req, res) => {
    
    // paramentri per trovare oggetto
    const product = products.find(product => product.name === req.params.name);

    // res di errore
    if(!product) {
        res.status(400).json({
            error: `404: product not found at ${req.params.name}`
        })
    }

    // creazione oggetto
    product.name = req.body.name;
    product.brand = req.body.brand;
    product.net_weight = req.body.net_weight;
    product.price = req.body.price;

    // aggiornamento db
    fs.writeFileSync('./bonus-db/bonus-db.js', `module.exports = ${JSON.stringify(products, null, 4)}`);

    // ritorno post aggiornato
    res.status(200).json({
        status: 200,
        data: products,
        count: products.length
    })
}

// creazione D

// esportazione
module.exports = {
    store,
    index,
    show,
    update
}