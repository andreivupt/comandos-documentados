// Importar o arquivo de configuração
const app = require('./app');
// Importar a porta do servidor
const port = app.get('port');

// Testar servidor
app.listen(port, () => console.log(`Running at port ${port}`));
