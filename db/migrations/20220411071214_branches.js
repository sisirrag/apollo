/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable('branch',table => { 
        table.increments('id');
        table.string('branch_id').notNullable().primary();
        table.string('branch_name').notNullable();
        table.string('branch_address').notNullable();
        table.timestamps(true,true);
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.dropTable('branch');
  
};
