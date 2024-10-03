const user = {
    name:"harsh",
    price:1234,

    welcomeMessage: function(){
        console.log(`${this.name} welcome to our website`);
        // console.log(this);
        
    }

}

// user.welcomeMessage()
// user.name = "sam"
// user.welcomeMessage()

// console.log(this);   // current context is empty because it is in node enviornment 

// function chai(){
//     let username = "potter"
//     console.log(this.username);  // gives undefined because this will works on the objects only not in the functions
// }

// chai()

// const chai = () => {
//     let username = "potter"
//         console.log(this.username); 
// }
// chai();

// explicit return 


// const addTwo = (num1,num2) =>{
//     // return num1+num2
//     console.log(`the sum of ${num1} and ${num2} is ${num1+num2}`);
// }

// implicit return 

// const addTwo = (num1,num2) => (num1+num2)


const addTwo = (num1,num2) => ({username:"harsh"})      // to return object also we have to cover it with paranthesis , if we have to write it in implicitly then we have to cover it in parenthesis 


console.log(addTwo(2,3));
// addTwo(2,3)
// console.log(typeof addTwo);   // now addTwo is the function type

