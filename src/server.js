// Importar pacote do express
const express = require('express');
// Instanciar o express na variavel app
const app = express();
// Importar o pacote dotenv
const dotenv = require('dotenv').config();
// Definir a porta do servidor
const PORT = process.env.PORT || 3005;

// Criando rota get
app.get('/api', (request, response) => {
    response.send('Retorno de informações do banco de dados');
});

app.post('/api', (request, response) => {
    response.send('Método utilizado para salvar informações!');
});

app.put('/api/:id', (request, response) => {
    response.send('Método utilizado para editar informações!');
});

app.delete('/api/:id', (request, response) => {
    response.send('Método utilizado para delete informações!');
});


// Testar servidor
app.listen(PORT, () => console.log(`Running at port ${PORT}`));
