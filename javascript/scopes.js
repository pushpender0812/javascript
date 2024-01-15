// let a = 6

// if (true){
//     let a = 300

//     console.log("inner",a);

// }
// console.log(a);

// function one(){
//     const username = " pushpender "

//     function two(){
//         const website = "facebook"
//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }
// one()

// ++++++++ Hoisting +++++++++++++++++++++++++++++++

console.log(addone(4));
function addone(num){
    return num + 1
}

 const addtwo = function(num){
    return num +2
 }
//  here this addtwo cannot come before function and this is hoisting (where to declare and where not)
 console.log(addtwo(3));                      




