/* 
    FILTER AND REDUCE METHODS

    - Iterate over an array
    - That DO NOT modify the original array (Inmutability)

    filter()
    reduce()
*/
let numbersList = [1,2,3,4,5,6,7,8,9,10];

//filter() --> create a new array with elements that achieve given condition by a function
/*let oddNumbersList = numbersList.filter(element => element % 2 !== 0); // odd numbers filter
console.log(numbersList);
console.log(oddNumbersList);*/

//reduce() case 1 --> Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
/*let summationReduce = oddNumbersList.reduce((accumulator,currentValue) => accumulator += currentValue,0);
console.log(oddNumbersList);
console.log(summationReduce);*/

//reduce() case 2
let companiesFrecuency = {};
let companiesList = ['nasa','microsoft','apple','microsoft','google','spacex','nasa','nasa','google'];
let calculateFrecuency = companiesList.reduce((accumulator,element) => {
    accumulator = 0;

    for(company of companiesList) {
        if(element === company) {
            accumulator += 1;
        }
    }

    companiesFrecuency[element] = accumulator;
    
},);

console.log(companiesList);
console.log(companiesFrecuency);

