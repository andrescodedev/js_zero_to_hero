/* 
    WHILE LOOP
    The while loop loops through a block of code as long as a specified condition is true.

    while(condition) {
        //code
        increment variable
    }

*/

let client_list = [
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

let client = 0;
while(client < client_list.length) {
    console.log(client_list[client]);
    client++;
}