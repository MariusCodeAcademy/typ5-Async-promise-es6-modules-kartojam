// import is named export
import { sum } from './helper/sum.js';
// import is default export
import timePrint from './helper/time.js';

timePrint();
const total = sum(15, 50);

console.log('total ===', total);

const minusResult = minus(400, 187);

console.log('minusResult ===', minusResult);
