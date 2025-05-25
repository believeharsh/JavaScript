// what is the immediately invoked function expression in javaScript ??
(function chai() { // named IIFE 
    // named IIFE
    console.log(`DB CONNECTED`);
})();

(() => {        // unamed IIFE 
    console.log("hello there, second DB is connected");
})(); 

((name) => {
    console.log(`hello there ${name}`) ; 
}) ('HarshDahiya') ;