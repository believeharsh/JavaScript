// 🧵 What is a String in JavaScript?
// A string is a sequence of characters used to represent text.

// Strings in JavaScript are primitive data types and immutable.

let name = "Harsh";
// ⚠️ Super Important Things to Always Remember About Strings
// 1. ✅ Strings are Immutable
// Once a string is created, you can’t change it. Any operation that seems to modify a string actually returns a new one.


let str = "hello";
str[0] = "H";    // ❌ Won't change the string
console.log(str); // "hello"

let newStr = str.toUpperCase();
console.log(newStr); // "HELLO"
// 🔑 Always remember: string methods return new strings — they don’t modify the original.

// 2. 🪄 Strings Can Be Created with Quotes or Backticks
let single = 'hello'
let double = "world";
let template = `Hi, ${name}`;

// 🔑 Use backticks (`) for template literals, which let you embed variables and write multi-line strings.

// 3. 📏 Commonly Used String Methods
// length → returns string length

// toUpperCase() / toLowerCase() → changes case

// trim() → removes whitespace

// slice(start, end) → extracts part of string

// includes(substring) → checks if substring exists

// indexOf(substring) → gets position

// replace(old, new) → replaces part of string

// split(separator) → splits into array

// charAt(index) / str[index] → gets character


let str = " Hello World ";
console.log(str.trim().toUpperCase()); // "HELLO WORLD"
// 4. 🧠 Strings Are Compared by Value, Not Reference

let a = "hello";
let b = "hello";
console.log(a === b); // true
// 🔑 Even though strings are primitives, they’re compared by value, not memory reference.

// 5. 📚 String vs String Object
let str1 = "hello";             // primitive
let str2 = new String("hello"); // object

console.log(typeof str1); // "string"
console.log(typeof str2); // "object"

// 🔥 Always use primitive strings (with quotes), avoid new String() — it can lead to bugs in comparison.

// 🧠 Pro Tips
// Use template literals (`) for clean and dynamic strings.

// Avoid modifying strings inside loops — build them using arrays and join if performance matters.

// Learn regex (regular expressions) — powerful for string pattern matching.