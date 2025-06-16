// is javaScript is the object oriented programming or not??
// prototypes are the backbone of OOP in JS. Even classes are built on top of the prototype system. So, understanding prototypes deeply gives you a real edge in mastering JavaScript's OOP capabilities.

// ## objects 
// - collection of propeties and methods 
// - toLowerCase, and even promise are also the objects under the hood 

// ## Parts of Object Oriented Programming 
// - Constructor        
// - Prototypes 
// - Classes 
// - Instances ( new , this) 

// ## 4 pillars 
// Abstraction 
// Encapsulation 
// Inheritence
// Polymorphism 

const user = {
    username : "harshDahiya",
    counntry : "India, MP", 
    getuserDetails : function() {
        // console.log(`username is ${this.username}`);
        // console.log(this);
        

        
    }
}

// console.log(user.username) ; 
// console.log(user.getuserDetails()) ; 
// console.log(this) ; 

function User(username, logincount, company) {
    this.username = username ;
    this.logincount = logincount ; 
    this.company = company ; 
    return this ;  
}

const userone = new User("Harsh", 1, "flipkart")
const userTwo = new User("RajAgrawal", 12, "AP Moller Mearsk")
console.log(userone) ; 
console.log(userTwo) ; 