/* 
    Aula 21 - Criando uma API parte III
    
    (  ) Separar as rotas.
    (  ) Separar os controles.
    (  ) Separar os modelos.
*/

// Importação do módulo Express.
const express = require('express');
// Importação da Template Engine.
const handlebars  = require('express-handlebars');
// Importação das rotas dos professores
const rotasDosProfessores = require('./rotas/professores');

// Inicialização do Express.
const aplicativo = new express();

// Configurações do Projeto Nodejs.
// Configuração da manipulação de dados. Neste caso definimos JSON. 
aplicativo.use(express.json());
aplicativo.use(express.urlencoded({ extended: true }));
// Configuração da Template Engine.
aplicativo.set('views','./visualizacoes');
aplicativo.set('view engine', 'handlebars');
aplicativo.engine('handlebars', handlebars({ defaultLayout: 'modelo' }));

// Rotas do Projeto Nodejs.
aplicativo.get('/', (_, respostaDoServidor) => respostaDoServidor.send('API OK'))
aplicativo.use('/professores', rotasDosProfessores);

// Inicialização do Projeto Nodejs.
aplicativo.listen(1234, () => console.log('Servidor funcionando!'));