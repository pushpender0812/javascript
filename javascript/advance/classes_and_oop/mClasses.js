// After ES6

// class User {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc `
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User("chai","djsg@hjgd.cd","123")
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

// behind the seene by using function   

function User(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc `
}

const chai = new User("chai","djsg@hjgd.cd","123")
console.log(chai.encryptPassword());