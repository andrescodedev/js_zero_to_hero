/* 
    IF CONDITIONAL
*/

let user = {
    name:'andrew',
    age:17,
    gold_subscription:true,
    silver_subscription:true
};

/* 
if(user.gold_subscription === true) {
    console.log(`Welcome sr ${user.name}`);
} */


/* 
    ELSE IF CONDITIONAL
*/
/*let age_allowed = 20;

if(user.gold_subscription === true && user.age > 18) {
    console.log(`Werlcome sr ${user.name}, enjoy your private dance and liquors`);
    
} else if(user.silver_subscription === true && user.age > 18) {
    console.log(`Werlcome sr ${user.name}, enjoy the party and liquors`);
} else {
    console.log(`Sorry sr, maybe another year`);
}*/

//CODE REFACTORING
if(user.age >= 18) {
    if(user.gold_subscription === true) {
        console.log(`Werlcome sr ${user.name}, enjoy your private dance and liquors`);
    } else if(user.silver_subscription === true) {
        console.log(`Werlcome sr ${user.name}, enjoy the party and liquors`);
    } else {
        console.log(`Sorry sr ${user.name}, you need to buy a subscription.`);
    }

} else {
    console.log(`Sorry ${user.name}, you must be legal age.`);
}
