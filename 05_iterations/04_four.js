
// FOR-IN LOOP

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for of loop can not be used with objects , so we use for in loop for objects 

for (const key in myObject) {
    // console.log(key)  // this will give keys
    // console.log(myObject[key])  // this will give values
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]


// IMPORTANT
// in for-of loop when we apply at array it will give values but when for-in loop is applied then it will give index


for (const key in programming) {
    //console.log(key); // this will give index - MAIN DIFF BETWEEN FOR-IN AND FOR-OF

    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }