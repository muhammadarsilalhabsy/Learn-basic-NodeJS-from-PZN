import fs from 'fs';
import zlib from 'zlib';

const read = fs.readFileSync('./19-Zlib/zlib-read-compress.txt');

console.log('Before Compress\n');
console.log(read.toString());

console.log('\nAfter Compress\n');
const result = zlib.gunzipSync(read);
console.log(result.toString());

fs.writeFileSync('./19-Zlib/zlib-read-decompress.txt', result);
