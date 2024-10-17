/* 
    - Methods that iterate over an array
    - Methods that DO NOT modify the original array (Inmutability)

    map()
    forEach()
*/

let pairNumbers = [2,4,6,8];

// map() --> Calls a defined callback function on each element of an array, and returns an array that contains the results.
let potentiationNumbers = pairNumbers.map(element => element ** 2);
console.log(pairNumbers);
console.log(potentiationNumbers);

//forEach() --> Performs the specified action for each element in an array.
let sumOddNumbers = 0;
let undefinedResult = pairNumbers.forEach(element => sumOddNumbers += (element-1));
console.log(pairNumbers);
console.log(undefinedResult);
console.log(sumOddNumbers);