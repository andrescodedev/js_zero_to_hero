/* 
    find() and findIndex()

    - Methods that iterate over an array
    - Do Not modify the original array (inmutability)
*/

// find() --> Returns the value of the first element in the array that achieve with the condition and undefined if neither element achieve condition.
let numberList = [5,10,15,20];
let findNumber = numberList.find(number => number > 9);

//findIndex() --> Returns the index of the first element in the array that achieve condition and -1 if neither element achieve condition.
let indexNumber = numberList.findIndex(element => element > 9);

console.log(numberList);
console.log(findNumber);
console.log(indexNumber);

