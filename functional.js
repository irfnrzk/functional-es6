// spread operator

const person = {
  name: 'Jimmy',
  age: 40,
  hairColor: 'brown',
  eyeColor: 'blue'
};

const careerData = {
  title: 'developer',
  company: 'ABC software'
};

const personWithCareerData = {
  ...person,
  ...careerData
};

console.log(personWithCareerData);

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [
  0,
  ...numbers,
  6
];

console.log(newNumbers);

// map

const doubledNumbers = numbers.map(x => x * 2);
console.log(doubledNumbers);

const words = [
  'hello',
  'goodbye',
  'the',
  'Antartica'
];

const createLengthTest = minLength =>
  word => word.length > minLength;

const longWords = words.filter(createLengthTest(5));
console.log(longWords);

// challenge recreating map function

const map = (arr, func) => {

  // my answer
  const newArr = [];
  arr.forEach(el => {
    return newArr.push(func(el))
  });
  return newArr;

  // schema answer
  // return arr.reduce((acc, x) => [
  //   ...acc,
  //   func(x)
  // ], []);

}

// testing if it works
console.log(map([1, 2, 3], x => x * 2)); // should be [2,4,6]
console.log(map([-5, -6, -7, -8, -9, -10], x => -x)); // should be [5, 6, 7, 8, 9, 10]
console.log(map(['a', 'b', 'c', 'd'], x => x.toUpperCase())); // should be ['A', 'B', 'C', 'D']