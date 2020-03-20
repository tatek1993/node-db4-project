
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    {
      name: "chocolate milk"
    },
    {
      name: "apple pie"
    },
    {
      name: "apple sauce"
    }
    
  ]);
    
};
