const express = require("express");
const cors = require("cors");
const routes = require("./routes");

//Biblioteca ou dependência Express é muito utilizado para rotas da nossa
//aplicaçao e sendo instaciado na variavel "app"
const app = express();

//Habilitando o recurso da Express para utilizar e reconhecer a utilização do formato JSON
app.use(cors());
app.use(express.json());
app.use(routes);

//Porta na qual a aplicação vai ficar escutando para executar
// nosso projeto
app.listen(3333);