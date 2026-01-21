const express = require('express');
const cors = require('cors');
const jokesRoutes = require('./routes/jokeRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');

const app = express();

app.use(cors());
app.use(express.json());

// Test API
app.get('/', (req, res) => {
    res.send('API Carambar OK');
});

app.use('/api/v1', jokesRoutes);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;



