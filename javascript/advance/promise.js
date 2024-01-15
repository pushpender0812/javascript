const promiseone = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async is completed");
    resolve()
  }, 1000);
  
});

promiseone.then(function () {
  console.log("promise consumed");
});

new Promise(function(resolve,reject){
    setTimeout(function(){
    console.log("Async trask 2");
    resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
  resolve({username : "Pushpu",email:"pyadav@gmail.com"})
    },1000)
})

promisethree.then(function(user){
  console.log(user);
})



const  promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
            if (!error) {
                resolve({username:"yadav",password:"123"})
                
            } else {
                reject('Error:something went wrong  ')
            }
    },1000)
})

promisefour
.then((user) => {
   console.log(user);
   return user.username
})
.then((username) => {
  console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log('the promise is either resolved or rejected'))




const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username : "ram roshni",password : "54321"})
            
        } else {
            reject('Error: Not good')
        }

}, 1000)
})

async function consumepromisefive(){
    try {
        const response = await promisefive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumepromisefive()




// async function getallusers(){
//  try {
//     const response = await  fetch('https://jsonplaceholder.typicode.com/users')
// //   console.log(response);
//     const data =  await response.json()
//     console.log(data);
//  } catch (error) {
//     console.log("error");  
//  }
// }

// getallusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
   console.log(data);
})
.catch((error) => console.log(error))

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json()

// }).then((data) =>{
//     console.log(data);
// }).catch((error) => console.log(error))

