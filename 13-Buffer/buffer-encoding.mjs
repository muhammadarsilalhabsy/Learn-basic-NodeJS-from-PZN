import Buffer from 'Buffer';

let buffer = Buffer.from('Muhammad Arsil Alhabsy', 'utf-8');

// this will return a char array
console.log(buffer);

// this will convert a char array to a string
console.log(buffer.toString());

// convert a char array to base64
console.log(buffer.toString('base64'));

// base64 to utf-8
buffer = Buffer.from('TXVoYW1tYWQgQXJzaWwgQWxoYWJzeQ==', 'base64');
console.log(buffer.toString('utf-8'));
