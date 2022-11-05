import { Console } from 'console';
import fs from 'fs';

const file = fs.createWriteStream('./20-Console/application.log');

const cLog = new Console({
  stdout: file,
  stderr: file,
});

cLog.info('Hai');
cLog.error('Error blok!');

const human = {
  name: 'Arsil',
  age: 21,
  hobby: ['ngoding', 'guitar'],
};

cLog.table(human);
