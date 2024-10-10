// ARITHMETIC OPERATORS WITH JS

// Science Numbers are also of number type
let science_number = 5e3;
//console.log(typeof science_number);

// Infinity and NaN are also of numer type
const infinity_number = Infinity;
const not_number = NaN;
//console.log(typeof infinity_number,typeof not_number);


// BASIC ARITHMETIC OPERATIONS

/* 
    addition
    subtraction
    multiplication
    division
    module
    potentiation
*/

/*let addition       = 4 + 5;
let subtraction    = 10 - 3.5;
let multiplication = 5 * 5.5;
let division       = 16 / 4;
let module_oper    = 15 % 8;
let potentiation   = 2 ** 3;
console.log(`Addition: ${addition}\nSubtraction: ${subtraction}\nMultiplication: ${multiplication}\n
Division: ${division}\nModule: ${module_oper}\nPotentiation: ${potentiation}`);*/


// PRESITION PROBLEMS
let problem_presition = 0.1 + 0.2;
//console.log(`Presition Problem ${problem_presition}`);
//console.log(`Solution to presition problem ${problem_presition.toFixed(1)}`) //solution to presition problem



//ADVANCED OPERATIONS WITH THE MATH LIBRARY
let square_root = Math.sqrt(25);
let absolute_value = Math.abs(-25);
let random_value = Math.random();
let random_value_from_zero = (max)=> Math.floor(Math.random() * max);
let random_value_range = (min,max)=> Math.random() * (max-min) + min;
let integer_random_value_range = (min,max)=> Math.floor(Math.random() * (max-min) + min);
let integer_random_value_range_max_included = (min,max)=> Math.floor(Math.random() * (max-min+1) + min);


console.log(`Square Root ${square_root}`);
console.log(`Absolute Value ${absolute_value}`);
console.log(`Random Value between 0 and 1 ${random_value}`); // expected: values between 0 and 1
console.log(`Random Value between 0 and max value excluded ${random_value_from_zero(5)}`); // Expected: values between 0 and max excluded
console.log(`Random Value between min value and max value excluded ${random_value_range(1,4)}`); // Expected: values betwee min and max excluded
console.log(`Integer Random Value between min value and max value excluded ${integer_random_value_range(5,10)}`); // Expected: integer values between min and max excluded
console.log(`Integer Random Value between min value and max value included ${integer_random_value_range_max_included(20,30)}`); // Expected: integer values between min and max included



