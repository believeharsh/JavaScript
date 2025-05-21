// object literals 
const mysum = Symbol();
const myObj = {
    name: "HarshDahiya",
    // mysum : mysum , 
    [mysum]: "MySymbol1",
    age: 18,
    location: "MP",
    email: "onlybelieveharsh@gmail.com",
    isLoggedIN: false,
    lastLoginDays: [
        "Monday", "Saturday"
    ],

    "full Name": "Bontinue limited",

}

// console.log(myObj.name) ; 
// console.log(myObj["name"]) ; 

// console.log(myObj["full Name"]) ; 
// console.log(myObj.mysum) ; 
// console.log(myObj[mysum]) ; 


myObj.greetings = function () {
    console.log("Hello JS User");
}

// myObj.greetings ; 
// console.log(myObj.greetings()) ; 

myObj.greetingsTwo = function () {
    console.log(`Hello JS User , ${this.name}`);
}
//  console.log(myObj.greetingsTwo()) ;


const obj1 = { 1: "a", 2: "b", 3: "c" }
const obj2 = { 4: "a", 5: "b", 6: "c" };
const obj3 = { obj1, obj2 };

const obj4 = Object.assign(obj1, obj2);
console.log(obj4);

console.log(Object.keys(obj1));
console.log(Object.keys(obj2));

console.log(myObj.hasOwnProperty("isLoggedIN")); 