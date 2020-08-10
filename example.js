// function myFunction(arg1, arg2) {
//   // function body
// }

// const myOtherFunction = function (arg1, arg2) {
//   // function body
// }

// const add = (x, y) => x + y;

// const double = (number) => number * 2;

// const sayHello = () => console.log('Hello');

// const getPersonData = () => ({
//   name: 'John Doe',
//   age: 34,
//   job: 'programmer'
// });


// Function as data

const double = x => x * 2;
const subtractOne = x => x - 1;
const triple = x => x * 3;
const add5 = x => x + 5;

const myNumber = 42;

const doubled = double(myNumber);
const minusOne = subtractOne(doubled);
// ...

const functionsArray = [
  double,
  subtractOne,
  triple,
  add5,
  Math.sqrt
];

var number = 42;

functionsArray.forEach(func => number = func(number));
console.log(number);

// Passing functions as arguments

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

const combine2and3 = func =>
  func(2, 3);

combine2and3(add); // 2 + 3
combine2and3((x, y) => x + y)
combine2and3(subtract); // 2 - 3

combine2and3(Math.max) // -> 3

