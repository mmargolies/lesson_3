/*
Given the following function, refactor it so that it will work w/o using a
do/while loop, as well as handle errors for 0 and negative numbers w/o
raising exceptions/going into infinite loops
*/

function factorsOld(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

function factors(number) {
  if (number <= 0) return 'Please enter a positive integer.';

  let factors = [];

  for (let div = number; div > 0; div -= 1) {
    if (number % div === 0) factors.push(number / div);
  }
  return factors;
}

console.log(factors(0)); // should log message
console.log(factors(-10)); // should log message
console.log(factors(21)); // [ 1, 3, 7, 21 ]
console.log(factors(34)); // [ 1, 2, 17, 34 ]