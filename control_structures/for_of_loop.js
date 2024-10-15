/* 
    FOR OF LOOP

    The JavaScript for of statement loops through the values of an iterable object.

    It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more

    for(variable of iterable) {
        //code
    }
*/
let party_subscription = ['Gold','Silver'];
let client_list = [
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

for(client of client_list) {
    if(client.age >= 18) {

        // switch structure
        switch(client.subscription) {
            case 'Gold':
                console.log(`Werlcome sr ${client.name}, enjoy your private dance and liquors`);
                break;
            case 'Silver':
                console.log(`Werlcome sr ${client.name}, enjoy the party and liquors`);
                break;
            default:
                console.log(`Sorry sr ${client.name}, you need to buy a subscription.`);
        }
    
    } else {
        console.log(`Sorry ${client.name}, you must be legal age.`);
    }
}

