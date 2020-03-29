
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        // ID gerado automaticamente e incemental
        table.increments();
        
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        // cirando o valor a ter relacionamento com a tabela ONGS
        table.string('ong_id').notNullable();
        // chave estrangeira sendo referenciada
        table.foreign('ong_id').references('id').inTable('ongs');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
