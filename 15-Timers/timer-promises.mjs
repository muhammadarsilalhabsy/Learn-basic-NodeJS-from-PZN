import timers from 'node:timers/promises';

// timeout
// await timers.setTimeout(5000);

// console.log('this will run after delay 5 second');

// set interval

for await (const startTime of timers.setInterval(5000, 'blok ckwakss')) {
  console.log('now is => ' + new Date() + '\t' + startTime);
}
