function User(email,paassword){
    this._email = email;
    this._paassword = paassword  

    Object.defineProperty(this,'email',{
        get: function(){
               return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    
    Object.defineProperty(this,'password',{
        get: function(){
               return this.paassword.toUpperCase()
        },
        set: function(value){
            this._paassword = value
        }
    })
}

const tea = new User ("vgf@gmail.com","654")
console.log(tea.email);