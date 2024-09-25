const score = 300
console.log(score);

const balance = new Number(233)
console.log(balance); // diff from usual because of objects

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // give precision value

const num1 = 1234.123
console.log(num1.toPrecision(4));  // need to study

const hundered = 10000000
// console.log(hundered.toExponential());
console.log(hundered.toLocaleString('en-In'));

// ++++++++++++++++++  Maths ++++++++++++++++++++++

// console.log(Math.abs(-6));
// console.log(Math.round(4.53));
// console.log(Math.ceil(4.85));

console.log(Math.random());  // give between 0 and 1
console.log((Math.random()*10)+1);  // +1 because it dont give 0

// important formula

const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max-min+1)) + min );



