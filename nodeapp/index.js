const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('MARAVINICIUS');
})

app.listen('3000', () => {
    console.log('RODANDO NA PORTA 3000')
})