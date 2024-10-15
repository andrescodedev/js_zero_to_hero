/* INCREMENT AND DECREMENT OPERATORS

    ++ increment
    -- decrement
*/

let increment_operator = 1;
let decrement_operator = 10;

console.log(`Increment by 1: ${increment_operator} -> ${++increment_operator}`);
console.log(`Decrement by 1: ${decrement_operator} -> ${--decrement_operator}`);



/*
    ASSIGNMENT OPERATORS
    
    = 	    x = y 	    x = y
    += 	    x += y 	    x = x + y
    -=   	x -= y  	x = x - y
    *=  	x *= y 	    x = x * y
    /= 	    x /= y 	    x = x / y
    %= 	    x %= y 	    x = x % y
    **= 	x **= y 	x = x ** y
*/

let price = 20;
let discount = 5;

price -= discount;
console.log(`Price with discount is ${price}`);
 

/* 
    COMPARISON OPERATORS
    == 	equal value to (at the value level)
    === equal value and equal type (at the value and data type level)
    != 	not equal value (at the value level)
    !== not equal value or not equal type (at the value and data type level)
    > 	greater than (at the value level)
    < 	less than (at the value level)
    >= 	greater than or equal to (at the value level)
    <= 	less than or equal to (at the value level)
    ? 	ternary operator

*/

let string_age = '45';
let number_age = 45;

console.log(`${string_age} is equal to ${number_age} (at the value level): ${string_age == number_age}`);//true
console.log(`${string_age} is equal to ${number_age} (at the value and data type level): ${string_age === number_age}`);//false

console.log(`${string_age} is different to ${number_age} (at the value level): ${string_age != number_age}`);//false
console.log(`${string_age} is different to ${number_age} (at the value and data type level): ${string_age !== number_age}`);//true

console.log(`${string_age} is greater than ${number_age}: ${string_age > number_age}`);//false
console.log(`${string_age} is greater or equal than ${number_age}: ${string_age >= number_age}`);//true

console.log(`${string_age} is less than ${number_age}: ${string_age < number_age}`);//false
console.log(`${string_age} is less or equal than ${number_age}: ${string_age <= number_age}`);//true

console.log(`Ternary operator: ${(string_age <= number_age)? 'True':'False'}`);


/* 
    LOGICAL OPERATORS
    && 	and 	(x < 10 && y > 1) is true 	
    || 	or 	    (x == 5 || y == 5) is false 	
    ! 	not 	!(x == y) is true
*/

let condition_a = 5>3; //true
let condition_b = 10<2; //false

console.log(`Logical operator 'and': ${(condition_a && condition_b)}`); //false
console.log(`Logical operator 'or': ${(condition_a || condition_b)}`); //true
console.log(`Logical operator 'not': ${!(condition_a || condition_b)}`); //false