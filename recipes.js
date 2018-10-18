/*
RECIPE TEMPLATE:
  key: {
    title: "",
    name: "key",
    description: "",
    tags: [],
    ingredients: [],
    directions: [],
    notes: []
  }
*/

const recipes = {
  guacamole: {
    title: "Guacamole",
    name: "guacamole",
    description:
      "A guac recipe refined in San Francisco and perfected by many Youtube videos",
    tags: ["vegan", "appetizer", "dip"],
    ingredients: [
      "5-6 Hass Avocados",
      "1/2 Red Onion",
      "1 Jalapeno",
      "2 Serranos",
      "~3 cloves Garlic",
      "1/2 - 1 Lemon",
      "1-2 Tomatoes",
      "Salt"
    ],
    directions: [
      "Finely dice onion and peppers; mince garlic; transfer to a sturdy mixing bowl",
      "Add some salt to mixture; mash with pestle until onions an peppers don't make as much crunching noise",
      "Halve and cube avocados; scoop into mixing bowl",
      "Mash with pestle and/or fork to desired chunkiness",
      "Mix in juice of half a lemon",
      "Deseed and dice tomato(es); stir into mixture",
      "Add lemon, salt and other desired seasonings to taste",
      "Serve with chips or on a burrito or something"
    ],
    notes: []
  },
  artichoke_dip: {
    title: "Artichoke Heart Dip",
    name: "artichoke_dip",
    description:
      "Not that cheesy-spinach-dip-with-a-hint-of-artichoke sorry excuse for artichoke dip you get at restaurants.",
    tags: ["appetizer", "dip"],
    ingredients: [
      "24-42oz marinated artichoke hearts",
      "1-2 green onions",
      "2-4 garlic cloves",
      "1 Roasted Red Pepper (optional)",
      "Parmigiano Reggiano",
      "Mayonnaise (or Vegannaise)",
      "1-2 tbsp Pine Nuts (optional)",
      "Salt",
      "Pepper",
      "Cayenne",
      "1-2 baguettes"
    ],
    directions: [
      "Dice artichoke hearts & roasted red pepper; mince garlic & green onion; place in baking dish",
      "Grate (ideally with a microplane) a good mound of Parm into backing dish (1-2 cups in volume)",
      "Mix it all together",
      "One (table)spoon at a time: add mayo, stir until combined, assess; shooting for just enough mayo to hold it together",
      "Season to taste with salt, pepper, and cayenne",
      "Sprinkle pine nuts over top (don't cover it, just enough to get a couple per spoonful)",
      "Place in 375&deg; oven for ~20 min or until slightly bubbling around the edges",
      "Place baguettes in oven for about 5 min towards the end; remove from oven and slice into 1-or-2-bite size pieces",
      "Serve with spoons in dip for scooping onto baguette slices"
    ],
    notes: [
      "Vegannaise adds a nice tanginess to the dip, but reduces its structural integrity",
      "The quality of the marinated artichokes is a big deal; don't cut costs with the artichokes"
    ]
  }
};

if (typeof window === "undefined") module.exports = recipes;
