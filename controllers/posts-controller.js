// importazione db
const posts = require('../db/db.js');

// importazione modulo fs
const fs = require('fs');

// creazione index
const index = (req, res) => {
    res.json({
        data: posts,
        count: posts.length
    })
}

// creazione show
const show = (req, res) => {
    const post = posts.find(post => post.slug === (req.params.slug));
    
    // condizioni per ritorno
    if(!post) {
        return res.status(404).json({
            error: '404: post not found'
        })
    }
    return res.json({
        data: post
    })
}

// creazione update
// app.put?
const update = (req, res) => {
    
    // cerca un parametro per trovare il post (slug?)

    // crea res di errore

    // aggiorna il post con i nuovi dati

    // trova il post da aggiornare nel db

    // sovrascrivi il post
    
    // aggiorna il db

    // rispondi col post aggiornato
}

// creazione store
const store = (req, res) => {
    
    // creazione oggetto nuovo
    const postNew = {
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    posts.push(postNew);

    // update db
    fs.writeFileSync('./db/db.js', `module.exports = ${JSON.stringify(posts, null, 4)}`);

    res.json({
        status: 201,
        data: posts,
        count: posts.length
    })
}

//esportazione totale
module.exports = {
    index,
    show,
    store,
    update
}