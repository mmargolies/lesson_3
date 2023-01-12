// determine if a given string ends with '!'

// Implementing .endsWith(), kind of
function isExclamatory(string) {
  return '!' === string[string.length - 1];
}

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

console.log(isExclamatory(str1));
console.log(isExclamatory(str2));

// simply using the .endsWith() method

console.log(str1.endsWith('!'));
console.log(str2.endsWith('!'));