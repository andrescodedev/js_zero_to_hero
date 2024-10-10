// CASTING TYPES AND COERCION

//TYPE'S CONVERSION EXAMPLE
let number_value = 2;
let bool_value   = true;
let string_value = 'felipe';

console.log(`boolean value to number value implicit conversion ${number_value + bool_value}`); // implicit conversion 
console.log(`number value to string value implicit conversion ${number_value + string_value}`); // implicit conversion
console.log(`string value to number value implicit conversion ${number_value * string_value}`); // implicit conversion
console.log(`boolean value to string value implicit conversion ${bool_value + string_value}`); // implicit conversion
console.log(`boolean value and string value to number value implicit conversion ${bool_value * string_value}`); // implicit conversion


// EXPLICIT CONVERSIONS
// string to integer number conversion
/*let string_age = '35';
let stringToIntegerNumber = parseInt(string_age);
console.log(`String to integer number conversion ${stringToIntegerNumber}`);
console.log(`Type of  ${typeof stringToIntegerNumber}`);*/

//string to float number conversion
/*et string_pi = '3.14';
let stringToFloatNumber = parseFloat(string_pi);
console.log(`String to float number conversion ${stringToFloatNumber}`);
console.log(`Type of  ${typeof stringToFloatNumber}`);*/