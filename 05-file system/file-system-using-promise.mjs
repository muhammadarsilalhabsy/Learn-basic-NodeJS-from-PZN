import fs from "fs/promises";

const read = await fs.readFile("file-system-using-promise.mjs");
console.info(read.toString());

await fs.writeFile("promise.txt", "add several line to promise .txt");
