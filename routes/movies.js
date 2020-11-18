const express = require('express')
const router = express.Router()

// Item Model
const Movie = require('../models/Movie')

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        if (!movies) throw Error('No items');
  
        res.status(200).json(movies);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
  });

router.post('/', (req, resp) => {
    const newMovie = new Movie({
        title: req.body.title,
        likes: req.body.likes,
        dislikes: req.body.dislikes
    })
    newMovie.save().then(movie => resp.json(movie))
})

// router.delete('/:id', (req, resp) => {
//    Item.findById(req.params.id)
//     .then(item => item.remove().then(resp.json({success: true})))
//     .catch(err => resp.staus(404).json({success: false}))
// })

module.exports = router;