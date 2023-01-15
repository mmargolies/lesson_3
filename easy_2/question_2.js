/*  Write two distinct ways of reversing the array without mutating the
original array. Use reverse for the first solution, and sort for the second.
*/

let numbers = [1, 2, 3, 4, 5];

// two options for using .reverse()
console.log(numbers.flat().reverse());
console.log([...numbers].reverse());

// two options for using .sort()
console.log(numbers.map(ele => ele).sort((num1, num2) => num2 - num1));
console.log(numbers.slice().sort((num1, num2) => num2 - num1));

// bonus q: using forEach
let reverseArr = [];
numbers.forEach(ele => reverseArr.unshift(ele));

console.log(reverseArr);

// check to see if original array has been mutated
console.log(numbers);