class Recipe {
  constructor({
    title = "",
    name = "404",
    description = "",
    tags = [],
    ingredients = [],
    directions = [],
    notes = []
  }) {
    this.title = title;
    this.name = name;
    this.description = description;
    this.tags = tags;
    this.ingredients = ingredients;
    this.directions = directions;
    this.notes = notes;
  }

  toSearchMatchString() {
    return [
      this.title,
      this.description,
      this.tags.join(" "),
      this.tags.join(" "),
      this.ingredients.join(" ")
    ]
      .join(" ")
      .toLowerCase();
  }

  toListItemHTML() {
    return `
<a href="/recipes/${this.name}.html">
  <h3 class="recipe-title">${this.title}</h3>
  <p class="recipe-description">${this.description}</p>
  <div class="recipe-tags">
    ${(this.tags || [])
      .map(tag => `<span class="tag">${tag}</span>`)
      .join("\n")}
  </div>
</a>
    `;
  }

  toPageHTML() {
    return `
<section>
  <h2>Ingredients</h2>
  <ul class="ingredients-list">
    ${this.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("\n")}
  </ul>
</section>
<section>
  <h2>Directions</h2>
  <ol class="directions-list">
    ${this.directions.map(direction => `<li>${direction}</li>`).join("\n")}
  </ol>
</section>
<section>
  <h2>Notes</h2>
  <ul class="notes-list">
    ${this.notes.map(note => `<li>${note}</li>`).join("\n")}
  </ul>
</section>
    `;
  }
}

const recipes = {
  guacamole: new Recipe({
    title: "Guacamole",
    name: "guacamole",
    description:
      "A guac recipe refined in San Francisco and perfected by many Youtube videos",
    tags: ["avocado", "appetizer", "dip"],
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
      "Deseed and dice tomato(es); stir in to mixture",
      "Add lemon, salt and other desired seasonings to taste",
      "Serve with chips or on a burrito or something"
    ],
    notes: []
  })
};
