
exports.up = function(knex) {
  return knex.schema.createTable('usuarios_perfis', table => {
    table.integer('usuario_id').unsigned()
    table.integer('perfil_id').unsigned()

    table.primary(['usuario_id', 'perfil_id'])

    table.foreign('usuario_id').references('usuarios.id')
    table.foreign('perfil_id').references('perfis.id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuarios_perfis')
};
