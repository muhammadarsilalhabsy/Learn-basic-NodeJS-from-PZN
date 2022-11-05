// const { threadId, parentPort } = require('worker_threads');

import { threadId, parentPort } from 'worker_threads';
import util from 'util';
// const util = require('util');

parentPort.on('message', (message) => {
  for (let i = 0; i < message; i++) {
    //
    console.log(util.format('Thread %d mengirim pesan : %d', threadId, i));

    // parent akan menagkap ini
    parentPort.postMessage(i);
  }
  // setelah menggirim pesan harus di close
  parentPort.close();
});
