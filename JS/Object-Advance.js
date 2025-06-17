const pi = Math.PI;
// console.log(pi) ; 

;
// console.log(Object.getOwnPropertyDescriptor(Math, "PI") );
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// Object.defineProperty(Math, 'PI', {
//     writable: false,
//     enumerable: true,
// }) 



const chai = {
    name: "chaiwala",
    masala : "dhaniya pudina special chai", 
    venue : "indian chai, bus stand umaria", 
    orderChai: function () {
        console.log("chai nahi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true,
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (let [key, value] of Object.entries(chai)) {
//     if (typeof value !== 'function') {
//         console.log(key, value);
//     }

// }


// Object.entries(chai).forEach(([key, value]) => {
//   console.log(key, value);
// });

// Object.keys(chai).forEach(key => {
//   console.log(key, chai[key]);
// });

Object.values(chai).forEach(value => {
  console.log(value);
});

