const user = {
    name:"harsh",
    price:1234,

    welcomeMessage: function(){
        console.log(`${this.name} welcome to our website`);
        // console.log(this);
        
    }

}

user.welcomeMessage()
user.name = "sam"
user.welcomeMessage()

// console.log(this);   // current context is empty because it is in node enviornment 

// function chai(){
//     let username = "potter"
//     console.log(this.username);  // gives undefined because this will works on the objects only not in the functions
// }

// chai()

const chai = function