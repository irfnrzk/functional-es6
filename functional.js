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
console.log(doubledNumbers)