// arrays functions
const myArray = [1, 2, 3, 4]
// map function --[2,3,4,5]
console.log(myArray.map((element) => element + 1))
// Promise
const myPromise = new Promise((resolve, reject) => {
    //if the promise is sucessful resolve function will be called
    if (false) { setTimeout(() => { resolve('Function has runned Sucessfully') }, 1000) }
    else { reject('Function has failed') }
    //if promise throws error reject function will be called
    //promise will be in pending state until the resolve and reject has been called.
})

//if the resolve is called then to fetch response
myPromise
    .then(resolvedvalue => console.log(resolvedvalue))
    .catch(rejectedvalue => console.log(rejectedvalue));