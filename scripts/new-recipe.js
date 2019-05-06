const fs = require('fs');

function writeRecipe({ recipeName, recipeTitle, outputDir, template }) {
  const filePath = `${outputDir}/${recipeName}.html`;
  const formattedTemplate = template
    .replace(/R_TITLE/, recipeTitle)
    .replace(/R_NAME/, recipeName);
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, formattedTemplate, err => {
      if (err) reject(err);
      else resolve();
    });
  });
}

module.exports = {
  writeRecipe,
};
