import fs from 'fs';
import zlib from 'zlib';

// baca file package.json
const read = fs.readFileSync('./package.json');

// compres menggunakan zlib
const result = zlib.gzipSync(read);

console.log(result.toString());

fs.writeFileSync('./19-Zlib/zlib-read-compres.txt', result);
