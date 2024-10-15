/* 
    CALLBACKS
    Pass functions as an arguments 

    function a() {}
    function b(a) {

    }

    b(a);
*/

/*function a() {
    return `Hello world`;
}

function b(function_param) {
    console.log(`Callback ${function_param()}`);
}

b(a);*/


/* 
    RETURN A FUNCTION

    
    function b() {
        function a() {}
        return a;
    }

    function c() {}
    function d() {
        return c;
    }

*/

/*function b() {
    function a() {
        return `Hello world`;
    }

    return a;
}

let c = b();
console.log(`Return a ${c}`);
console.log(`Execute the function ${c()}`);*/


/*
    ASSIGN FUNCTIONS TO VARIABLES - FUNCTION EXPRESSION

    let variable = function() {} 

*/ 

/*let getName = function() {
    return `Andrews`;
}

console.log(`His name is ${getName()}`);
console.log(`His name is ${getName}`);*/


/* 
   THE FUNCTIONS HAS PROPERTIES AND METHODS - EXECUTION CONTEXT

   let obj = {}
   function a(){}}

   a.call(obj)
   
*/


/* 
    NESTED FUNCTIONS - FUNCIONES ANIDADAS

    funtion a() {
        function b() {
            function c() {
            
            }

            c();
        }

        b();
    }

    a();

*/



/* 
    FUNCTIONS INSIDE OBJECTS
    The functions inside objects are called methods

    let obj = {
        property1:value1,
        property2:function functionName() {} --> method
    }

    obj.property2();
*/

/*let product = {
    name:'Js shirt',
    available:function available() {
        console.log(`Not available`);
    }
}

product.available();*/



/* 
    ARROW FUNCTIONS

    let variable = ()=> {}
    let variable = (paramA,paramB) => code
    let variable = paramA => code

    variable();
*/

/*let printFullName = (name,lastName) => {
    console.log(`My full name is ${name} ${lastName}`);
}

let getProfession = () => 'Software Engineering';
let getJob = job => `My job is ${job}`;

printFullName('Andrews','Rooney');
console.log(`My profession is ${getProfession()}`);
console.log(getJob('Software Developer'));
*/



/* 
    LEXICAL BINDING WITH this KEYWORD - VINCULACIÓN LÉXICA CON LA PALABRA CLAVE this

    - In an arrow function inside an object, is not had lexical binding 
*/

let user = {
    name:'Andrews',
    lastName:'Rooney',
    profession:'Software Engineering',
    personalPresentation:function personalPresentation() {
        console.log(`My name is ${this.name} ${this.lastName}`);
    },
    professionalPresentation:() => {
        console.log(`My profession is ${this.profession}`); //Not lexical binding
    }
}

user.personalPresentation();
user.professionalPresentation();

