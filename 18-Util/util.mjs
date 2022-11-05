import util from 'util';

console.log(util.format('nama saya %s, umur saya %d', 'arsil', 21));

const student = [
  {
    nama: 'Ucup',
    age: 21,
  },
  {
    nama: 'Jamal',
    age: 20,
  },
];

// pake json
console.log(`Students : ${JSON.stringify(student)}`);

// pake util.format
console.log(util.format('Students : %j', student));
