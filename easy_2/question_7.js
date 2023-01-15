let flintstones = {
  Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5
};

let newarr = Object.entries(flintstones)[2];
console.log(newarr);

// Alternate option, this is pretty clunky though
let barney = [];
for (const key in flintstones) {
  if (Object.hasOwn(flintstones, key)) {
    if (flintstones[key] === 2) barney.push(key, flintstones[key]);
  }
}

console.log(barney);