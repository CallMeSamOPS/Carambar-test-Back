const Joke = require('./models/Joke');

async function seedJokes() {
    const count = await Joke.count();

if (count === 0) {
    await Joke.bulkCreate([
        {
            question: 'Pourquoi les dev...',
            answer: 'Parce que les devs...'
        },

        {
            question: 'Pourquoi les profs...',
            answer: 'Parce que les profs...' 
        },

        {
            question: 'Pourquoi les sportifs...',
            answer: 'Parce que les sportifs...' 
        }
    ]);

    console.log("Jokes insered");
    }
}

module.exports = seedJokes;