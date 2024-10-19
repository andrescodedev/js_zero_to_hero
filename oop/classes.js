/* 
    CLASSES IN JS

    a class is a template by which it's building objects

    class is the keyword
*/

class Store {

    constructor(name, address, phones) {
        this.name = name;
        this.address = address;
        this.phones = phones;
    }

    uploadPhoto() {
        console.log('Loading ... Photo upload successfully');
    }

}

const store = new Store(
    'Perros Locos',
    {district:'Popular',street:'Calle 15 14-21'},
    {phoneNumber:'3178569636', whatsapp:'3154718585'}
);

console.log(store);
console.log(store.phones);
store.uploadPhoto();


