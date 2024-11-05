let score = "3asd3"
// if score is "33abc" then it also convert it in number but it will give special character NaN(Not a Number)

// let score = null ; // it will give 0 as O/P so be carefull for the check conditions 
// let score = undefined ; // it will give NaN 


console.log(typeof score);

let valueInNum = Number(score)

console.log(typeof valueInNum);
console.log(valueInNum);


let isLogged = 2 ;
// want to convert in boolean

let BooleanIsLogged = Boolean(isLogged)
console.log(BooleanIsLogged);
console.log(typeof BooleanIsLogged);

let someNumber = 32;
console.log(typeof someNumber);

let StringNumber = String(someNumber)
console.log(typeof StringNumber);