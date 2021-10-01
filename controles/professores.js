
// Importação do Módulo Professor.
const Professores = require('../modelos/professores');

const cadastrarProfessor = (requisicaoAoServidor, respostaDoServidor) => {
    // Os atributos nome e sobrenome foram desmembrados do corpo do objeto.
    const { nome, sobrenome } = requisicaoAoServidor.body;
    /* 
        Obs.: O desmembramento dos atributos nome e sobrenome, citados a cima,
        é opcional, porém para se tornar opcional, a instrução de cadastramento
        ficaria assim: 
        
        new Professores().salvarProfessorNoBancoDeDados(requisicaoAoServidor.body.nome, requisicaoAoServidor.body.sobrenome);
    */
    // Cadastro do professor.
    new Professores().salvarProfessorNoBancoDeDados(nome, sobrenome);
    // Desenha-se uma tela de resultado da pasta visualizações.
    respostaDoServidor.render('resultado');
}

const retornarListaDeProfessoresEmObjetoLiteral = (_, respostaDoServidor) => {
    // O servidor envia para o usuário um objeto literal com a lista de todos os professores.
    respostaDoServidor.json( new Professores().retornarListaDeTodosOsProfessoresEmObjetoLiteral() )
};

const exibirPaginaDeCadastroListaDeProfessores = (_, respostaDoServidor) => {
    respostaDoServidor.render(
        // Desenha-se uma tela de cadastro da pasta visualizações.
        'cadastrar',
        // Envio o lista de professores para ser utilizada na tela.
        { professores: new Professores().retornarListaDeTodosOsProfessoresEmObjetoLiteral() }
    );
};

// Exportação de todos os controles de professores.
module.exports = { 
    cadastrarProfessor, 
    retornarListaDeProfessoresEmObjetoLiteral, 
    exibirPaginaDeCadastroListaDeProfessores 
}