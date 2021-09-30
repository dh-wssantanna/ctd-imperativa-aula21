// Importação do módulo File System do Nodejs.
const fs = require('fs');
// Importação do módulo path.
const path = require('path');
const raizDoProjeto = path.resolve('./');
// Carregar o arquivo do nosso banco de dados em JSON.
const arquivoEmJSON = fs.readFileSync(raizDoProjeto + '/banco-de-dados.json', 'utf-8');
const arquivoConvertidoEmObjetoLiteral = JSON.parse(arquivoEmJSON);

function ListarProfessores() {
    this.listar = function() {
        // Retonar o valor em JSON.
        return arquivoConvertidoEmObjetoLiteral;
    }
}

module.exports = ListarProfessores;