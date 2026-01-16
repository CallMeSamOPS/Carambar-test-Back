const Joke = require('../models/Joke');

exports.createJoke = async (req, res) => {
    const joke = await Joke.create(req.body);
    res.json(joke);
};

exports.getAllJokes = async (req, res) => {
    const jokes = await Joke.findAll();
    res.json(jokes);
};

exports.getJokeById = async (req, res) => {
    const joke = await Joke.findByPk(req.params.id);
    res.json(joke);
};

exports.getRandomJoke = async (req, res) => {
    const jokes = await Joke.findAll();
    const random = jokes[Math.floor(Math.random() * jokes.length)];
    res.json(random);
};