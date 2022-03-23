const nr = [1, 2, 3, 4];

const totalSum = nr.reduce((total, sk, i, arr) => {
  console.log(`ciklas: ${i} total: ${total}, sk: ${sk}`);
  return total + sk;
}, 0);

console.log('totalSum ===', totalSum);

const sumT = nr.reduce((total, sk) => total + sk, 0);

const avgNr = nr.reduce((total, sk) => total + sk / nr.length, 0);
console.log('avgNr ===', avgNr);
