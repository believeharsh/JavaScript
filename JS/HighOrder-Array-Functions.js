// what is the for of loop in js?
// let arr = [1, 2, 3, 4, 5] ; 
// for (const element of arr) {
//    console.log(element) ;    
// }

// what is the map in JS? 
const map = new Map() ; 
map.set("In", "India") ; 
map.set("USA", "United States of America") ; 
map.set("Fr", "France") ; 

// for (const [country , value] of map) { // here we have used the square brakcet because we want and inidividual value otherwise it will return each value as array
//     console.log(country, '-> ', value) ; 
// }


// const myObject = {
//    "game1" :  "NFS", 
//    "game2" : "spiderMan" , 
// }

// for (const [key, value] of myObject) { // for of loops doesn't work with object 
//     console.log(key, "-> " , value) ; 
// }



const myObj = {
    js  : "javaScript", 
    cpp : "c++",
    rb  : "ruby", 
    swift : "swift by apple" 
}
// for (const key in myObj) {
//   console.log(myObj[key]) ; 
// }

const arr = ["hello", "what", "harsh", "are", "saying"] ; 

// for (const key in arr) {
//     console.log(arr[key])
// } 


for ( const key in map) { // we can not use the for in loop with map since maps are not iterable
    console.log(key) ; 
}




// what is the for each loop?
const coding = ["js", "java", "c++", "hello", "ruby", "rust", "solana"] ; 
// coding.forEach((item) => {
//   console.log(item) ; 
// })

// function printname(item) {
//     console.log(item) ; 
// }

// coding.forEach(printname) ; 

coding.forEach((item, index, arr) => {
    console.log(item, index, arr) ; 
})