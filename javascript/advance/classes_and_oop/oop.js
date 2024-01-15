function User(username,password,loginCount){
    this.username = username;
    this.password = password;
    this.loginCount = loginCount;
    this.greetings = function(){
        // console.log(`Welcome ${this.username}`);
    }
    // return this
}
const userone =  new User("pushpu","Yadav@12",12)
const user2 =  new User("ksfh","hdhsuh#232",34)

// console.log(userone);
// console.log(user2);


function createuser(username,score){
   this.username = username;
   this.score = score;
}

createuser.prototype.increment = function(){
   console.log( this.score++);
}

createuser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}

const chai = new createuser("chai",20)
const tea = createuser("tea",30)

chai.printMe()
chai.increment()