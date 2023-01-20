// Starting with the given string below, return a new string that swaps
// the case of all the letters

let munstersDescription = "The Munsters are creepy and spooky.";

function swapCase(string) {
  let swapped = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx] === string[idx].toLowerCase()) {
      swapped += string[idx].toUpperCase();
    } else {
      swapped += string[idx].toLowerCase();
    }
  }

  return swapped;
}

console.log(swapCase(munstersDescription));
// should log: tHE mUNSTERS ARE CREEPY AND SPOOKY.