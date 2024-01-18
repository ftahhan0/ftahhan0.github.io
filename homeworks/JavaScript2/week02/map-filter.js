'use strict';

function doubleOddNumbers(numbers) {
 return numbers
    .filter(num => {
      return num % 2 !== 0;
    })
    .map(num => {
      return num * 2;
    });
}

const myNumbers = [1, 2, 3, 4];

console.log(doubleOddNumbers(myNumbers));

module.exports = {
  myNumbers,
  doubleOddNumbers,
}; 