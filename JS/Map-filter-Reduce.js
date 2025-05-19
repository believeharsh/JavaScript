// what is the map method in javascript ?
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// The map() method does not execute the function for empty elements.
// The map() method returns a new array, and the original array will not be changed.
// The map() method is a higher-order function that takes a callback function as an argument and applies it to each element of the array.
// The map() method is a non-mutating method, meaning it does not change the original array.
// The map() method is a built-in method of the Array prototype.
// The map() method is a synchronous method, meaning it does not return a promise.
// The map() method is a static method, meaning it is called on the Array constructor, not on an instance of an array.
// The map() method is a generic method, meaning it can be used with any type of array.
// The map() method is a pure function, meaning it does not have side effects.
// The map() method is a functional programming method, meaning it is based on the principles of functional programming.

const numbers = [1, 2, 3, 4, 5]; 
const newNums = numbers.filter((num) => {
return num > 3
} ) ; 
console.log(newNums)
console.log(numbers) ; 


// what is the reduce method in javascript ?
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reduce() method executes the reducer function once for each element present in the array, excluding empty elements.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method is a higher-order function that takes a callback function as an argument and applies it to each element of the array.
// The reduce() method is a non-mutating method, meaning it does not change the original array.
// The reduce() method is a built-in method of the Array prototype.
// The reduce() method is a synchronous method, meaning it does not return a promise.
// The reduce() method is a static method, meaning it is called on the Array constructor, not on an instance of an array.
// The reduce() method is a generic method, meaning it can be used with any type of array.
// The reduce() method is a pure function, meaning it does not have side effects.
// The reduce() method is a functional programming method, meaning it is based on the principles of functional programming.

const mytotal = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // 0 is the initial value of the accumulator 
console.log(mytotal); // 15

const mytotal2 = numbers.reduce((acc, currval) => acc+currval, 0) ;
console.log(mytotal2) ;  