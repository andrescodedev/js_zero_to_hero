/* 
    CONSTRUCTURE FUNCTION

    It allow to create jsons(objects) through a function
*/

// Constructure Function
function Store(name, address, uploadPhoto) {
    this.name = name;
    this.address = address;
    this.uploadPhoto = uploadPhoto;
}

// Create an object
const store = new Store(
    'Perros Locos',
    {district:'Popular',street:'Calle 15 14-21'},
    ()=>{console.log('Loading ... Photo upload successfully')}
);

const store1 = new Store(
    'Big Hamburguer',
    {district:'La julia',street:'Calle 1 14-21'},
    ()=>{console.log('Loading ... Photo upload successfully')}
);

console.log(store);
console.log(store.name);
store.uploadPhoto();

console.log(store1);
console.log(store1.name);
store1.uploadPhoto();

