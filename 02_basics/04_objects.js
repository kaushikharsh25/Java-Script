const tinderuser = new Object()  // it gives an singleton objects
console.log(tinderuser);

tinderuser.id = 1234
tinderuser.name = "harsh"
tinderuser.isloggedin = false
// console.log(tinderuser);

const regularuser = {
    email : "some@gmail", // nested objects
    fullname: {
        username:{
            firstname:"harsh",
            secondname:"kaushik"
        }
    }
}

console.log(regularuser.fullname.username.firstname);



// merging of 2 or more objects

const object1 = {1:"a",2:"b",}
const object2 = {3:"c",4:"d",}
const object3 = {5:"c",6:"d",}
// const obj3 = {object1,object2}
// console.log(obj3);

// .assign(target,source)  // it is used to merge the objects
// const obj3 = Object.assign(object1,object2)  // object1 is the target and object 2 is the source , we assign source in the target 
// const obj3 = Object.assign({},object1,object2)   // now the target is {} and others are source , the ans for both cases will be same but it is preferable
// console.log(obj3);

const obj3 = {...object1,...object2,...object3}  // spread operator
console.log(obj3);

// when the data come from the database it come as form of array of objects
// these methods ussed when working with DB

const user = [{user:"harsh" , id:1234} ,{user:"harsh" , id:1234},{user:"harsh" , id:1234},{user:"harsh" , id:1234} ]

console.log(user[1].id);

// Objects methods is used to get the keys and values of the objects in the form of array of objects and also to check the key is present in the object or not
console.log(Object.keys(tinderuser));  // gives an array of keys
console.log(Object.values(tinderuser));  // gives an array of keys
console.log(Object.values(tinderuser));  // make an array of key value pair

console.log(tinderuser.hasOwnProperty('isloggedin'));



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// destructuring of objects --> imp concept in react 

const course = {
    course:"js in hindi",
    price:"232",
    couseinstructor:"harsh"
}
// course.couseinstructor

// const {couseinstructor} = course  // it is used to get the value of the key from the object and store it in the variable
const {couseinstructor:inst} = course  // 

console.log(inst);
