// What is the Date and Time in javaScript

let myDate = new Date();
// console.log(myDate.toDateString()) ;  
// console.log(myDate.toDateString())
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString()) ; 
let myDate1 = new Date('01-11-2004');
// console.log(myDate1.toDateString());

// let newDate = new Date();
// console.log(newDate.getDay().toLocaleString());
// console.log(newDate.getMonth());
// console.log(newDate.getFullYear());


let newDate = new Date();

console.log(
  newDate.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    timeZoneName: 'short'
  })
);

