/* 
    SWITCH CONTROL STRUCTURE
*/
let party_subscription = ['Gold','Silver'];

let user = {
    name:'andrew',
    age:25,
    subscription: party_subscription[0]
};

if(user.age >= 18) {

    // switch structure
    switch(user.subscription) {
        case 'Gold':
            console.log(`Werlcome sr ${user.name}, enjoy your private dance and liquors`);
            break;
        case 'Silver':
            console.log(`Werlcome sr ${user.name}, enjoy the party and liquors`);
            break;
        default:
            console.log(`Sorry sr ${user.name}, you need to buy a subscription.`);
    }

} else {
    console.log(`Sorry ${user.name}, you must be legal age.`);
}