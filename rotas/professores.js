// Importação do Express.
const express = require('express');
// Inicialização do módulo de Rotas do Express.
const rotas = express.Router();
// Importação de todos os Controles.
const { cadastrarProfessor, retornarListaDeProfessoresEmJSON, exibirPaginaDeCadastroListaDeProfessores } = require('../controles/professores');

// Criação de todas as Rotas dos Professores
rotas.get('/', exibirPaginaDeCadastroListaDeProfessores);
rotas.get('/listar', retornarListaDeProfessoresEmJSON);
rotas.post('/cadastrar', cadastrarProfessor);

// Exportação de todas as Rotas dos Professores.
module.exports = rotas;