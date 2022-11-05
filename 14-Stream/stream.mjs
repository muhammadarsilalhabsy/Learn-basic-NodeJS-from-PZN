import fs from 'fs';

// create a file target.log
const writer = fs.createWriteStream('./14-Stream/target.log');

// write on file target.log
writer.write('Muhammad\n');
writer.write('Arsil\n');
writer.write('Alhabsy\n');
writer.end();

// read file
const reader = fs.createReadStream('./14-Stream/target.log');

// cara 2
// reader.read();

// cara 1
reader.on('data', (data) => {
  console.log(data.toString());
});
