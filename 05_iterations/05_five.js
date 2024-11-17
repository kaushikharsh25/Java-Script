
// FOR-EACH LOOP


const coding = ["js", "ruby", "java", "python", "cpp"]

// here the function is called call back function so there is no name of function

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

// mostly we use forEach loop for arrays of objects

const myCoding = [
    {
        languageName1: "javascript",
        languageFileName: "js"
    },
    {
        languageName2: "java",
        languageFileName: "java"
    },
    {
        languageName3: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    // console.log(item.languageName);
    for (const key in item) {
        console.log(key);
    }
} )