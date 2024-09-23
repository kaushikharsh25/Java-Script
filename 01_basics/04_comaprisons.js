// we have to avoid these types of conversions

console.log(null>0);
console.log(null==0);
console.log(null>=0);

// the reason is that the equality check and comparison work differently in js so that's why it gives true at the end

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);

// this will give false

// === strict check 

console.log("2" == 2);  // here it can convert automatically and gives true
console.log("2" === 2);