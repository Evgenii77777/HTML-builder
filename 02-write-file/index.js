const fs = require("fs");
const { stdin, stdout } = require("process");
const readline = require("readline");
const path = require("path");
const name = path.join(__dirname, "text.txt");

const text = fs.createWriteStream(name);
text.write("");
const read = readline.createInterface({ input: stdin, output: stdout });
stdout.write("Enter your text\n");

process.on("exit", () => {
  read.close();
  stdout.write("Good bye\n");
});

read.on("line", (a) =>
  a === "exit" ? process.exit() : fStream.write(a + "\n")
);
