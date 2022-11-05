// const { threadId, Worker } = require('worker_threads');
import { threadId, Worker } from 'worker_threads';

const pekerja1 = new Worker('./worker-pekerja.mjs');
const pekerja2 = new Worker('./worker-pekerja.mjs');

pekerja1.on('message', (massage) => {
  console.log(`Threads ${threadId} menerima data dari worker 1 ==> ${massage}`);
});

pekerja2.on('message', (massage) => {
  console.log(`Threads ${threadId} menerima data dari worker 1 ==> ${massage}`);
});

pekerja1.postMessage(10);
pekerja2.postMessage(10);
