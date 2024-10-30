/* 
    ARRAYS INTRODUCTION
    
    FIRST WAY
    let fruits = Array('apple','orange'); 
    let integerNumbers = Array(1,2);
    let justNumber = Array(10); with this statement, i'm writing an array with 10 empty items.

    SECOND WAY
    let fruits = ['apple','orange'];
    let integerNumbers = [1,2];
    let justNumber = [1];
    let personalData = ['Andrew',39,true];

*/

let personalData = ['Andrew',39,true];
console.log(personalData);


/* 
    ACCESSING TO ARRAY ELEMENTS

    array[index/position];
*/

console.log(`My name is ${personalData[0]}`); // accessing to an element at postition 0

// length property
console.log(`Number of elements is ${personalData.length}`);// return amount array elements

/* 
    Exist methods that can change the original arrays and
    another methods that can't.

    methods that can   --> mutable methods
    methods that can't --> inmutable methods
*/

//Mutability in arrays
console.log(`Original Array ${personalData}`);
personalData.push('Rooney');
console.log(`Mutable array ${personalData}`);

//Inmutability in arrays
let newPersonalData = personalData.concat(64,false);
console.log(personalData);
console.log(newPersonalData);


//Checking if a variable is an array
console.log(`Checking if a variable is an array: ${Array.isArray(newPersonalData)}`);

// Exercise --> Add all elements of an array
let elementsSummation = 0;
let oddNumbers = [1,3,5,7,9,11,13,15];

for(number of oddNumbers) {
    elementsSummation += number;
}

console.log(`The summation is ${elementsSummation}`);