const path = require("path");

const file = "/home/m19y/terserah/index.html";

console.info(path.dirname(file)); // will return "/home/m19y/terserah/"
console.info(path.basename(file)); // index.html
console.info(path.extname(file)); // .html
