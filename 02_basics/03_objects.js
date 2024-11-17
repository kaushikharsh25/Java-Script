// object creation through constructor

// Object.create

// object creation through literals

// lets create an symbol and use it in object 


const mysymb = Symbol("key1")


const jsUser = {
    // mysymb :"this will act as a string not as a symbol you can print the type of also",
    [mysymb] : "now its data type will be symbol",
    name: "Harsh",
    "full name ":"harsh kaushik",  // this is the new method to create a key with space
    age:17,
    email:"harsh@gmail.com",
    location:"google",
    isloggedin:false,
    lastlogindays:["monday,sunday"]  // array inside object
}


console.log(jsUser.email);
console.log(jsUser["email"]);  // this is the new method to access the key with space
console.log(jsUser["full name "]);
console.log(jsUser[mysymb]);  // the symbol key is not accessible by the dot notation



jsUser.name = "kaushik";
// Object.freeze(jsUser)  // this will freeze the object and we can not change the value of the object
jsUser["full name "] = "Harry potter";
// console.log(jsUser);



jsUser.greeting = function(){
    console.log("hello js user")
}
console.log(jsUser);   // now the greeting function is added to the object

// console.log(jsUser.greeting);   // --> imp 
console.log(jsUser.greeting());

jsUser.greetingTwo = ()=>{
    console.log(`hello js user, ${this["full name "]}`)  // this is used to access the object properties 
}

console.log(jsUser.greetingTwo());

jsUser.add = (x,y)=>{console.log(x+y)};
console.log(jsUser.add(2,3));
