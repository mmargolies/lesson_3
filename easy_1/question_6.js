let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

let additionalAges = { Marilyn: 22, Spot: 237 };

/* for (let prop in additionalAges) {
  ages[prop] = additionalAges[prop];
} */

// Using .assign() is a more straight forward and will only
// look at OWN properties

Object.assign(ages, additionalAges);

console.log(ages);