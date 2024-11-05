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

// creazione update
const update = (req, res) => {
    
    // parametro per trovare il post
    const slug = req.params.slug;
    const post = posts.find(post => post.slug === (req.params.slug));

    // res di errore
    if(!post) {
        return res.status(404).json({
            error: '404: post not found'
        })
    }

    // aggiorna il post con i nuovi dati
    const postUpdate = {
        ...post,
        title: req.body.title || post.title,
        slug: req.body.slug || post.slug,
        content: req.body.content || post.content,
        image: req.body.image || post.image,
        tags: req.body.tags || post.tags
    }

    // trova il post da aggiornare nel db
    const postIndex = posts.findIndex(post => post.slug === slug);

    // sovrascrivi il post
    posts[postIndex] = postUpdate;
    
    // aggiorna il db
    fs.writeFile('./db/db.js', `module.exports = ${JSON.stringify(posts, null, 4)}`);

    // rispondi col post aggiornato
    return res.json({
        status: 200,
        data: postUpdate
    })
}

//esportazione totale
module.exports = {
    index,
    show,
    store,
    update
}