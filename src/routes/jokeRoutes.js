const express = require('express');
const router = express.Router();
const controller = require('../controllers/jokeController');


/**
 * @swagger
 * /api/v1/jokes:
 *  post:
 *   summary: Create a joke
 *   responses:
 *    200:
 *     description: Jokes Created
 */
router.post('/', controller.createJoke);
/**
 * @swagger
 * /api/v1/jokes:
 *  get:
 *   summary: Get all jokes
 *   responses:
 *    200:
 *     description: Jokes List
 */
router.get('/jokes', controller.getAllJokes);
/**
 * @swagger
 * /api/v1/jokes/random:
 *  get:
 *   summary: Get a random joke
 *   responses:
 *    200:
 *     description: Random joke
 */
router.get('/jokes/random', controller.getRandomJoke);
/**
 * @swagger
 * /api/v1/jokes/id:
 *  get:
 *   summary: Get a specific joke by id 
 *   responses:
 *    200:
 *     description: A specific joke
 */
router.get('/jokes/:id', controller.getJokeById);

module.exports = router;