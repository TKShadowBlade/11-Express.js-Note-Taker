// Pull In Dependencies Here
// pull in path package to get the right file path for html
const path = require('path');

// Routing Code Goes Here

// GET requests for notes.html and index.html
module.exports = (app) => {
    app.get ('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'))
    });

    app.get ('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

    // Default route to index file 
    app.get ('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    })
}

