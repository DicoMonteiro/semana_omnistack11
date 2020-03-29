
// Metodo UP sempre responsável para criação da tabela
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    // passando o tamanho que o campo vai receber de dados, no exemplo abaixo, campo UF vai receber 2 caracteres
    table.string('uf', 2).notNullable();
  });
};

// Nesse caso o medoto DOWN está servindo para deletar a tabela criada, se por ventura der alguma coisa errada
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
