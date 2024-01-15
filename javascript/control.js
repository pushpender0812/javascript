// const score = 300

// if(score>100){
//     const power = "run"
//     console.log(`user power ${power}`);
// }

const userlogedin = true
const debit = true
const loggedingoogle = true
const loggedinfacebook = false

if (userlogedin && debit) {
    
    console.log("YOU CAN ACCESS THE COURSES");
}

if (loggedinfacebook || loggedingoogle) {
    console.log("YOU CAN ACCESS THE COURSES as looged in");
    
}