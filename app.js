// OS module

const os = require("os");
const user = os.userInfo();

console.log("user :", user);

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log("currentOs :", currentOS);

// Path module

const path = require("path");

const filePath = path.join("/content", "text.js");
console.log("filePath", filePath);

const baseName = path.basename(filePath);
console.log("baseName :", baseName);

const absolutePath = path.resolve(__dirname, "content", "text.js");
console.log("absolutePath :", absolutePath);
