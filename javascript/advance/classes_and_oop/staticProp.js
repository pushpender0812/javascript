class User{
    constructor(username ){
        this.username = username
    }   
    logMe(){
        console.log(`Username : ${this.username}`);
    }
    // to stop the excesss we use satic keyword nefore the function
     createId(){
        return `123`
    }
}

const pushpu = new User("pushpu")
console.log(pushpu.logMe())

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","dcgyy@dhg.cin")
iphone.logMe()
