// object creation through constructor

// Object.create

// object creation through literals

// lets create an symbol and use it in object 


const mysymb = Symbol("key1")


const jsUser = {
    // mysymb :"this will act as a string not as a symbol you can print the type of also",
    [mysymb] : "now its data type will be symbol",
    name: "Harsh",
    "full name ":"harsh kaushik",
    age:17,
    email:"harsh@gmail.com",
    location:"google",
    isloggedin:false,
    lastlogindays:["monday,sunday"]
}


console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name "]);
console.log(jsUser[mysymb]);



jsUser.name = "kaushik";
// Object.freeze(jsUser)
jsUser["full name "] = "Harry potter";
// console.log(jsUser);



jsUser.greeting = function(){
    console.log("hello js user")
}

// console.log(jsUser.greeting);   // --> imp
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this["full name "]}`)
}

console.log(jsUser.greetingTwo());
