class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Usename is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addcourses(){
        console.log(`A new couse was added by ${this.username}`);
    }
}

const chai =  new Teacher("chai","vhag@teacher.com","1234")
chai.addcourses()

const masalachai = new User("masalachai")
// masalachai.addcourses()

masalachai.logMe()

chai.addcourses()