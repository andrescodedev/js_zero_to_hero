/*
    DO WHILE
    This loop will execute the code block once, before checking if the condition is true, 
    then it will repeat the loop as long as the condition is true.

    do {
        //code
        increment variable
    } while(condition)

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
do {
    console.log(client_list[client]);
    client++;
} while(client < client_list.length)

