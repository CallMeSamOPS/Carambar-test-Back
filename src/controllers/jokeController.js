const Joke = require('../models/Joke');

exports.createJoke = async (req, res) => {
    try{
        const { question, answer } =req.body;

        if (!question || !answer) {
            return res.status(400).json({
                message: 'question and answer is needed'
            });
        }
    const joke = await Joke.create({ question, answer});

    res.status(201).json(joke);
    
    } catch (error) {
        res.status(500).json({
            message: 'Created joke error',
            error: error.message
        });
    }
    }

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