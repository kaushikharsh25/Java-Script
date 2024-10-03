//  Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log("DB CONNECTED");
// }

// chai()   instead of doing this we can do the immediate execution like 

// named iife
(function chai(){
    console.log("DB CONNECTED");
})();  // ; is imp because we have to tell the compiler to stop the execution then wll the next function will execute

// unnamed iife
( () => (console.log("DB CONNECTED TWO")))();

( (name) => (console.log(`DB CONNECTED TWO ${name}`)))("harsh");


//  () first is to define the scope and second () is used to direct exe. 


// global scope se pollution hota h kaafi baar to uss pollution ko hatane ke liye iife ka use kara