/* 
    OBJECT ANATOMY

    JSON = JAVASCRIPT OBJECT NOTATION

    {
        property1 : value1,
        property2 : value2,
        propertyN : valueN,
        method1   : value1,
        methodN   : valueN
    } 
*/

// Declaration an object
let store = {
    name:'Perros Locos',
    address: {
        district:'Popular',
        street:'Calle 15 14-21'
    },
    uploadPhoto() {console.log('Loading ... Photo upload successfully');},
    createProduct() {console.log('Product created successfully');}
}

console.log(store);
console.log(`The store name is ${store.name}`);
console.log(`The store address is ${store.address.street}`);
store.uploadPhoto();


// Create a new property for object
store.phones = {
    phoneNumber:'3178569636',
    whatsapp:'3154718585'
}

console.log(store);
console.log(store.phones);


//Create a new method for object
store.addPhones = () => {
    console.log('Phones added successfully');
}

console.log(store);
store.addPhones();


// Delete a property and method from object
delete store.phones;
delete store.addPhones;

console.log(store);
