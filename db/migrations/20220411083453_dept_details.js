/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('dept_details',table =>{
        table.increments('id');
        table.string('dept_id').notNullable().references('dept_id').inTable('department');
        table.string('branch_id').notNullable().references('branch_id').inTable('branch');        
        table.timestamps(true,true);
    })
    
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.dropTable('dept_details');
  
};
