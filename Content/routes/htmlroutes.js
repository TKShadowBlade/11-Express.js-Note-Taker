// Pull In Dependencies Here
// pull in path package to get the right file path for html
const path = require('path');
const router = require('express').Router();

// Routing Code Goes Here

// GET requests for notes.html and index.html
router.get ('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

router.get ('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;


