// const myArr = []
// %DebugPrint(myArr)

const arrTwo = [1,2,3,4,5]
// PACKED_SMI_ELEMNTS

arrTwo.push(3.0)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push(8)
// PACKED_ELEMENTS

arrTwo[10] = 11
// HOLY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo[9]);
console.log(arrTwo.length);


// BOUND CHECK
// HasOwnProperty(arrTWO,9)
// HasOwnProperty(arrTWO.Prototype,10)
// HasOwnProperty(Object.Prototype,10)

// holes are very expensive in js

const arrThree = [1,2,3,4,5]
console.log(arrThree[2]);

// SMI > DOUBLE > PACKED
// Holly_SMI >  H_DOUBLE > H_PACKED

const arrFour = new Array(3)

// just 3 holes.HOLEY_SMI_ELEMENTS
arrFour[0] = '1'  //HOLY ELEMENTS
arrFour[1] = '2'  //HOLY ELEMENTS
arrFour[2] = '3'  //HOLY ELEMENTS

const arrFive = []
// SMI(Most optimized to not keep empty holes)
arrFive.push(2) // PACKED ELEMENTS
arrFive.push(3) // PACKED ELEMENTS
arrFive.push(5) // PACKED ELEMENTS