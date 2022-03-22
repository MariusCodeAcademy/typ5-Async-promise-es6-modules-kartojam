// import is named export
import { sum, multi } from './helper/sum.js';
import { minus } from './helper/minus.js';
// import is default export
import timePrint, { sayHi } from './helper/time.js';

timePrint();
const total = sum(15, 50);

console.log('total ===', total);

const minusResult = minus(400, 187);

console.log('minusResult ===', minusResult);

sayHi();

// helper/print.js failiukas
// isekportuoti funkcija printToh2 kuri paima laika is timePrint(pasieditinti kad ne tik atspausdintu bet ir grazintu)
// ir atspausdina h2 el DOM.
