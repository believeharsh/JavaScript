// What is the Promise in javaScript??
// The Promise object represent the eventual completion or failure of an asynchronous opertion and it's resulting value. 


// A promise is in one of these states
// 1. pending : initial State, neither fulfilled or rejected
// 2. fulfilled : meaning that the operation has been fulfilled 
// 3. rejected : meaning that the operation failded ; 

// fetch("https://somthing.com").then().catch().finally() ; 

const promiseOne = new Promise((resolve, reject) => {
    // Do an async task 
    // db calls 
    // cryptography 
    // network call 
    // browser api like setTimeout 

    // setTimeout(() => {
    //     console.log("async task is completed");
    //     resolve();
    // }, 1000);

})
// promiseOne.then(() => {
//     console.log("Promise consumed");
// })


// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({ username: "harsh", password: "123" })
//         } else {
//             reject('ERROR', "somthing went wrong");
//         }
//     }, 1000);
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// })
//     .then((username) => {
//         console.log(username);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("finally the promise is either or rejected");
//     })


const promiseFive = new Promise((resolve, reject) => {
    console.log("This is the promise number five") ; 
    setTimeout(() => {
        let error = false ; 
        if (!error) {
            resolve({ username: "harsh", password: "123" })
        } else {
            reject('ERROR', "somthing went wrong");
        }
    }, 1000);
})
promiseFive.then((user) => {
    console.log(user);
    return user.username;
})
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("finally the promise is either or rejected");
    })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error); 
//     }
// }

// consumePromiseFive(); 




/// f
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json() ; 
})
.then((data) =>{
    console.log(data) ; 
}).catch((error) => {
    console.log(error) ; 
})
