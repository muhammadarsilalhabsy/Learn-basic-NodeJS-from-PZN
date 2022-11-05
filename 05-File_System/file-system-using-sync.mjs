import fs from "fs";

const read = fs.readFileSync("try-create-file.txt")
console.info(read.toString())

fs.writeFileSync("try-create-file.txt", "this file create by me :)")