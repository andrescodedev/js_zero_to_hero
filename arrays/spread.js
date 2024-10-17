/* 
    SPREAD OPERATOR
    ... --> spread operator

    1. Copy an array
    2. Combine arrays
    3. Create array with new add elements
    4. Pass elements to a function
*/

// Copy an array
let originalArray = [2,4,6,8,10];
let copyOriginalArray = [...originalArray];

console.log(`original array ` + originalArray);
console.log(`Copy original array ` + copyOriginalArray);

// Combine arrays
let oddNumbers = [1,3,5,7,9];
let combinedArray = [...originalArray, ...oddNumbers];

console.log(`Odd numbers array `+ oddNumbers);
console.log(`Combined arrays `+ combinedArray);
console.log(Array.isArray(combinedArray));

// Create array with new add elements
let newElements = [...originalArray, 12,14,16,18,20];

console.log(`original array `+ originalArray);
console.log(`New array with new add elements `+ newElements);


//Pass elements to a function
let prices = [20,250,550];

function sumPrices(price1,price2,price3) {
    console.log(`the sum of prices is $${price1+price2+price3} dollars`);
}

sumPrices(...prices);



