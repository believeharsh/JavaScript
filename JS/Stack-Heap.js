// 🧠 Stack Memory (Primitive Data)
// What it stores:
// Stores primitive values (like number, string, boolean, null, undefined, symbol, bigint) and function execution contexts.

// Characteristics:

// Fast access.

// Data is stored in a Last-In-First-Out (LIFO) structure.

// Automatically managed by the JavaScript engine.

// When a function is called, a stack frame is created and pushed onto the stack.

Example:

let a = 10;
let b = a;
b = 20;

console.log(a); // 10
// a and b store primitive values, so they are copied in the stack. Changing b does not affect a.

// 🧱 Heap Memory (Reference Data)
// What it stores:
// Stores objects, arrays, and functions (i.e., reference types).

// Characteristics:

// Slower access compared to stack.

// Memory is allocated dynamically.

// Garbage collection is used to clean up unused memory.

// Example:


let obj1 = { name: "Harsh" };
let obj2 = obj1;

obj2.name = "Updated";

console.log(obj1.name); // "Updated"
// obj1 and obj2 reference the same object in the heap. Changing one affects the other.

// Summary Table:

// Feature	                            Stack	                                Heap
// Stores	                Primitive values, call stack	            Objects, arrays, functions
// Memory allocation	    Static / Fixed-size	                        Dynamic / Variable-size
// Access speed	            Very fast	                                Slower
// Managed by	            JavaScript engine (automatically)	        JavaScript engine (with GC)