// importazione db
const products = require('../bonus-db/bonus-db.js');

// importazione modulo fs
const fs = require('fs');

// creazione C
const store = (req, res) => {
    
    // creazione oggetto nuovo
    const productNew = {
        id: Number(products[products.length - 1].id +1),
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
    const product = products.find(product => product.id === Number(req.params.id));

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
    const product = products.find(product => product.id === Number(req.params.id));

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
const destroy = (req, res) => {

    // parametri per trovare il prodotto giusto
    const product = products.find(product => product.id === Number(req.params.id));

    // res di errore
    if(!product) {
        res.status(404).json({
            error: `404: product not found at ${req.params.name}`
        })
    }

    // rimozione dal db
    const productDelete = products.filter(product => product.id !== Number(req.params.id));

    // aggiornamento db
    fs.writeFileSync('./bonus-db/bonus-db.js', `module.exports = ${JSON.stringify(productDelete, null, 4)}`);

    // ritorno del res aggiornato
    res.status(200).json({
        status: 200,
        data: productDelete,
        count: productDelete.length
    })
}

// esportazione
module.exports = {
    store,
    index,
    show,
    update,
    destroy
}