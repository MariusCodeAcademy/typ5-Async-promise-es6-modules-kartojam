// import is named export
import { sum, multi } from './helper/sum.js';
import { minus } from './helper/minus.js';
// import is default export
import timePrint, { sayHi } from './helper/time.js';
import { printToh2 } from './helper/print.js';

// printToh2();
timePrint();

setInterval(printToh2, 1000);

const total = sum(15, 50);

console.log('total ===', total);

const minusResult = minus(400, 187);

console.log('minusResult ===', minusResult);

sayHi();

// helper/print.js failiukas
// isekportuoti funkcija printToh2 kuri paima laika is timePrint(pasieditinti kad ne tik atspausdintu bet ir grazintu)
// ir atspausdina h2 el DOM.
// su setInterval atnaujinti laika kas sekunde
