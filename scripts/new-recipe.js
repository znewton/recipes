const fs = require('fs');

function writeRecipe({ recipeName, recipeTitle, outputDir, template }) {
  const filePath = `${outputDir}/${recipeName}`;
  const formattedTemplate = template
    .replace(/R_TITLE/g, recipeTitle)
    .replace(/R_NAME/g, recipeName);
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(filePath)) fs.mkdirSync(filePath);
    fs.writeFile(`${filePath}/index.html`, formattedTemplate, err => {
      if (err) reject(err);
      else resolve();
    });
  });
}

module.exports = {
  writeRecipe,
};
