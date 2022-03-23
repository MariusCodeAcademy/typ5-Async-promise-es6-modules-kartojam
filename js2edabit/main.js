// https://edabit.com/challenge/5erCDJ8eJDrXkmwTK
// Two makes 10
/* 
Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
*/

// console.log(makesTen(9, 10)); //➞ true

// console.log(makesTen(9, 9)); //➞ false

// console.log(makesTen(1, 9)); // ➞ true

function makesTen(a, b) {
  return a === 10 || b === 10 || a + b === 10;
}

//https://edabit.com/challenge/QWmvQsrSuQRmEN8ne

// arrayValuesTypes([1, 2, 'null', []]);
// //➞ ["number", "number", "string", "object"]

// arrayValuesTypes(['214', true, false, 2, 2.15, [], null]);
// //➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

// arrayValuesTypes([21.1, 'float', 'array', ['I am array'], null, true, 214]);
//➞ ["number", "string", "string", "object", "object", "boolean", "number"]

function arrayValuesTypes(arr) {
  const result = arr.map((el) => typeof el);
  console.log(arr);
  console.log(result);
  return result;
}

// https://edabit.com/challenge/9mKB2XJJ9gYgjms4Z

// https://edabit.com/challenge/JZ7TL5S6Q7CqN6GRS

// countDs('My friend Dylan got distracted in school.d'); //➞ 5

// countDs('Debris was scattered all over the yard.'); // ➞ 3

// countDs('The rodents hibernated in their den.'); // ➞ 3

function countDs(sentence) {
  const result = sentence.toLowerCase().split('d').length - 1;
  console.log('sentence ===', sentence);
  console.log('result ===', result);
  return result;
}

evenOrOdd([0]); // ➞ "even"
evenOrOdd([1]); // ➞ "odd"
evenOrOdd([]); // ➞ "even"
evenOrOdd([0, 1, 5]); // ➞ "even"

function evenOrOdd(arr) {
  // sudeti visus arr sks i viena
  let total = 0;
  arr.forEach((sk) => {
    total += sk;
  });
  // patiktrinti ar gauta reikme lygini ar ne
  // if (total % 2 === 0) {
  //   return 'even';
  // }
  // return 'odd';
  total % 2 === 0 ? console.log('even') : console.log('odd');

  return total % 2 === 0 ? 'even' : 'odd';

  // grazinti "even" arba "odd"
}
