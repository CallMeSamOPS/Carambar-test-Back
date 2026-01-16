const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('API Carambar OK');
});

app.listen(3000, () => {
    console.log('Serveur lance sur localhost');
});