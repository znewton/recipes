class Recipe {
  constructor({
    title = '',
    name = '404',
    courtesy_of = '',
    description = '',
    tags = [],
    ingredients = [],
    directions = [],
    notes = [],
  }) {
    this.title = title;
    this.name = name;
    this.courtesy_of = courtesy_of;
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
      this.tags.join(' '),
      this.tags.join(' '),
      this.ingredients.join(' '),
    ]
      .join(' ')
      .toLowerCase();
  }

  toListItemHTML() {
    return `
<a href="/recipes/${this.name}" class="card hoverable">
  <h3 class="recipe-title">${this.title}</h3>
  <p class="recipe-description">${this.description}</p>
  <div class="recipe-tags">
    ${(this.tags || [])
      .map(tag => `<span class="tag">${tag}</span>`)
      .join('\n')}
  </div>
</a>
    `;
  }

  toPageHTML() {
    const credit = this.courtesy_of
      ? `<p>Courtesy of <strong>${this.courtesy_of}</strong></p>`
      : '';
    return `
${credit}
<section class="card full-width">
  <h2>Ingredients</h2>
  <ul class="ingredients-list">
    ${this.ingredients
      .map(
        (ingredient, i) => `
        <li>
          ${
            ingredient === '<sep>'
              ? '<span class="separator"></span>'
              : `<label>
            <input type="checkbox" />
            <span class="checkmark"></span>
            <span>${ingredient}</span>
          </label>`
          }
        </li>`
      )
      .join('\n')}
  </ul>
</section>
<section class="card full-width">
  <h2>Directions</h2>
  <ol class="directions-list">
    ${this.directions.map(direction => `<li>${direction}</li>`).join('\n')}
  </ol>
</section>
<section class="card full-width">
  <h2>Notes</h2>
  <ul class="notes-list">
    ${this.notes.map(note => `<li>${note}</li>`).join('\n')}
  </ul>
</section>
    `;
  }
}
