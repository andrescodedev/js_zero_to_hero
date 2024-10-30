/* 
    BASIC MODIFICATION OF AN ARRAY

    push()
    pop()

*/

let oddNumbers = [1,3,5,7];
console.log(oddNumbers);
console.log(oddNumbers.length);

//push() Appends new elements to the end of an array, and returns the new length of the array
let newArrayLength = oddNumbers.push(9);
console.log(`New oddNumbers array ${oddNumbers}`);
console.log(`New length oddNumbers array ${newArrayLength}`);


/* 
    pop() 
    Removes the last element from an array and returns it. 
    If the array is empty, undefined is returned and the array is not modified.
*/
let elementRemoved = oddNumbers.pop();
console.log(`Element removed with pop(): ${elementRemoved}`);
console.log(`Array oddNumber: ${oddNumbers}`);

