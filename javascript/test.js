// const accountId = 12085;
// let accountEmail = "pyadav96800@gmail.com";
// var accountPassword = "123";
// accoutCity = "Alwar";

// // accountId = 43436;
// accountEmail = "ygfdf@fh.com";
// accountPassword = "754677";
// accoutCity = "ahir bhagola"

// console.table([accountId,accountEmail,accountPassword,accoutCity]);
// console.log(typeof "pushpender");

// let someNumber = 33 


// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// const gameName = new String('fgyfg')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());

// const balance = new Number(360)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(4));

// const othernumber = 25.3222

// console.log(othernumber.toPrecision(2));

// console.log(Math.round(45.45));
// console.log(Math.ceil(765.325));

// console.log((Math.random()*10) + 1);
// const max = 30
// const min = 10
// console.log(Math.floor(Math.random() * (max - min +1)) + min);

// let myDate = new Date()
// console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date("2024-08-12")
// console.log(myCreatedDate.toDateString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// const obj1 = {1 :"a", 2 : "b"    }
// const obj2 = {3: "c",4: "d"}

// // const obj3 = Object.assign({},obj1,obj2)

// const obj3 = {...obj1,...obj2}
// // console.log(obj3);

// const course = {
//     coursname : "js hindi",
//     price : "999",
//     courseinstructor : "Pushpender"

// }

// const {courseinstructor : inst} = course

// // console.log(inst);

// const navbar = ({pushpender}) => {

// }

// navbar(company = "pushpender")


// function myname(){
//     console.log("P");
//     console.log("u ");
//     console.log("s");
//     console.log("h");
//     console.log("P");
//     console.log("e");
//     console.log("n");
//     console.log("d");
//     console.log("r");

// }
// myname()

// function addtwonumbers(a,b) {
//     // const a = 3;
//     // const b = 8;
//     // const c = a + b;
//     console.log(a + b);

// }


// function addtwonumbers(a,b) {
//     // let result = a +b
//     // console.log("kh");

//     return a + b

// }
// const result =   addtwonumbers(45,5)

// console.log("REsult:" , result);


// function loginusermessage(username = "yadav"){
//     if(!username){
//         console.log("Please enter a username properly");
//         return
//     }
//     return `${username} just logged into the account`
   
// }

// console.log(loginusermessage("pushpu"));

function calculateCartPrice(val1,val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(100,200,34,3532,244445));

// const user = {
//     username: "pushpender ",
//     price: "2000"
// }

// function handleobject(anyobject){
//     console.log(`the username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleobject({
//     username: "pushpu yadav",
//     price: "999"
// })

const myarray  = [100,344,896,422]

function returnsecondvalue(getarey){
    return getarey[2]
}

// console.log(returnsecondvalue(myarray));
console.log(returnsecondvalue([123,343,42,133]));