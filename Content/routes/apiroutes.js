const router = require ('express').Router();
const store = require ('../db/store');

// where all notes from the database go
router.get ('/notes', (req, res) => {
    store
    .noteGet()
    .then (notes => res.json (notes))
    .catch (err => res.status(500).json(err));
});

router.post ('/notes', (req, res) => {
    store
    .noteAdd(req.body)
    .then((note) => res.json(note))
    .catch (err => res.status(500).json(err));
    res.send('Thank you for adding a note!')
});

// Removes any note with a specific ID number
router.delete ('/notes/:id', (req, res) => {
    store
    .noteRemove(req.params.id)
    .then(() => res.json({ ok: true}))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
