const fs = require("fs");
const path = require("path");
const name = path.join(__dirname, "secret-folder");

fs.readdir(name, { withFileTypes: true }, (_, files) => {
  files.forEach((el) => {
    if (el.isFile()) {
      fs.stat(path.join(name, el.name), (_, stats) => {
        const info = path.parse(el.name);
        console.log(info.name + " - " + info.ext.slice(1) + " - " + stats.size);
      });
    }
  });
});
