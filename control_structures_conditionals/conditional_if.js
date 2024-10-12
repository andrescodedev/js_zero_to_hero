/* 
    CONDITIONAL IF
*/

let user = {
    name:'andrew',
    age:25,
    private_subscription:true,
    public_subscription:true
};

if(user.private_subscription === true) {
    console.log(`Welcome sr ${user.name}`);
}


/* 
    IF ELSE CONDITIONAL
*/
let age_allowed = 20;
let public_subscription = true;

if(user.private_subscription === true) {
    if(user.age > 18) {
        console.log(`Enjoy your private dance and liquors`);
    }
    
} else if(user.public_subscription) {
    console.log(`Maybe another year`);
}
