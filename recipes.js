/*
RECIPE TEMPLATE:
  key: {
    title: '',
    name: 'key',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: []
  },
*/

const recipes = {
  guacamole: {
    title: 'Guacamole',
    name: 'guacamole',
    description:
      'A guac recipe refined in San Francisco and perfected by many Youtube videos',
    tags: ['vegan', 'appetizer', 'dip'],
    ingredients: [
      '5-6 Hass Avocados',
      '1/2 Red Onion',
      '1 Jalapeno',
      '2 Serranos',
      '~3 cloves Garlic',
      '1/2 - 1 Lemon',
      '1-2 Tomatoes',
      'Salt',
    ],
    directions: [
      'Finely dice onion and peppers; mince garlic; transfer to a sturdy mixing bowl',
      "Add some salt to mixture; mash with pestle until onions an peppers don't make as much crunching noise",
      'Halve and cube avocados; scoop into mixing bowl',
      'Mash with pestle and/or fork to desired chunkiness',
      'Mix in juice of half a lemon',
      'Deseed and dice tomato(es); stir into mixture',
      'Add lemon, salt and other desired seasonings to taste',
      'Serve with chips or on a burrito or something',
    ],
    notes: [],
  },
  artichoke_dip: {
    title: 'Artichoke Heart Dip',
    name: 'artichoke_dip',
    description:
      'Not that cheesy-spinach-dip-with-a-hint-of-artichoke sorry excuse for artichoke dip you get at restaurants.',
    tags: ['appetizer', 'dip'],
    ingredients: [
      '24-42oz marinated artichoke hearts',
      '1-2 green onions',
      '2-4 garlic cloves',
      '1 Roasted Red Pepper (optional)',
      'Parmigiano Reggiano',
      'Mayonnaise (or Vegannaise)',
      '1-2 tbsp Pine Nuts (optional)',
      'Salt',
      'Pepper',
      'Cayenne',
      '1-2 baguettes',
    ],
    directions: [
      'Dice artichoke hearts & roasted red pepper; mince garlic & green onion; place in baking dish',
      'Grate (ideally with a microplane) a good mound of Parm into backing dish (1-2 cups in volume)',
      'Mix it all together',
      'One (table)spoon at a time: add mayo, stir until combined, assess; shooting for just enough mayo to hold it together',
      'Season to taste with salt, pepper, and cayenne',
      "Sprinkle pine nuts over top (don't cover it, just enough to get a couple per spoonful)",
      'Place in 375&deg; oven for ~20 min or until slightly bubbling around the edges',
      'Place baguettes in oven for about 5 min towards the end; remove from oven and slice into 1-or-2-bite size pieces',
      'Serve with spoons in dip for scooping onto baguette slices',
    ],
    notes: [
      'Vegannaise adds a nice tanginess to the dip, but reduces its structural integrity',
      "The quality of the marinated artichokes is a big deal; don't cut costs with the artichokes",
    ],
  },
  brushcetta: {
    title: 'Tomato Bruschetta',
    name: 'bruschetta',
    description: '',
    tags: ['appetizer', 'dip', 'fan favorite'],
    ingredients: [
      '5 medium sized Tomatoes (more firm than soft)',
      '4 cloves Garlic',
      '~ 1 cup fresh Basil',
      'drizzle of Balsamic Vinaigrette',
      'Salt',
      '4+ oz Goat Cheese',
      '1-2 baguettes',
      'Olive Oil',
    ],
    directions: [
      'Deseed and dice tomatoes; place in bowl, stir in a good amount of salt',
      'Mince garlic; roughly chop basil into small ribbons',
      'Mix balsamic, garlic, and basil into tomatoes; salt and balsamic to taste',
      'Thinly slice baguette; place pieces onto baking sheet(s); brush with olive oil',
      'Place bread pans into 400&deg; oven or under broiler until golden/brown around edges',
      'Place goat cheese on a small plate with knives',
      'Drain tomato juice from bruschetta; serve with spoons for scooping onto bread',
    ],
    notes: [
      "Herbed goat cheese seems to be very popular when it's an option.",
      "In case you've never had bruschetta: spread goat cheese on slice of baguette, scoop tomatoes on top of goat cheese, enjoy.",
      'Optionally, reserve balsamic to drizzle over each piece instead of mixing it in',
      'Optionally, serve with freshly grated parmigiano to sprinkle on top of each piece',
    ],
  },
  thai_peanut_noodles: {
    title: 'Thai Peanut Noodles',
    name: 'thai_peanut_noodles',
    description:
      'Have you ever thought, "Damn, I could go for a spicy, salty, peanut butter sandwich on noodles right now"? Either way, try this recipe. I have yet to find someone who doesn\'t love it.',
    tags: ['vegan', 'pasta', 'leftovers', 'fan favorite'],
    ingredients: [
      '1/3 cup Chunky Peanut Butter',
      '1/3 cup Soy Sauce',
      '2 tbsp Honey',
      '1 tbsp Sesame oil',
      '2 tbsp Canola oil',
      '1 tbsp Rice Vinegar',
      '1 tsp Chili Garlic Hot Sauce',
      '2 cloves Fresh Garlic',
      '2 tsp Fresh Ginger',
      '1-2 Green Onions',
      '12 oz Spaghetti Noodles',
      '4-5 Carrots',
      '1-2 Red/Yellow/Orange Bell Peppers',
      'Additional ginger, garlic, soy sauce and canola oil for stir frying',
    ],
    directions: [
      'Finely mince garlic, ginger, and green onions',
      'Whisk together Peanut Butter, Soy sauce, Honey, Sesame Oil, Canola Oil, Rice Vinegar, Red Pepper Flakes, Garlic, and Ginger',
      "Cut carrots into sticks; deseed bell peppers and slice relatively thinly; just think about sizes you'd want to mix and eat on the same fork as noodles",
      'Stir fry carrots and bell pepper in canola oil, soy sauce (, and some more minced ginger & garlic for extra flavor) in cast iron skillet',
      'Cook spaghetti (in heavily salted water, duh)',
      'Combine all in large bowl; for easiest mixing, pour in half of everything, then the next half',
    ],
    notes: [
      'Stir fried veggies are technically optional, but no guarantees people will like it. These be uncharted waters',
      'Honey can be replaced with just plain sugar',
      'Red Pepper flakes can substitute for hot sauce. Whatever you like most!',
      'Toasted Sesame Oil is also fantastic',
      "Make a double batch. You'll thank yourself later.",
    ],
  },
  pesto: {
    title: 'Pesto',
    name: 'pesto',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  alfredo: {
    title: 'Alfredo',
    name: 'alfredo',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  orzo_salad: {
    title: 'Orzo Salad',
    name: 'orzo_salad',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  sourdough_bread: {
    title: 'Sourdough Bread',
    name: 'sourdough_bread',
    courtesy_of: 'Luke Peterson',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  beet_burgers: {
    title: 'Beet Burgers',
    name: 'beet_burgers',
    courtesy_of: 'The Vegetarian Cookbook',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  ultimate_burgers: {
    title: 'Ultimate Burgers',
    name: 'ultimate_burgers',
    courtesy_of: 'The Vegetarian Cookbook',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  roasted_veggies: {
    title: 'Roasted Veggies',
    name: 'roasted_veggies',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  cream_cheese_wontons: {
    title: 'Cream Cheese Wontons',
    name: 'cream_cheese_wontons',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  mushroom_stroganoff: {
    title: 'Mushroom Stroganoff',
    name: 'mushroom_stroganoff',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  marinara: {
    title: 'Marinara',
    name: 'marinara',
    courtesy_of: 'Dad',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  tortilla_wraps: {
    title: 'Tortilla Wraps',
    name: 'tortilla_wraps',
    courtesy_of: 'Matt & Alyssa Kirby',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  hummus: {
    title: 'Hummus',
    name: 'hummus',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  mac_n_cheese_pizza: {
    title: "Mac 'n' Cheese Pizza",
    name: 'mac_n_cheese_pizza',
    courtesy_of: 'Dad',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  ramen_noodles: {
    title: 'Ramen Noodles',
    name: 'ramen_noodles',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  dad_pizza_dough: {
    title: "Dad's Pizza Dough",
    name: 'dad_pizza_dough',
    courtesy_of: 'Dad',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  acorn_squash_pasta: {
    title: 'Acorn Squash Pasta',
    name: 'acorn_squash_pasta',
    courtesy_of: 'Workiva Cafe Chef',
    description:
      "This dish was served at the Workiva Cafe for a week in the Fall 2016. Technically Workiva property, so please don't sell it",
    tags: [ 'pasta', 'Fall' ],
    ingredients: [
      '2 Acorn Squash',
      'Olive oil',
      'Salt',
      'Ground Cumin',
      'Ground Nutmeg',
      'Cinnamon',
      'Cayenne',
      'Ground All-spice',
      'Black Pepper',
      '16 oz Trofie noodles',
      '4 oz Browned Butter',
      'Several leaves Fresh Sage',
      'Parmigiano Regiano for garnish',
    ],
    directions: [
      'Skin and dice acorn squash; toss with Olive oil, salt, cumin, nutmeg, cinnamon, cayenne, all-spice, and pepper',
      'Place on baking sheet(s) and into 375&deg; oven for 45-60min or until starting to brown around the edges',
      'Roughly chop sage',
      'Cook noodles until al dente; reserve some pasta water',
      `In metal skillet: 
        <ul>
          <li>heat butter,</li>
          <li>add some pasta water, reduce,</li>
          <li>add sage, a bit more water, reduce</li>
          <li>add noodles, touch more water, reduce</li>
          <li>add squash</li>
        </ul>`,
      'Plate and serve with freshly grated parmesan on top'
    ],
    notes: [
      'Squash and butter can be made and refrigerated well-beforehand.'
    ],
  },
  roasted_veggie_hoagies: {
    title: 'Roasted Veggie & Mushroom Hoagies',
    name: 'roasted_veggie_hoagies',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  risotto: {
    title: 'Risotto',
    name: 'risotto',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  salsa: {
    title: 'Salsa',
    name: 'salsa',
    courtesy_of: 'Tristan Duyvejonck',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  butter_cream_sauce: {
    title: 'Butter Cream Sauce',
    name: 'butter_cream_sauce',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  mayonnaise: {
    title: 'Mayonnaise',
    name: 'mayonnaise',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  vodka_sauce: {
    title: 'Vodka Sauce',
    name: 'vodka_sauce',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  luke_pizza_dough: {
    title: 'Lukes Pizza Dough',
    name: 'luke_pizza_dough',
    courtesy_of: 'Luke PEterson',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  mushrooms: {
    title: 'Sauteed Mushrooms',
    name: 'mushrooms',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  stomping_grounds_paninis: {
    title: 'Stomping Grounds Paninis',
    name: 'stomping_grounds_paninis',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  roasted_pepper_pasta: {
    title: 'Roasted Red Pepper Pasta',
    name: 'roasted_pepper_pasta',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  mushroom_bruschetta: {
    title: 'Mushroom Bruschetta',
    name: 'mushroom_bruschetta',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  rosie_thai_curry: {
    title: "Rosie's Thai Curry",
    name: 'rosie_thai_curry',
    courtesy_of: 'Roisin Welch',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  brazilian_fries: {
    title: 'Brazilian Fries',
    name: 'brazilian_fries',
    description: 'Best made and eaten semi-buzzed at 1am, these fries will knock your drunk friends\' socks off.',
    tags: ['appetizer', 'side', 'drunk-food', 'easy'],
    ingredients: [
      'Yukon Gold (or similar) potatoes',
      'Salt',
      'Pepper',
      'Cayenne',
      'Olive Oil',
      'Mayonnaise',
      'Garlic Powder'
    ],
    directions: [
      'Cut potatoes into wedges',
      'Toss with olive oil, salt, pepper, and cayenne',
      'Place on baking sheet with a skinless-side touching the sheet',
      'Bake at 420&deg; for ~30 min, flip each wedge (as well as possible, depending on amount of alcohol consumption and laziness); cook for another 15-30 min',
      'Mix together mayonnaise, garlic powder, salt, pepper, and a touch of cayenne',
      'Never risk Cafe Beaudelaire being out of fries again'
    ],
    notes: [
      'Exercise caution when handling a knife while intoxicated'
    ],
  }
};

if (typeof window === 'undefined') module.exports = recipes;
