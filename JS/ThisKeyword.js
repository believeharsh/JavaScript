// What is the this keyword in javaSCript??
const user = {
    username : "harshdahiya", 
    price : 999, 

    welcome : function() {
        console.log(`${this.username}, welcome to website`) 
        console.log(this)
    }
}

// user.welcome() ; 
// console.log(this) ; 


// const myfunc = function() {
//     let username = "hitesh" ; 
//     console.log(this.username) ; // this will give undefined because this keyword is not working in function
// }
// myfunc() ; 


const myfuncArrow = () => {
    let username = "harshDahiya" ; 
    console.log(this.usename) ; 
}
myfuncArrow() ; 