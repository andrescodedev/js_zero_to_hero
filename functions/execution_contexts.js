/* 
    EXECUTION CONTEXTS - CONTEXTOS DE EJECUCIÓN

    SCOPE CHAIN - CADENA DE ALCANCE
*/

//Global context
let fullName = 'Andrews Rooney';
let frontTech = 'Flutter'

//Local context 1
function workLocalContext() {
    let professional_profile = 'Software Developer';
    
    // local context 2
    function backLocalContext() {
        let backTech = 'Express'
        console.log(`My name is ${fullName}, my profession is ${professional_profile} and my back tech is ${backTech}`);
    }

    //Local context 3
    function frontLocalContext() {
        let frontTech = 'Angular'
        console.log(`My name is ${fullName}, my profession is ${professional_profile} and my front tech is ${frontTech}`);
    }

    console.log(`My name is ${fullName}, My profession is ${professional_profile} and i use ${frontTech}`);
    backLocalContext();
    frontLocalContext();

}

console.log(`My name is ${fullName}, my front tech is ${frontTech}`);
workLocalContext();