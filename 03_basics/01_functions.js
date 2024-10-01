function func(){
    console.log("hello world")
}

// func // this is an reference
func()  // this is an execution

function add(num1,num2){
    // console.log(num1+num2);
    return num1+num2 
}
const ans = add(3,4)
console.log(ans);


// in genereal undefinedand empty string "" is considered as a false value 


function loginusermessage(username = "sam"){   // default value

    if( username===undefined /*!undefined*/){
        console.log("please enter a username");
        return;
    }

    return `${username} just logged in`;
}

// console.log(loginusermessage("harsh"));
console.log(loginusermessage());     // if we don't pass the value then ans will be undefined


// rest operator -> ...

function calculatecartprice(val1,val2 , ...num){
    return num
}

console.log(calculatecartprice(200,300,400,500));    // gives an array

const user = {
    username:"harsh",
    price:1234
}
const user1 = {
    name:"kaushik",
    id:1234
}
function handleobject(anyobj){
    console.log(`username is ${anyobj.username} and the price is ${anyobj.naam}`);
}

// handleobject(user)
handleobject({
    username:"harsh",
    naam:"kaushik"
})

const mynewarray = [1,2,3,4,5]

function returnSecondValue(getarray){
    return getarray[1]
}
// console.log(returnSecondValue(mynewarray));
console.log(returnSecondValue([1,3,5,7,9]));
