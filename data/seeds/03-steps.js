
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').insert([
    {
      step_number: 1,
      instructions: "Put nesquik in milk and stir",
      recipe_id: 1
    },
    {
      step_number: 1,
      instructions: "Put apples in pie crust",
      recipe_id: 2
    },
    {
      step_number: 1,
      instructions: "heat up sliced apples in a pot",
      recipe_id: 3
    },
    {
      step_number: 2,
      instructions: "heat until soft",
      recipe_id: 3
    },
    {
      step_number: 3,
      instructions: "mash apples",
      recipe_id: 3
    }
  ]);
    
};
