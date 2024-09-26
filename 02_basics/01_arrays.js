let arr = [1,2,3,4,5,4]
// console.log(arr);

let arr2 = new Array(1,2,3,4,5,4)
// console.log(arr2[2]);

arr.push(45);
// console.log(arr);

arr2.push(45)
console.log(arr2);

arr.unshift(9)   // add at first
arr.shift()

console.log(arr.includes(3));
console.log(arr.indexOf(45));

let newArrayInString = arr.join();  // convert it in string
console.log(typeof newArrayInString);

// slice and splice
 
console.log("A " , arr);

let mynw1 = arr.slice(0,3)
console.log("B " , arr);
console.log(mynw1);

// splice also changes the array and gives the last index also

let mynw2 = arr.splice(0,3)
console.log("C " , arr);
console.log(mynw2);

