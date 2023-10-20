function listarDados(request, response) {
    response.send('Retorno de lista de informação do Banco de dados');
    console.log('get')
}

module.exports = {
    listarDados
}