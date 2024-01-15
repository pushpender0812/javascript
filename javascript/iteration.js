// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of ${i} is`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`inner loop is ${j} and outer loop ${i}` );
//         console.log(i + '*' + j + '=' + i*j);
        
//     }
    
// }

// let myarray = ["jetha","popat","sidhi","mheta","iyyer","hathi"]

// for (let i = 0; i < myarray.length; i++) {
//     const element = myarray[i];
//     console.log(element);
// }

// for (let index = 0; index < 10; index++) {

//     if (index === 5) {
//         console.log(`Detected 5`);
//         break
//     }
//        console.log(index);
    
// }
// for (let index = 0; index < 10; index++) {

//     if (index === 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//        console.log(index);
    
// }
 

//   let score = 4

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score<= 5);

// const arr = [1,34,34.234,24,245]

// for (const nums of arr) {
//     console.log(nums);
// }

// const greetings = "hello world!"
// for (const greeyt of greetings) {
//     console.log(`Each char is ${greeyt}`);
// }

// const map = new Map()
// map.set('In',"India")
// map.set('USA',"United states of america")
// map.set('fR',"france")

// console.log(map);

// for (const [key,value] of map) {
    // console.log(key ,':-',value);
// }


// const myobject = {
//     "game1" : "Pubg",
//     "game2" : "spiderman"

// }

// for (const key in myobject) {
    // console.log(`${key } is ${myobject[key]}`  );
// }

// const games = ["pubg","spider","cricket","kabbadi","baqsketball"]

// for (const key in games) {
//   console.log(games[key]);
// }

// const ipl = ["RR","Mi","SRH","CSK","KKR","DC","RCB","GT","LSG","PK"]

// ipl.forEach( (value,index,arr) => {

//     console.log(value,index,arr);
// })

// const ipl = [
//     {
//         team : "RR",
//         captain : "sanju"
//     },
//     {
//         team : "MI",
//         captain:"Rohit"
//     },
//     {
//         team : "Csk",
//         captain : "Dhoni"
        
//     }
// ]

// ipl.forEach((value) => {
//    console.log(value.captain);
// })

const mynums = [1,2,3,4,5,6,7,8,9,10,12]

//  let thenum = mynums.filter((num) => {return num>3})
//  const thenum = []

//  mynums.forEach((num) => {
//     if (num>6) {
//         thenum.push(num)
//     }
//  })

// console.log(thenum);

// const newnums = mynums
//                 .map((num) => { return num * 10})
//                 .map((num) =>  num + 12 )
//                 .filter((num) => num > 49)


// console.log(newnums);

// const mynum = [1,2,3]

// const mytotal = mynum.reduce(function (acc,currval) {
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc + currval
// },0)
// console.log(mytotal);

    const mycart = [
        {
            item: "shirt",
            price: 2799
        },
        {
            item: "pent",
            price: 3299
        },
        {
            item: "jeans",
            price: 5443
        },
        {
            item: "mobile",
            price: 45799
        },
    ]

    const mytotals = mycart.reduce((acc,item) => acc + item.price,0 )
    console.log(mytotals);