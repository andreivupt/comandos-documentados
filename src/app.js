// Importar pacote do express
const express = require('express');
// Instanciar o express na variavel app
const app = express();

// importar as rotas para serem executadas na aplicação
const crudRouter = require('./routes/crudRouter');
// importar as rotas para serem executadas na aplicação
const alunosRouter = require('./routes/alunosRouter');

// Importar o pacote dotenv
const dotenv = require('dotenv').config();

// Habilitar a utilização do crudRouter
app.use('/api', crudRouter);
// Habilitar a utilização do alunosRouter
app.use('/api', alunosRouter);

//Setar a porta do servidor, a partir do arquivo .env
app.set('port', process.env.PORT);

// Exportar as configurações do app para outros arquivos acessarem
module.exports = app;