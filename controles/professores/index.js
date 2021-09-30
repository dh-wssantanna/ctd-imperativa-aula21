
// Importação do Módulo Professor.
const CadastrarProfessor = require('../../modelos/cadastrar');
const Professores = require('../../modelos/listar');
/*
    Obs.: Em uma situação real, haveria apenas um modelo para controlar
    todas as consultas, mas por questões didádicas e de tempo, 
    preferir seguir com o código divido.
*/

const cadastrarProfessor = (requisicaoAoServidor, respostaDoServidor) => {
    // Os atributos nome e sobrenome foram desmembrados do corpo do objeto.
    const { nome, sobrenome } = requisicaoAoServidor.body;
    /* 
        Obs.: O desmembramento dos atributos nome e sobrenome, citados a cima,
        é opcional, porém para se tornar opcional, a instrução de cadastramento
        ficaria assim: 
        
        new CadastrarProfessor(requisicaoAoServidor.body.nome, requisicaoAoServidor.body.sobrenome);
    */
    // Cadastro do professor.
    new CadastrarProfessor(nome, sobrenome);
    // Desenha-se uma tela de resultado da pasta visualizações.
    respostaDoServidor.render('resultado');
}

const retornarListaDeProfessoresEmJSON = (_, respostaDoServidor) => {
    // O servidor envia para o usuário, 
    respostaDoServidor.json( new Professores().listar() )
};

const exibirPaginaDeCadastroListaDeProfessores = (_, respostaDoServidor) => respostaDoServidor.render('cadastrar',{ professores: new Professores().listar() });

module.exports = { 
    cadastrarProfessor, 
    retornarListaDeProfessoresEmJSON, 
    exibirPaginaDeCadastroListaDeProfessores 
}