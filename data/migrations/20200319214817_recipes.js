
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.varchar('name', 255)
         .unique()
         .notNullable();
    })  
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.varchar('ingredient', 255)
         .unique()
         .notNullable()
  })
  .createTable('recipe_ingredients', tbl => {
    tbl.increments();
    tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    tbl.float('quantity')
        .notNullable()
})         
.createTable('steps', tbl => {
    tbl.increments();
    
    tbl.integer('step_number')
        .unsigned()
        .notNullable();

    tbl.text('instructions')
        .notNullable();

    tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
