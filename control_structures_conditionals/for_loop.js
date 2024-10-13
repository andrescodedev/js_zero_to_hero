/* 
    FOR LOOP
    for(variable; condition; increment++){
        //block code
    }

*/


let party_subscription = ['Gold','Silver'];

let user_list = [
    {
        name:'Andrew',
        age:25,
        subscription: party_subscription[1]
    },
    {
        name:'Allyson',
        age:35,
        subscription: party_subscription[0]
    },
    {
        name:'Paco',
        age:17,
        subscription: party_subscription[0]
    }
];


//We rove the user list with the for loop
for(let client = 0; client < user_list.length; client++) {
    console.log(user_list[client]);
    let user = user_list[client];
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

}