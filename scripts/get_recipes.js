const recipes = require("../recipes.js");

const keys = Object.keys(recipes);

for (let i = 0; i < keys.length; i++) {
  console.log(`${keys[i]} ${recipes[keys[i]].title}`);
}
