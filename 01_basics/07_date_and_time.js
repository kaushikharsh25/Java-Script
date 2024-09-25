// Date

let myDate = new Date();
console.log(myDate);   // not good

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

// create our date
// let newDate = new Date(2024,8,26)
// let newDate = new Date(2024,8,26,9,18)
let newDate = new Date("09-26-2024")

console.log(newDate.toLocaleString());
console.log(newDate.getMinutes());


let myTimeStamp = Date.now()  // gives in ms

// do comparisons in ms 
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));

let date = new Date()
console.log(date.toString());
console.log(date.getMonth() + 1);

date.toLocaleString('default',{
    month:"long"
})