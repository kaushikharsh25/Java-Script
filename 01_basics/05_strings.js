const name = "harsh"
const repoCount = 2 

// console.log("hello i am "+ name + " my repo count is " + repoCount+ " ");  // old method 

//new is to use backticks

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Harsh-Ka-Game")

// string is an non primitive datatype , so it is stored in key value pairs

console.table(gameName);
// console.log(gameName[2]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

const substring = gameName.substring(0,4)
console.table(substring);

const substring_2 = gameName.slice(-8,4)
console.table(substring_2);


const newStringOne = "   harsh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/harsh%20kaushik"

console.log(url.replace('%20', '-'))

console.log(url.includes('kauhik'))

// make array on the basis of the char you give it can be - , = ,  , etc 
console.log(gameName.split('-'));