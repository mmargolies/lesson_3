/*
Ben was tasked to write a simple JavaScript function to determine whether an
input string is an IP address using 4 dot-separated numbers, e.g., 10.4.5.11.
He is not familiar with regular expressions.

Alyssa reviewed Ben's code and said, "It's a good start, but you missed a few
things. You're not returning a false condition, and you're not handling the
case when the input string has more or less than 4 components, e.g., 4.5.5 or 1.
2.3.4.5: both those values should be invalid."
*/

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) return false;s

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (isAnIpNumber(word)) continue;

    return false;
  }

  return true;
}

console.log(isDotSeparatedIpAddress('4.5.5')); // false
console.log(isDotSeparatedIpAddress('1.2.3.4.5')); // false
console.log(isDotSeparatedIpAddress('10.4.5.11')); // true