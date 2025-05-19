// what is the conversion in js?
// Conversion in JavaScript refers to the process of changing a value from one type to another.
// JavaScript is a dynamically typed language, which means that variables can hold values of any type and can change types at runtime.

// There are two main types of conversion in JavaScript:    

// 1. Implicit Conversion (Type Coercion): This occurs when JavaScript automatically converts a value from one type to another.

// For example, when adding a number and a string, JavaScript converts the number to a string:
let num = 5;
let str = "10"; 
let result = num + str; // result is "510" (string)

// 2. Explicit Conversion: This occurs when you manually convert a value from one type to another using built-in functions. 

// For example, you can convert a string to a number using the Number() function:
let strNum = "20";  
let num2 = Number(strNum); // num2 is 20 (number)

// You can also convert a number to a string using the String() function:
let num3 = 30;
let strNum2 = String(num3); // strNum2 is "30" (string)

// There are also other functions for conversion, such as parseInt() and parseFloat() for converting strings to integers or floating-point numbers, respectively. 

// Example of parseInt and parseFloat:
let strInt = "100px";   
let intNum = parseInt(strInt); // intNum is 100 (number)

let strFloat = "10.5px";    
let floatNum = parseFloat(strFloat); // floatNum is 10.5 (number)

// In summary, conversion in JavaScript is the process of changing a value from one type to another, either implicitly or explicitly, using various built-in functions.

// Implicit conversion is done automatically by JavaScript, while explicit conversion is done manually by the programmer using functions like Number(), String(), parseInt(), and parseFloat().


let isLoggedIN = 1 ; 
let boolean = Boolean(isLoggedIN) ; 
// console.log(boolean) ; 


let someNumber = 33 ; 
let stringNumber = String(someNumber) ; 
console.log(stringNumber) ; // "33" (string)
console.log(typeof stringNumber) ; // "string"