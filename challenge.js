// challenge: convert arrays

const electionVotes = [
  'Harry', 'Rick', 'Ben', 'Ben', 'Harry', 'Ashley',
  'Connor', 'Rick', 'Ashley', 'Rick', 'Albert', 'Ben',
  'Michael', 'Rick', 'Albert', 'Karen', 'Harry',
  'Karen', 'Donna', 'Ashley', 'Albert', 'Harry',
  'Dane', 'Dane', 'Rick', 'Donna', 'Mortimer',
];

const tallyVotes = votes => {
  // Your code here
  const candidates = new Set(votes);
  const ArrCandidates = [...candidates];
  let output = [];

  ArrCandidates.forEach(x => {

    let count = 0;
    votes.forEach(y => {
      if (x == y) {
        count++;
      }
    })
    output.push({ candidate: x, count: count })
  });

  return output;

  // schema answer
  return votes.reduce((acc, name) => ({
    ...acc,
    [name]: acc[name] ? acc[name] + 1 : 1
  }), {});

};

console.log(tallyVotes(electionVotes));

/* Expected Output (something like this):
  {
      Harry: <some number>
      Donna: <some number>
      Rick: <some number>
      ...
  }
*/

// challenge: anagrams

import words from 'an-array-of-english-words';

const findAnagrams = (word, allWords) => {
  const letters = word.split('');

  console.log(letters)
  allWords.reduce((acc, x) => ({

  }), [])

  // Your code here
}

console.log(findAnagrams('cinema', words));

/*
    Expected output: ['iceman', 'anemic']
*/