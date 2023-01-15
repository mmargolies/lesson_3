let advice = "Few things in life are as important as house training your pet " +
             "dinosaur.";

console.log(advice.split('house ')[0]);
// Alternatively:
console.log(advice.slice(0, advice.indexOf('house')));

// Expected return value:
// => 'Few things in life are as important as '