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

// const double = x => x * 2;
// const subtractOne = x => x - 1;
// const triple = x => x * 3;
// const add5 = x => x + 5;

// const myNumber = 42;

// const doubled = double(myNumber);
// const minusOne = subtractOne(doubled);
// // ...

// const functionsArray = [
//   double,
//   subtractOne,
//   triple,
//   add5,
//   Math.sqrt
// ];

// var number = 42;

// functionsArray.forEach(func => number = func(number));
// console.log(number);

// // Passing functions as arguments

// const add = (x, y) => x + y;
// const subtract = (x, y) => x - y;

// const combine2and3 = func =>
//   func(2, 3);

// combine2and3(add); // 2 + 3
// combine2and3((x, y) => x + y)
// combine2and3(subtract); // 2 - 3

// combine2and3(Math.max) // -> 3

// // returning functions

// const createPrinter = () => () => console.log('Hello');

// // const double = x => x * 2;
// // const triple = x => x * 3;
// // const quadruple = x => x * 4;

// const createMultiplier = y = x => x * y;

// const double = createMultiplier(2);
// const triple = createMultiplier(3);
// const quadruple = createMultiplier(4);

// double(3);

// closure

const createPrinter = () => {
  const myFavoriteNumber = 42;

  return () =>
    console.log(`My favorite number is ${myFavoriteNumber}`);
}

const printer = createPrinter();
printer()

// implement private var

const Person = ({ name, age, job }) => {
  var _name = name;
  var _age = age;
  var _job = job;

  return {
    getName: () => _name,
    getAge: () => _age,
    getJob: () => _job,

    setJob: newJob => _job = newJob
  };
}

const me = Person({ name: 'irfan', age: '31', job: 'developer' });
console.log(me.getJob());
me.setJob('senior developer');
console.log(me.getJob());

// higher order functions

const divide = (x, y) => {
  if (y === 0) {
    console.log('Error: dividing by zero');
    return null;
  }

  return x / y;
} // --> having a function do more than one job is a sign of refactor

const secondArgumentIsntZero = func =>
  (...args) => {
    if (args[1] === 0) {
      console.log('Error: dividing by zero');
      return null;
    }

    console.log(...args)
    console.log([...args])
    console.log(func)
    console.log(130, func(...args))
    return func(...args);
  }

const divideNew = (x, y) => x / y; // --> function now does on thing
const divideSafe = secondArgumentIsntZero(divideNew); // --> another function that does only one thing
console.log(divideSafe(7, 1));
