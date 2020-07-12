const express = require('express');
const router = express.Router();
const Book = require('../model/Book');

//routers
router.get('/all', (req, res) => {
    Book.findAll()
        .then(books => {
            res.send(books)
        })
        .catch(err => console.log(err))
});

router.get('/:id', (req, res) => {
 Book.findOne({ where: { id: req.params.id }})
        .then(book => {
            res.send(book)
        })
        .catch(err => console.log(err))
});

module.exports = router;