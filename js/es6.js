// spread Operator    ...
// x258
// let colors = ['red', 'green', 'blue'];
// let numb = [1, 2, 4];

// // const colorsCopy = colors; // fake copy
// // const colorsCopy = colors.slice(); // ok copy
// const colorsCopy = ['orange', ...colors, 'Black', ...numb]; // ok copy
// colorsCopy.push('violet');

// console.log('colors ===', colors);
// console.log('colorsCopy ===', colorsCopy);

// let x = 10;
// let xCopy = x;

// xCopy = 15;

// console.log('x ===', x);

// // OBJECT SPREAD
// let person = {
//   name: 'James',
//   age: 25,
//   town: 'London',
// };

// const personCopy = { ...person };

// // sukurti employee kuris turi peros savybes pliusa keleta savo

// let employee = {
//   ...person,
//   salary: 2000,
//   position: 'Developer',
// };

// console.log('employee ===', employee);

let person = {
  name: 'James',
  age: 25,
  address: {
    city: 'London',
  },
};

const {
  age,
  address: { city },
} = person;
// const age = person.age;
console.log('age ===', age);
console.log('city ===', city);

let colors = ['red', 'green', 'blue'];

const [c1, , c3] = colors;

console.log('c1 ===', c1);
console.log('c3 ===', c3);
