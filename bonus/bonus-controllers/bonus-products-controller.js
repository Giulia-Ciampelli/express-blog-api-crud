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

// creazione D

// esportazione
module.exports = {
    store,
    index,
    show
}