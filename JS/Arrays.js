// let myArr = [1, 2, 3, 4, 5, 6] ; 
// console.log(myArr.unshift(2)) ;
// myArr.shift(2) ;  
// console.log(myArr) ; 

// let myArr2 = [0, 1, 2, 3, 4, 5] ; 
// let newARR = myArr2.splice(1, 3) ; // splice modifies the original array and return the remove elements in which the last index will be included

// console.log(newARR) ; 
// console.log(myArr2) ; 


// slice 

// let newARR1 = myArr2.slice(1, 3) ;
 // slice method return the removed element from array in which the last given index will not be added. it doesn't change the original array
// console.log(newARR1) ;
// console.log(myArr2) ; 


/// javaScript arrays function part 2 
const marvel_heros = ["thor", "Ironman", "spiderMan"] ; 
const dc_heros = ["doremon", "sinchen", "Hathori"] ; 

// marvel_heros.push(dc_heros) ; 
// push will take care the dc_heros array as one element, and this entire array will be pushed inside the marvel_heros, which of course we don't want 
// [ 'thor', 'Ironman', 'spiderMan', [ 'doremon', 'sinchen', 'Hathori' ] ]

// We use the concat method to merge two arrays 
// let newArr = marvel_heros.concat(dc_heros) ; 
// console.log(newArr) ; 
// console.log(marvel_heros) ; 

// spread operator - expand or unpack the arrays 
// res operator -   collect and  pack element into the array 


const all_new_heros = [...dc_heros, ...marvel_heros] ; // here we are using the spread opeartor for expand and unpack the element of an given arrays 
// console.log(all_new_heros) ; 


// console.log(Array.from("Harsh Dahiya")) ;
 // this will give each chaar of an string as array element including the space as well ; 

console.log(Array.from({name : "HarshDahiya"})) ; 



