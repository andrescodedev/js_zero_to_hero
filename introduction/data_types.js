// DATA TYPES IN JS

/*PRIMITIVE DATA
    string
    number
    boolean
    null
    undefined
    symbol
    bigint

*/

//string
let user_name = 'andrescodedev';

//number
let age = 20;
const pi = 3.14;

//boolean
let isMarried = false;

//null
let isWorking = null;

//undefined is default value that javascript assigment to variable  without value.
let sex;
let sex1 = undefined;

//symbol is to assigment unique value
let email = Symbol('developer@gmail.com');

//bigint is a big number value
let big_number = 2n;


/*console.log('isWorking ' + isWorking);
console.log('sex ' + sex);
console.log(email);
console.log(big_number);*/


/* COMPLEXES DATA
    object
    array
    function

*/

//object
let customer = {
    userName : 'Carlos',
    lastName : 'Alcaraz',
    email    : 'calcaraz@gmail.com',
    password : '159357',
    age      : 20,
    isMarried: false,
};

//arrays
let fruts = ['pear','apple','pineapple'];
let personal_data = ['Carlos',22,false];

//function
let printData = ()=> console.log(customer);



//console.log(customer);
console.log(fruts);
console.log(personal_data);
printData();
