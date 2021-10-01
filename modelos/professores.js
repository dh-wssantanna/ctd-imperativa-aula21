// Importação do módulo File System no Nodejs.
const fs = require('fs');
// Importação do módulo path.
const path = require('path');

function ProfessoresPDO() {

    // Guarda os valores do arquivo de texto json em uma variável.
    const arquivoEmJSON = fs.readFileSync(path.resolve('./', 'banco-de-dados.json'), 'utf-8');
    // Converte o arquivo de texto para objeto literal para poder manipulá-lo.
    const arquivoConvertidoEmObjetoLiteral = JSON.parse(arquivoEmJSON);

    this.salvarProfessorNoBancoDeDados = function(nomeDoProfessor, sobrenomeDoProfessor) {
        // Caso os valores nome e sobrenome não estejam vazios e sejam uma string.
        if(validarSeOValorEhUmaString(nomeDoProfessor, sobrenomeDoProfessor)) {
            // Adiciono o objeto com o nome e sobrenome da Array.
            arquivoConvertidoEmObjetoLiteral.push({
                nome: nomeDoProfessor,
                sobrenome: sobrenomeDoProfessor
            });
            // Converto o resultado em string.
            const arquivoConvertidoEmString = JSON.stringify(arquivoConvertidoEmObjetoLiteral);
            // Sobrescreve o arquivo banco-de-dados.json com o arquivo atualizado.
            fs.writeFileSync(path.resolve('./', 'banco-de-dados.json'), arquivoConvertidoEmString);
        } 
        else {
            return 'Não é um nome válido.';
        }
    }

    this.retornarListaDeTodosOsProfessoresEmObjetoLiteral = function() {
        return arquivoConvertidoEmObjetoLiteral;
    }

    function validarSeOValorEhUmaString(nome, sobrenome) {
        var naoEstaVazio = (nome && sobrenome);
        var ehUmaString = (typeof(nome) == 'string' && typeof(sobrenome) == 'string');
                
        return (naoEstaVazio && ehUmaString);
    }

}

module.exports = ProfessoresPDO;