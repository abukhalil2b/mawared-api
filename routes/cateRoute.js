const express = require('express');
const router = express.Router();
const Cate = require('../model/Cate');


router.get('/all', (req, res) => {
    Cate.findAll()
        .then(cates => {
            res.send(cates)
        })
        .catch(err => console.log(err))
});

router.get('/:id', (req, res) => {
    Cate.findOne({where:{id:req.params.id}})
        .then(cate => {
            res.send(cate)
        })
        .catch(err => console.log(err))
});

module.exports = router;