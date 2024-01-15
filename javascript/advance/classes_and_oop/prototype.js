// let myName = "Pushpu"
// let myChannel = "codes"

// console.log(myName.trueLength);

let anotherusername = "chaiaurcode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherusername.trueLength()
"pushpu ".trueLength()
"go there ".trueLength()