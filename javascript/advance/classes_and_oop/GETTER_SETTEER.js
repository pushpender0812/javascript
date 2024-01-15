class User{
    constructor(emial,password){
        this.emial = emial
        this.password = password

    }
    get password(){
        return `${this._password}pushpu`
    }
    set password(value){
         this._password = value
    }
}

const pushpu = new User("yadav@yadav.com","jhi")
console.log(pushpu.password);
