import fs from 'fs';

const reader = fs.createReadStream('./05-file system/promise.txt');

reader.on('data', (data) => {
  console.log(data.toString());
});
