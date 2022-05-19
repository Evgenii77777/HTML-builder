const fs = require("fs");
const path = require("path");
const pathStyles = path.join(__dirname, "styles");
const pathBundle = path.join(__dirname, "project-dist", "bundle.css");

fs.unlink(pathBundle, () => {
  fs.open(pathBundle, "w", (err) => {
    if (err) throw err;
    console.log("File created");
  });
});

fs.readdir(pathStyles, (err, files) => {
  if (err) throw err;
  for (const file of files) {
    const extname = path.extname(file);
    if (extname !== ".css") return;
    const pathToFile = path.join(__dirname, "styles", file);
    fs.readFile(pathToFile, "utf8", function (error, fileContent) {
      if (error) throw error;
      fs.appendFile(pathBundle, fileContent, (err) => {
        if (err) throw err;
      });
    });
  }
});
