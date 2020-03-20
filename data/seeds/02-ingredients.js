
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    {
      ingredient: "nesquik"
    },
    {
      ingredient: "apple"
    },
    {
      ingredient: "pie crust"
    },
    {
      ingredient: "milk"
    }
    
  ]);
    
};
