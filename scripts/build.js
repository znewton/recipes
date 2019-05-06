const fs = require('fs');
const { writeRecipe } = require('./new-recipe');
const { rootDir, buildDir, srcPath, recipesPath } = require('./paths');

async function build() {
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir);
  }
  // Get Recipe template
  const templatePath = `${rootDir}/src/recipe.html`;
  const templateStream = fs.createReadStream(templatePath, 'utf8');
  let templateContents;
  try {
    templateContents = await new Promise((resolve, reject) => {
      let data = '';
      templateStream
        .on('data', chunk => {
          data += chunk;
        })
        .on('end', () => {
          resolve(data);
        });
      templateStream.on('error', err => {
        reject(err);
      });
    });
  } catch (e) {
    throw new Error(e);
  }

  const filePromises = [];

  // Write Recipe files
  if (!fs.existsSync(recipesPath)) {
    fs.mkdirSync(recipesPath);
  }
  const recipes = require(`${srcPath}/recipes`);
  Object.entries(recipes).forEach(([recipeName, recipe]) => {
    filePromises.push(
      writeRecipe({
        recipeName,
        recipeTitle: recipe.title,
        outputDir: recipesPath,
        template: templateContents,
      })
    );
  });

  // Copy other files
  const srcFilesToCopy = [
    'index.html',
    'index.css',
    'recipe.css',
    'recipeList.css',
    'favicon.ico',
    'manifest.json',
    'Recipe.js',
    'recipes.js',
  ];
  srcFilesToCopy.forEach(filename => {
    filePromises.push(
      new Promise((resolve, reject) => {
        fs.copyFile(
          `${srcPath}/${filename}`,
          `${buildDir}/${filename}`,
          err => {
            if (err) reject(err);
            else resolve();
          }
        );
      })
    );
  });

  await Promise.all(filePromises);
}

build();

module.exports = build;
