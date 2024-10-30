/* 
    FOR IN LOOP

    The JavaScript for in statement loops through the properties of an Object

    for(key in object) {
        //code
    }

*/

let client = {
    name:'Andrew',
    age:25,
    subscription: 'Gold'
}

for(let property in client) {
    console.log(`${property} : ${client[property]}`);
}


// for in over arrays
/*let client_list = [
    {
        name:'Andrew',
        age:25,
        subscription: 'Gold'
    },
    {
        name:'Allyson',
        age:35,
        subscription: 'Silver'
    },
    {
        name:'Paco',
        age:17,
        subscription: 'Bronze'
    }
];

for(let client in client_list) {
    console.log(client_list[client]);
}*/

