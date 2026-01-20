const app = require('./app');
const sequelize = require('./config/database');

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    console.log('Base de donnee connectee');

        app.listen(PORT, () => {
        console.log('Serveur lance sur localhost');
    });
});