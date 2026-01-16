const express = require('express');
const router = express.Router();
const controller = require('../controllers/jokeController');

router.post('/jokes', controller.createJoke);
router.get('/jokes', controller.getAllJokes);
router.get('/jokes/random', controller.getRandomJoke);
router.get('/jokes/:id', controller.getJokeById);

module.exports = router;