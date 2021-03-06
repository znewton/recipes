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
      'Cumin',
      'Cayennes',
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
      '<sep>',
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
  bruschetta: {
    title: 'Tomato Bruschetta',
    name: 'bruschetta',
    description: '',
    tags: ['appetizer', 'dip', 'fan-favorite'],
    ingredients: [
      '5 medium sized Tomatoes (more firm than soft)',
      '4 cloves Garlic',
      '~ 1 cup fresh Basil',
      'drizzle of Balsamic Vinaigrette',
      'Salt',
      '<sep>',
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
    tags: ['vegan', 'pasta', 'leftovers', 'fan-favorite'],
    ingredients: [
      '1/3 cup Chunky Peanut Butter',
      '1/3 cup Soy Sauce',
      '1 tbsp Honey',
      '1 tbsp Sesame oil',
      '2 tbsp Canola oil',
      '1 tbsp Rice Vinegar',
      '1 tsp Chili Garlic Hot Sauce',
      '2 cloves Fresh Garlic',
      '2 tsp Fresh Ginger',
      '1-2 Green Onions',
      '<sep>',
      '12 oz Spaghetti Noodles',
      '<sep>',
      '4-5 Carrots',
      '1-2 Red/Yellow/Orange Bell Peppers',
      'Additional ginger, garlic, soy sauce and canola oil for stir frying',
    ],
    directions: [
      'Finely mince garlic, ginger, and green onions',
      'Whisk together Peanut Butter, Soy sauce, Honey, Sesame Oil, Canola Oil, Rice Vinegar, Red Pepper Flakes, Garlic, Green Onions, and Ginger',
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
    description: 'That good green stuff',
    tags: ['pasta', 'easy'],
    ingredients: [
      '1-2 oz Fresh Basil Leaves',
      '1 excessive quantity Spinach Leaves',
      '3-4+ cloves Garlic',
      '1-2 handfuls Walnuts, Pine Nuts, or Sunflower Seeds',
      '1/2-1 Lemon Juice',
      '1-2 cups Olive Oil',
      '1 mound Parmigiano Regiano (or Parmesan, you do you)',
      'Salt',
    ],
    directions: [
      'Throw basil, garlic, nuts, and a good amount of olive oil into a food processor or high-speed blender',
      'Add spinach leaves, cheese and olive oil until desired consistency',
      'Add salt and lemon juice to taste',
    ],
    notes: [
      'When serving over pasta or something of high volume, mix with half & half over medium heat to make it go further',
      "100% basil (as opposed to part basil part spinach) has a much stronger flavor that some people like, some people don't, but I enjoy it",
      'Use whatever nuts you can afford',
    ],
  },
  alfredo: {
    title: 'Alfredo',
    name: 'alfredo',
    courtesy_of: 'Dad',
    description: 'Basic white sauce',
    tags: ['pasta', 'easy'],
    ingredients: [
      '~1 tbsp Butter',
      '3-5 cloves Garlic',
      '~1 cup Heavy Whipping Cream',
      '~1 cup Half & Half',
      '~1 cup grated Parmesan',
      'Pepper',
    ],
    directions: [
      'Preheat oven to 375&deg;',
      'Cut bases off garlic (do not peel); wrap in foil; bake in oven until strongly fragrant',
      'Peel garlic (should just come right off) and finely mince',
      'Melt butter in small saucepan over medium heat',
      'Add garlic; wait ~30-45s; add Heavy Whipping Cream; stir',
      'Once combined, add Half & Half; stir',
      'Melt in Parmesan while stirring',
      'Add just a touch of freshly cracked black pepper',
    ],
    notes: [
      'For quick and easy dinner, mix this into some fusilli noodles (probably ~8-12oz pasta per above recipe). Top with parmesan',
    ],
  },
  orzo_salad: {
    title: 'Orzo Salad',
    name: 'orzo_salad',
    courtesy_of: 'Mom',
    description: "So delicious you'll eat several helpings without knowing it.",
    tags: ['leftovers', 'easy'],
    ingredients: [
      '1/4 cup Red Wine Vinegar',
      '2 tbsp Fresh Lemon Juice',
      '1 tsp Honey',
      '1/2 cup Olive Oil',
      '<sep>',
      '6 cups Water (or broth for a little more flavor)',
      '1 lb Orzo (~2.25 cups dry)',
      '<sep>',
      '2 cups Teardrop/Grape Tomatoes',
      '7 oz Feta Cheese (crumbles or cut into 1/2 in. cubes)',
      '1 cup chopped Fresh Basil (into ribbons)',
      '1 cup chopped Green Onions',
      '1/2 cup toasted Pine Nuts',
      '<sep>',
      'Salt',
      'Pepper',
    ],
    directions: [
      'Whisk vinegar, lemon juice, and honey in small bowl; gradually whisk in olive oil; season with salt and pepper',
      'Boil Orzo until tender but slightly firm to the bite; drain and toss with dressing until cool',
      'Mix tomatoes, feta, basil, and green onions into Orzo; season to taste with salt and pepper',
      'Add pine nuts just before serving to keep them crunchy',
    ],
    notes: [
      'Flavors really get to know each other well in the fridge, so if possible, make a day in advance, store in the fridge, and let stand at room temp for 30 min before serving.',
      'There is no shame in eating 2-3 large bowls worth in one sitting.',
    ],
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
    title: 'Roasted Veggie(s)',
    name: 'roasted_veggies',
    description: 'My go-to side dish for most pasta meals',
    tags: ['side', 'vegan'],
    ingredients: [
      `One or more vegetable; I recommend one of the following (in order):
      <ul>
        <li>Carrots</li>
        <li>Asparagus</li>
        <li>Carrots, potatoes, red onion, bell peppers</li>
      </ul>
      `,
      'Olive Oil',
      'Salt',
      'Pepper',
    ],
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
    description:
      "Tryna impress? Serve this with Artichoke Heart Dip as an appetizer and Roasted Asparagus on the side. I've seen people eat a pound of food each with this combo.",
    tags: ['pasta', 'fan-favorite'],
    ingredients: [
      'Smallish yellow or white onion',
      '3 Portabella Mushrooms, cubed, no stems',
      '2 oz Butter',
      'Good amount of Dill (minced fresh, or dry)',
      'Splash of Dry Sherry',
      '~1.5 cups Veggie Broth',
      '1-3 tbsp Flour',
      '~8oz Sour Cream',
      'Salt, Pepper, Cayenne',
      '<sep>',
      '12-16 oz Extra-wide Ribbon Noodles',
    ],
    directions: [
      'Preheat cast iron; melt butter; add mushrooms and onions; season with Salt (a good amount), pepper, and a touch of cayenne',
      'Once mushrooms have released most of their liquid and onions are soft & translucent, throw in some dill',
      'Make sure veggie broth is hot and ready on a back burner',
      'Sautee until mushrooms start to have brown/red edges; deglaze with a reasonable splash of sherry and cook it off',
      '1 spoon at a time, stir in flour until cakey/clumpy ("it should look like you ruined it and this could never be a good sauce" &mdash; Dad)',
      'Add veggie broth; allow to cook into mushrooms and reduce; throw in more dill while reducing',
      'Add sour cream and more dill',
      'Serve over noodles, using leftover fresh dill for garnish',
    ],
    notes: [
      'When using dry dill instead of fresh, remember to not use as much as you would fresh',
      "I always use fresh dill, Dad always uses dry dill; don't sweat it",
    ],
  },
  marinara: {
    title: 'Marinara',
    name: 'marinara',
    courtesy_of: 'Dad',
    description: '"A dang good spaghetti sauce" &mdash; Roisin Welch',
    tags: ['pasta', 'sauce', 'vegan'],
    ingredients: [
      'Olive Oil',
      '~1 Yellow Onion, finely diced',
      'Dried Thyme',
      'Fennel Seed',
      'Salt',
      'Pepper',
      '~30 oz canned Crushed Tomatoes',
      '5-6 cloves Garlic, finely minced',
      'Thinly sliced Crimini Mushrooms (optional)',
      'Ground Veggie Burger (optional)',
    ],
    directions: [
      'In a large non-stick skillet (I prefer cast iron), drizzle enough olive oil to coat the bottom',
      'Sautee onions, mushrooms, and veggie burger with some salt, pepper, thyme and fennel seed until onions are just translucent',
      'Pour in crushed tomatoes; stir; let simmer; stir in garlic',
      'Simmer on low heat for 30-60 minutes; stir occasionally; cover partially if losing too much liquid',
    ],
    notes: [
      'Mushrooms and veggie burger are optional, but I prefer this recipe with a lot of mushrooms',
      'If serving picky guests, throw in a food processor until relatively smooth',
      'Super awesome if you simmer some diced carrots and zucchini in it until just softened; not applicable if food-processor-ing',
    ],
  },
  tortilla_wraps: {
    title: 'Tortilla Wraps',
    name: 'tortilla_wraps',
    courtesy_of: 'Matt & Alyssa Kirby',
    description: 'A cabin picnic tradition',
    tags: ['appetizer'],
    ingredients: [
      '8 oz sour cream',
      '8 oz softened cream cheese',
      '4 oz black olives',
      '8 oz bag of shredded cheese',
      '1 diced red pepper',
      '4 oz can green chiles',
      '1/2 bunch scallions',
      '4 oz can chopped jalapenos',
      "few dashes of Lowry's Seasoned Salt",
    ],
    directions: [
      'Smooth over tortilla',
      'Roll up tortilla and cover with saran wrap',
      'Chill for a few hours',
      'Serve with salsa of choice',
    ],
    notes: ['Makes ~8 tortillas (depending on tortilla size)'],
  },
  roasted_garlic: {
    title: 'Roasted Garlic',
    name: 'roasted_garlic',
    description: 'Basic How-to on Roasting Garlic',
    tags: ['ingredient'],
    ingredients: ['Garlic', 'Tin foil', 'Oven'],
    directions: [
      'Cut the butt-end of each garlic clove off (great if you leave it hanging by some shell), <strong>do not peel</strong>',
      'Pile garlic cloves onto piece of tin foil, wrap',
      'Place in 350&deg; oven until strongly aromatic',
      'Remove from oven, peel garlic',
    ],
    notes: [
      'Roasted takes away most of the bite that garlic has',
      "You can tell it's done if the shell comes off extremely easily when peeling. Don't be afraid to re-wrap and pop it back in the oven",
    ],
  },
  hummus: {
    title: 'Hummus',
    name: 'hummus',
    description:
      '"More than I ever thought hummus could be" &mdash; Alan Hogan',
    tags: ['appetizer'],
    ingredients: [
      '2 15 oz cans Garbanzo Beans (w/ salt)',
      '3-5 cloves garlic (depending on how many days you want garlic breath)',
      '1-2 tbsp Tahini',
      '2-3 tbsp Olive Oil',
      '1 Lemon (juice)',
      'Salt',
      'Cumin',
      'Cayenne',
      'Turmeric (optional)',
      'Paprika (garnish)',
    ],
    directions: [
      `<div>
        <p>Prepare the garlic in one of the following ways (in order of most to least garlic flavor):</p>
        <ol>
          <li>Peel and mince the garlic; mash into paste with coarse salt in a mortar & pestle</li>
          <li>Peel the garlic</li>
          <li><a href="/recipes/roasted_garlic.html">Roast 3 cloves garlic</a> (leave 1 clove raw for a touch of bite)</li>
        </ol>
      </div>`,
      "Drain garbanzo beans, reserving 1 can's worth of liquid",
      'Add olive oil, tahini, garlic, lemon juice to food processor; blend until smooth',
      'Add reserved garbanzo been liquid a bit at a time until desired consistency',
      'Season to taste',
      'Serve in a bowl with a light dusting of paprika on top',
    ],
    notes: [
      'Reduce garlic and add roasted red pepper for a nice change of pace',
      'Serve with <a href="https://youtu.be/NPiA69p4gqE">Chef Jon\'s Homemade Pita</a> recipe',
      'Peel garbanzo beans for a smoother texture',
    ],
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
    tags: ['pasta', 'Fall'],
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
      'Skin and dice 2 Acorn Squash; toss with Olive oil, Salt, Ground Cumin, Ground Nutmeg, Cinnamon, Cayenne, Ground All-spice, and Black Pepper',
      'Place on baking sheet(s) and into 375&deg; oven for 45-60min or until starting to brown around the edges',
      'Roughly chop Several leaves Fresh Sage',
      'Cook 16 oz Trofie noodles until al dente; reserve some pasta water',
      `In metal skillet: 
        <ul>
          <li>heat 4 oz Browned Butter,</li>
          <li>add some pasta water, reduce,</li>
          <li>add Several leaves Fresh Sage, a bit more water, reduce</li>
          <li>add noodles, touch more water, reduce</li>
          <li>add squash</li>
        </ul>`,
      'Plate and serve with freshly grated Parmigiano Regiano for garnish',
    ],
    notes: ['Squash and butter can be made and refrigerated well-beforehand.'],
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
    description:
      'Expertly crafted by a freshman software engineering student; traditionally eaten mixed with scrambled eggs while playing copious amounts of video games.',
    tags: ['dip', 'easy'],
    ingredients: [
      '20 oz canned Diced Tomatoes w/ Green Chiles',
      '28 oz canned Whole Tomatoes',
      '1/4 Onion (red or white)',
      '1-2 cloves Garlic',
      '1 Jalapeno (include seeds for heat if desired)',
      'Ground Cumin',
      'Salt',
      'Cayenne',
      "1/2 lime's juice",
    ],
    directions: [
      'Drain the juice from the tomato cans',
      'Throw all ingredients <i>except</i> the diced tomatoes into large food processor (>= 12 cups)',
      'Pulse until barely chunky',
      'Add diced tomatoes and pulse a couple more times to combine',
      'Adjust seasonings to taste',
    ],
    notes: ['Heat increases over time in the fridge due to jalapeno seeds'],
  },
  wine_cream_sauce: {
    title: 'Wine Cream Sauce',
    name: 'wine_cream_sauce',
    description: "Dad's favorite",
    tags: ['pasta', 'easy'],
    ingredients: [
      'Dry White Wine',
      'Butter',
      'Garlic',
      'Crushed Red Pepper',
      'Heavy Whipping Cream',
      'Black Pepper',
      'Basil',
      'Oregano',
      'Parsley',
    ],
    directions: [
      'Finely mince Garlic',
      'Saute Garlic and Crushed Red Pepper in Butter',
      'Add Dry White Wine before anything burns',
      'Simmer for a but to make sure all alcohol is gone',
      'Add Heavy Whipping Cream, Black Pepper, Basil, Oregano, and Parsley',
      'Reduce and serve',
    ],
    notes: ['Goes great on Butternut Squash Ravioli'],
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
  roma_wine_sauce: {
    title: 'Roma Wine Sauce',
    name: 'roma_wine_sauce',
    courtesy_of: 'Dad',
    description: '"I think this is it" &mdash; Dad',
    tags: ['pasta', 'easy'],
    ingredients: [
      'Crimini/Baby Bella Mushrooms',
      'Red Bell Pepper',
      'Shallot',
      'Butter',
      'Roma Tomatoes',
      'Roasted Garlic',
      'Sauvignon Blanc <i>or</i> Chardonnay',
      'Half & Half',
      'Heavy Cream',
      'Parmesan',
      'Salt',
      'Pepper',
      'Sage',
    ],
    directions: [
      'Finally chop Crimini/Baby Bella Mushrooms, Shallot, and Red Bell Pepper',
      'Saute in Butter, Salt, and Pepper... a lot, for a while... longer than you think',
      'Cut Roma Tomatoes lengthwise, add to skillet',
      'Finely chop Roasted Garlic, add to skillet',
      "Add Sauvignon Blanc <i>or</i> Chardonnay (no idea how much, but you'll know)",
      'Simmer long enough to reduce significantly',
      'Add Half & Half and Heavy Cream along with some Sage',
      'At intervals, add Parmesan (should end up being a large amount total)',
    ],
    notes: [],
  },
  vodka_sauce: {
    title: 'Vodka Sauce',
    name: 'vodka_sauce',
    courtesy_of: 'Dad',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  luke_pizza_dough: {
    title: 'Lukes Pizza Dough',
    name: 'luke_pizza_dough',
    courtesy_of: 'Luke Peterson',
    description: '',
    tags: [],
    ingredients: [],
    directions: [],
    notes: [],
  },
  mushrooms: {
    title: 'Sauteed Mushrooms',
    name: 'mushrooms',
    description:
      '"I don\'t like mushrooms, but I could eat these all day" &mdash; All but 1 person who has tried these',
    tags: ['fan-favorite', 'easy'],
    ingredients: [
      '~2 tbsp Butter',
      '~4 large Portabello Mushrooms',
      'Salt',
      'Pepper',
      'Sage',
      'Dry Sherry',
    ],
    directions: [
      'Remove stems and wash mushrooms under cold water; place on paper towel',
      'Slice mushrooms into quarter inch strips, then halve those (<del>| | | |</del>)',
      'Heat a cast iron skillet over medium heat',
      'Add butter and mushrooms',
      'Generously salt and pepper the mushrooms',
      'Sautee until liquid is released (puddled in the bottom), stirring occasionally',
      'Add either 1 tsp dried sage or ~4 leaves chopped fresh sage',
      'Sautee until liquid cooked off and mushrooms are starting to stick to the skillet',
      'Deglaze with a good splash of sherry, but not so mush as to overpower the other flavors',
      'Cook off sherry; reduce heat to keep warm until ready to serve (ideally right away)',
    ],
    notes: [
      'Serve on pesto, alfredo, or white wine cream sauce to blow some minds',
    ],
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
    description:
      "Had to pester Rosie for this recipe for a few months... so, you're welcome",
    tags: ['vegan'],
    ingredients: [
      '1 can of Maesri Green Curry Paste (Red for less hot, Yellow for least hot)',
      '3 - 4 cans of coconut milk (at least 3, will have to taste to see if you want the 4th)',
      'Bundle of carrots chopped into sticks that are a good size to eat (2" - 2.5")',
      'Red bell pepper chopped to bite size (not diced)',
      'Green bell pepper (same as above)',
      '2 Zucchinis',
      "Potatoes, Broccoli, Onion, Green Beans, Basil etc... There are so many good veggies for this stuff that you can choose what else you want to include. Pick at least broccoli or potatoes to provide some extra filling, ya know, the big guy of the dish. Want to make sure you have enough veggies or it's more like soup, but not too many that there isn't any liquid for the rice!",
      'Rice, duh. Preferably Jasmine.',
      'Tofu (optional) (Follow <a href="https://www.youtube.com/watch?v=BGUBTrKw9Hg">The Easy Vegan curry video</a> tofu instructions)',
    ],
    directions: [
      'Thoroughly (I mean thoroughly), shake the coconut milk cans before opening',
      "Try to time cooking the rice so that it's ready when the curry is (follow instructions on rice)",
      `In a large pot (dutch oven size) over medium-high heat:
        <ol>
          <li>Add 1 can coconut milk and the curry paste; cook until fragrant</li>
          <li>Add rest of the coconut milk; add potatoes</li>
          <li>Once potatoes are just beginning to soften, add the rest of the veggies</li>
          <li>Simmer until veggies are just barely soft, but very much not mush</li>
        </ol>
      `,
    ],
    notes: [
      'Beware when sauteeing paste!! The aromas/fumes are crazy strong and will literally make you cough and your eyes burn just when near it! Do this step before guests arrive.',
    ],
  },
  brazilian_fries: {
    title: 'Brazilian Fries',
    name: 'brazilian_fries',
    description:
      "Best made and eaten semi-buzzed at 1am, these fries will knock your drunk friends' socks off.",
    tags: ['appetizer', 'side', 'drunk-food', 'easy'],
    ingredients: [
      'Yukon Gold (or similar) potatoes',
      'Salt',
      'Pepper',
      'Cayenne',
      'Olive Oil',
      'Mayonnaise',
      'Garlic Powder',
    ],
    directions: [
      'Cut potatoes into wedges',
      'Toss with olive oil, salt, pepper, and cayenne',
      'Place on baking sheet with a skinless-side touching the sheet',
      'Bake at 420&deg; for ~30 min, flip each wedge (as well as possible, depending on amount of alcohol consumption and laziness); cook for another 15-30 min',
      'Mix together mayonnaise, garlic powder, salt, pepper, and a touch of cayenne',
      'Never risk Cafe Beaudelaire being out of fries again',
    ],
    notes: ['Exercise caution when handling a knife while intoxicated'],
  },
  cajun_mac_n_cheese: {
    title: 'Mac & Cheese - Cajun Style',
    courtesy_of: 'Grandma Dody & Grandpa Norm',
    name: 'cajun_mac_n_cheese',
    description: '',
    tags: ['pasta', 'comfort'],
    ingredients: [
      '1 lb Macaroni, cooked & drained',
      '1 cup Grated Cheddar Cheese',
      '1/2 cup Grated Romano <i>or</i> Parmesan Cheese',
      '1/2 cup Onion, chopped',
      '1/2 cup Bell Pepper, chopped',
      '1 tbsp Olive Oil',
      '2 medium eggs',
      '1 cup Dry White Wine',
      '1 tbsp Prepared Mustard',
      'Salt',
      'Cayenne',
    ],
    directions: [
      'Grease 9x12 casserole dish; preheat oven to 350&deg;',
      'In a large bowl, combine macaroni, cheddar cheese, and 1/2 the Romano/Parmesan cheese; set aside',
      'Over medium heat, saute onions and bell pepper in heated olive oil until onions are translucent',
      'In a separate bowl, beat the eggs; add the wine, mustard, salt, and cayenne; mix well',
      'Add egg mixture and sauteed vegetables to macaroni; mix well',
      'Pour into casserole dish; top with remaining Romano/Parmesan cheese',
      'Bake at 350&deg; for 45 minutes',
    ],
    notes: [
      'Add Panko bread crumbs on top for that classic Mac-n-cheese crunch',
    ],
  },
  mexican_breakfast: {
    title: 'Mexican Breakfast',
    courtesy_of: 'Grandma Dody & Grandpa Norm',
    name: 'mexican_breakfast',
    description: '',
    tags: [],
    ingredients: [
      '4 Eggs',
      '8 oz Mushrooms, sliced',
      '2 Onions, sliced',
      '2 Green Bell Peppers, strips',
      '1 can Rotel Tomatos & Chiles',
      '8 oz Shredded Cheddar Cheese',
      'Salt',
      '2 tsp Ground Cumin',
      'Cayenne or Red Pepper Flakes (optional)',
    ],
    directions: [
      'Saute mushrooms, onions, and peppers until soft',
      'Add tomatos and cumin; simmer',
      'Make 4 spaces with a spoon; add 1 egg to each space',
      'Cover and cook ~10 minutes or until eggs are cooked (poached)',
      'Add cheddar cheese over top; cover until melted',
    ],
    notes: ['Serve with fresh tortillas to help soak up left over sauce'],
  },
  wild_rice_risotto: {
    title: 'Wild Rice Risotto',
    courtesy_of: 'Mill City Cooks - Market Chef Jenny Breen',
    name: 'wild_rice_risotto',
    description: 'Wild Rice Risotto w/ Mushrooms & Squash',
    tags: [],
    ingredients: [
      '1 cup Wild Rice (or other local grain like barley or wheat berries)',
      '5 cups Stock or Water, divided',
      '1/4 cup Olive Oil',
      '2 cloves Garlic, minced',
      '2 Large Leeks (or Onions), cleaned well and roughly chopped',
      '1 cup Mushrooms, sliced or diced',
      '1 cup Peeled Butternut, Red Kuru, or similar Squash, diced small',
      '2 tbsp Fresh Thyme (or 1 tsp dried)',
      '2 tbsp Fresh Rosemary (or 1 tsp dried), minced',
      '2 cups Milk (use rice or soy milk for vegan)',
      '1/2 cup White Wine',
      '1 cup Sun Dried Tomatoes, chopped or cut with scissors and soaked in 2 cups hot water',
      '1 cup Burr Oak or Fresiago Cheese from Shepherd Way Farm (skip for vegan)',
    ],
    directions: [
      'Cook rice in 3 cups stock or water until tender (about 30 min); set aside',
      'In a large, deep skillet, heat olive oil over medium heat',
      'Saute garlic, onions/leeks, mushrooms, and squash for about 3 minutes or until nicely caramelized',
      'Add herbs and cooked barley; slowly add 1 1/2 cups of the milk',
      'Stir constantly over medium heat, adding small amounts of wine, stock and milk; keep stirring as it gets creamy',
      'Continue to add liquid as needed for 20-25 minutes; aim for creamy, not mushy',
      'For maximum creaminess, you can continue slow cooking and liquid for up to an hour',
      'Add sun dried tomatoes; combine well',
      'Fold in cheese; add more liquid if necessary',
    ],
    notes: [],
  },
};

export default recipes;
