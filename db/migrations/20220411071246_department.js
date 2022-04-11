/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable('department',table => { 
        table.increments('id');
        table.string('dept_id').notNullable().primary();
        table.string('dept_name').notNullable();        
        table.timestamps(true,true);
    })


  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.dropTable('department');
  
};
