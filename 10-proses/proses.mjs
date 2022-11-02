import process from 'process';

process.on('exit', (exitCode) => {
  console.info('NodeJS exit with code : ' + exitCode);
});

console.info(process.version);
console.table(process.argv);
console.info(process.report);

// console.table(process.env);

console.info('this massage will show before listener exit');

process.exit(19); // akan masuk ke listener dengan parameter exitCode
