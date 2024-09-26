const marvel_heros = ["thor" , "iron man" , "captain america"]
const dc_heros = ["flash" , "super man" , "Batman"]

// marvel_heros.push(dc_heros)      // add an array in an array not elements
console.log(marvel_heros);   

// so the solution is -> concat

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// another efficient method is use -> spread 

const allNewHeros = [...marvel_heros , ...dc_heros]
console.log(allNewHeros);

// if there is an array inside an array inside array ....

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Harsh"))
console.log(Array.from("Harsh"))   // create an array
console.log(Array.from({name: "Harsh"})) // interesting it does not create an array because we have to tell that the array willl be of key and value pairs

let score1 = 130
let score2 = 120
let score3 = 110

console.log(Array.of(score1,score2,score3));
 