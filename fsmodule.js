// fs sync module
const { readFile, readFileSync, writeFileSync, writeFile } = require("fs");
const file = readFileSync("./content/demo1.txt", "utf8");
console.log(file);

writeFileSync("./content/demo2.txt", "Hello World");

// fs async module

readFile("./content/demo1.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  writeFile(
    "./content/demo3.txt",
    `Here is the result : ${first}`,
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("result :", result);
    }
  );
});
