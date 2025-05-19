const score = 400 ; 
const balance = new Number(100) 

// console.log(balance) ;


// console.log(typeof score)  
// console.log(typeof balance)

balance.toLocaleString() 
// console.log(balance) ; 
// console.log(balance.toString())

const hunderes = 100000 ; 
// console.log(hunderes.toLocaleString('en-IN')) ; 



// ********************* Math Object ********************* ; 
// console.log(Math.abs(-4)) ; 
// console.log(Math.round(4.5)) ; 
// console.log(Math.ceil(4.8)) ; 
// console.log(Math.floor(4.9)) ; 
// console.log(Math.round(4.9)) ; 
// console.log(Math.sqrt(9)) ; 
// console.log(Math.pow(2, 3)) ; 
// console.log(Math.min(2, 3, 4, 5)) ; 
// console.log(Math.max(2, 3, 4, 5)) ; 
// console.log(Math.random()) ; 

console.log(Math.floor(Math.random() * 20)); 

/// important formula 
const min = 10 ; 
const max = 20 ; 
let value = Math.floor(Math.random() * (max - min + 1)) + min 
console.log(value)