const app = require('./app');
const sequelize = require('./config/database');
const seedJokes = require('./seed');

const PORT = process.env.PORT || 3000;

sequelize.sync().then(async () => {
    console.log('Base de donnee connectee');
    await seedJokes();

        app.listen(PORT, () => {
        console.log(`Serveur lance sur le port ${PORT}`);
    });
}).catch(err => {
    console.error('Erreur DB:', err);
});
