const Buffer = require('buffer');

const buffer = Buffer.from('Muhammad Arsil Alhbasy');

// will consvert to
console.info(buffer);

console.info(buffer.toString());

// reverse
buffer.reverse();

console.info(buffer.toString());
