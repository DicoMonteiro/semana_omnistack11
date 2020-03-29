const express = require('express');
// importando uma biblioteca nativa do JS para criptografar
// const crypto = require('crypto');

// importando as Conexões de banco de dados para poder persistir os dados
// const connection = require('./database/connection');

// importando o arquivo de Controller para acessar as requisições
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// importando as Rotas do express dentro da variavel routes
const routes = express.Router();


// Rota / Recurso

// Métodos HTTP:
//
// GET - Buscar/listar uma informação do back-end
//
// POST - Criar uma informação no back-end
//
// PUT - Alterar uma informação no back-end
//
// DELETE - Deletar uma informação no back-end

/**
 * Tipos de Parâmteros:
 * 
 * Query Params: Parametros nomeados enviados dentro da rota após "?" (filtros, paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */


/**
 * BANCO DE DADOS RELACIONAL:
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * 
 * BANCO DE DADOS NÃO RELACIONAL:
 * 
 * NoSQL: MongoDB, CouchDB, CassandraDB etc
 */


 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */


// routes.get('/users/:id', (request, response) => {
//     // Acessa um dado específico
//     const params = request.params;

//     console.log(params)


//     // return response.send("Hello World!!");
//     return response.json({
//         evento: 'Semana Omnistack 11.0',
//         aluno: 'Adriano Almeida'
//     })
// });

// routes.get('/users?aluno=adriano&evento=semana&page=2', (request, response) => {
//     // return response.send("Hello World!!");
//     return response.json({
//         evento: 'Semana Omnistack 11.0',
//         aluno: 'Adriano Almeida'
//     })
// });

/**
 * LISTAGERM DE ONGS ou GET ALL
 */

// Essa funçao precisa ser assincrona (async) por que um comando somente pode ser executado, enquanto o outro for finalizado,
// como o exemplo, de inserção para depois retornar a resposta.
// routes.get('/ongs', async (request, response) => {
//     // Acessa os dados das requisições
//     const ongs = await connection('ongs').select('*');

//     return response.json(ongs);

//     // console.log(params)

//     // // return response.send("Hello World!!");
//     // return response.json({
//     //     evento: 'Semana Omnistack 11.0',
//     //     aluno: 'Adriano Almeida'
//     // })
// });

/**
 * CRIAÇÃO DE ONGS ou POST
 */

// Essa funçao precisa ser assincrona (async) por que um comando somente pode ser executado, enquanto o outro for finalizado,
// como o exemplo, de inserção para depois retornar a resposta.
// routes.post('/ongs', async (request, response) => {
//     // Acessa os dados do corpo da requisição armazendo tudo dentro de uma unica variavel
//     // const data = request.body;

//     // Armazendo o corpo da requisição em cada variavel específica, garantindo assim, que o usuário não passe
//     // um dado errado que nós não queremos na nossa aplicação
//     // const { name, email, whatsapp, city, uf } = request.body;

//     // const id = crypto.randomBytes(4).toString('HEX');

//     // // utilizando o await para a proxima linha de comando, espere a referenciada com o await, seja finalizada
//     // // para poder executar a próxima linha de comando
//     // await connection('ongs').insert({
//     //     id,
//     //     name,
//     //     email,
//     //     whatsapp,
//     //     city,
//     //     uf,
//     // })

//     // // console.log(data)

//     // // return response.send("Hello World!!");
//     // return response.json({ id, name, email, whatsapp, city, uf });
// });


/**
 * 
 * NOVAS FORMAS DE EXECUTAR AS ROTAS E REQUISIÇÕES USANDO O ARQUIVO DO CONTROLLER, OngController.js
 *
 */

routes.post('/sessions', SessionController.create)


routes.get('/ongs', OngController.get_all);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.get_id)

routes.get('/incidents', IncidentsController.get_all)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id', IncidentsController.delete)


module.exports = routes;