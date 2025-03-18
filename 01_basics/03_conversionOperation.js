let score = "3as3"
// if score is "33abc" then it also convert it in number but it will give special character NaN(Not a Number)

// let score = null ; // it will give 0 as O/P so be carefull for the check conditions 
// let score = undefined ; // it will give NaN 


console.log(typeof score);

let valueInNum = Number(score)

console.log(typeof valueInNum);
console.log(valueInNum); // gives NaN which is not correct ans


let isLogged = 2 ;
// want to convert in boolean

let BooleanIsLogged = Boolean(isLogged)
console.log(BooleanIsLogged);
console.log(typeof BooleanIsLogged);

// 1 => true , 0 => false , "" => false , "Harsh" => true , null => false , undefined => false , NaN => false

let someNumber = 32;
console.log(typeof someNumber);

let StringNumber = String(someNumber)
console.log( StringNumber);
console.log(typeof StringNumber);


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
