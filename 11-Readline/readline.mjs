import * as readline from 'readline';
import process from 'process';
const getData = readline.createInterface({
  input: process.stdin, // get data (standard input)
  output: process.stdout, // print data (standard output)
});

getData.question('What is your favorite food? ', (answer) => {
  console.log(`Oh, so your favorite food is ${answer}`);
  getData.close();
});
