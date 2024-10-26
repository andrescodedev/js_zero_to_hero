/* 
    CHALLENGE OOP

    1. EL ESTABLECIMIENTO DEBE PODER REGISTRARSE.
    2. EL ESTABLECIMIENTO DEBE PODER INICIAR SESIÓN CON SU EMAIL Y CONTRASEÑA.
    3. SI EL EMAIL Y CONTRASEÑA SON CORRECTOS, EL SISTEMA DEBE MOSTRAR UN MENSAJE
       DE BIENVENIDA Y EL TIMELINE DEL ESTABLECIMIENTO.
    4. SI EL EMAIL Y CONTRASEÑA SON INCORRECTOS, EL SISTEMA DEBE MOSTRAR UN MENSAJE
       DE ERROR Y NO MOSTRAR NINGUNA TIMELINE.
*/

/* 
    FLUJO DE EJECUCIÓN
    1.  EL SISTEMA PREGUNTA SI DESEA REALIZAR UN REGISTRO O INICIAR SESION.
    
    2A.  EN LA PANTALLA DE REGISTRO, EL SISTEMA SOLICITARÁ EL NOMBRE DE LA TIENDA,
         EL TIPO DE TIENDA, UN CORREO ELECTRONICO Y CONTRASEÑA.
    3A1. SI LA TIENDA NO SE ENCUENTRA REGISTRADA, SE CREARÁ EL REGISTRO Y SE LE SOLICITARÁN
         OTROS DATOS COMO DIRECCIÓN, TELEFONO Y WHATSAPP.
            - SI LA TIENDA SE ENCUENTRA REGISTRADA, EL SISTEMA MUESTRA UN MENSAJE DE ERROR
              Y ENVIARÁ AL USUARIO A LA PANTALLA DE BIENVENIDA.
    3A2. EL SISTEMA EVALUA EL TIPO DE TIENDA. SI ES DE ROPA, SOLICITARÁ EL TIPO DE ROPA
         QUE VENDE Y LAS TALLAS QUE MANEJA. SI ES DE MASCOTAS, SOLICITARÁ LOS SERVICIOS
         QUE TIENE A DISPOSICIÓN.
    4A.  EL SISTEMA MUESTRA UN MENSAJE DE BIENVENIDA Y EL TIMELINE DE LA TIENDA.
    
    2B. EN LA PANTALLA DE INICIO DE SESIÓN, EL SISTEMA SOLICITARÁ EL CORREO ELECTRONICO
        Y LA CONTRASEÑA DEL ESTABLECIMIENTO
        - SI EL CORREO ELECTRONICO O CONTRASEÑA SON INCORRECTOS, EL SISTEMA MOSTRARÁ
          UN MENSAJE DE ERROR.
        - SI EL CORREO ELECTRONICO O CONTRASEÑA SON CORRECTOS, EL SISTEMA MOSTRARÁ
          UN MENSAJE DE BIENVENIDA Y EL TIMELINE DE LA TIENDA.
    
*/

const prompt = require("prompt-sync")({sigint: true});

class StoreAccount {
    #storeName;
    #storeEmail;
    #storePassword;

    constructor(storeName, storeEmail, storePassword) {
        this.#storeName = storeName;
        this.#storeEmail = storeEmail;
        this.#storePassword = storePassword;
    }

    //GETTERS
    get storeName() {
        return this.#storeName;
    }

    get storeEmail() {
        return this.#storeEmail;
    }

    get storePassword() {
        return this.#storePassword;
    }


    //SETTERS
    set storeName(newStoreName) {
        //Condition
        this.#storeName = newStoreName;
    }

    set storeEmail(newStoreEmail) {
        //Condition
        this.#storeEmail = newStoreEmail;
    }

    set storePassword(newStorePassword) {
        //Condition
        this.#storePassword = newStorePassword;
    }
}

class SignUp extends StoreAccount {
    #storeType;

    constructor(storeName, storeEmail, storePassword, storeType) {
        super(storeName, storeEmail, storePassword);
        this.#storeType = storeType;
    }

    get storeType() {
        return this.#storeType;
    }

    set storeType(newStoreType) {
        //condition
        this.#storeType = newStoreType;
    }
}

class SignIn extends StoreAccount {

    constructor(storeName, storeEmail, storePassword, storeType) {
        super(storeName, storeEmail, storePassword);
    }

}

class StoreType {

    #id;
    #type;
    
    constructor(type) {
       // this.#id = generateIds();
        this.#type = type;
    }

    get id() {
        return this.#id;
    }

    get type() {
        return this.#type;
    }

    set type(updateType) {
        //condition
        this.#type = updateType;
    }

}

class Store {

    #id;
    #name;
    #email;
    #password;
    #phones;
    #addresses;
    #isVirtual;
    #storeType;


    constructor(id, name, email, password, phones, addresses, isVirtual, storeType) {
        //this.#id = generateIds();        
        this.#name = name;
        this.#email = email;
        this.#password = password;
        this.#phones = phones;
        this.#addresses = addresses;
        this.#isVirtual = isVirtual;
        this.storeType = storeType;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get email() {
        return this.#email;
    }

    get password() {
        return this.#password;
    }

    get phones() {
        return this.#phones;
    }

    get addresses() {
        return this.#addresses;
    }

    get isVirtual() {
        return this.#isVirtual;
    }

    get storeType() {
        return this.#storeType;
    }
    
    set name(newName) {
        //condition
        this.#name = newName;
    }

    set email(newEmail) {
        //condition and validation
        this.#email = newEmail;
    }

    set password(newPassword) {
        //condition and validation
        this.#password = newPassword;
    }

    set phones(newPhones) {
        //condition
        this.#phones = newPhones;
    }

    set addresses(newAddresses) {
        this.#addresses = newAddresses;
    }

    set isVirtual(newVirtualState) {
        this.#isVirtual = newVirtualState;
    }

    set storeType(newStoreType) {
        this.#storeType = newStoreType;
    }

    storePresentation() {
        return `Store Name: ${this.name}\nAddress: ${this.addresses.address}
District: ${this.addresses.district}\nPhone: ${this.phones.mobilePhone}
whatsapp: ${this.phones.whatsApp}`;
    }
}

class ClothingStore  extends Store {

    constructor(name, email, password, phones, addresses, storeType, clothingType, sizes) {
        super(name, email, password, phones, addresses, storeType);
        this.clothingType = clothingType;
        this.sizes = sizes;
    }

    getClothingType() {
        return this.clothingType;
    }

    getSizez() {
        return this.sizes;
    }

    setClothingType(clothingType) {
        this.clothingType = clothingType;
    }

    setSizes(sizes) {
        this.sizes = sizes;
    }

    storePresentation() {
        return `${super.storePresentation()}
Clothing Type: ${this.clothingType}\nClothing Sizes: ${this.sizes}`;
    }
}

class PetStore extends Store {

    constructor(name, email, password, phones, addresses, storeType, petServices) {
        super(name, email, password, phones, addresses, storeType);
        this.petServices = petServices;
    }

    getPetServices() {
        return this.petServices;
    }

    setPetServices(petServices) {
        this.petServices = petServices;
    }

    storePresentation() {
        return `${super.storePresentation()}
Our Services: ${this.petServices}`;
    }
}

class Registration {
    registeredStores = []; //DEBE ESTAR A NIVEL GLOBAL


    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    emailValidate(emailToValidate) {
        let emailValidate = false;

        for(registeredStore of this.registeredStores) {
            if(registeredStore.email === emailToValidate) {
                emailValidate = true;
            }
        }

        return emailValidate;
    }

    registration(registration) {
        successfullyRegistration = false;
        let emailValidated = this.emailValidate(registration.email);

        if(emailValidated === false) {
            this.registeredStores.push(registration);
            successfullyRegistration = true;
        }

        return successfullyRegistration;

    }

    registrationForm() {
        console.log(storesTypes.getStoresTypes());
        /*console.log(`WELCOME TO THE REGISTRATION FORM`);
        let storeName = prompt(`Enter the store name`);
        let storeEmail = prompt(`Enter the store email`);
        let storePassword = prompt(`Enter the store password`);
        let storeType = prompt(`Choose your store type ${this.storesTypes[0].id}. ${this.storesTypes[0].type}$`);
        console.log('ingresamos al formulario');*/
        

        /*let storeRegistrationData = {
            storeName:storeName,
            storeEmail:storeEmail,
            storePassword:storePassword
        };

        let registrationForm = this.registration(storeRegistrationData);*/

    }
}

class MainRoute {

    mainRouteMenu(storesTypes, registration) {
        console.log(storesTypes.storesTypes);
        let menuOptions = parseInt(prompt(`Welcome, digit the option that you prefer\n1.Register\n2.Login\n3.Exit `));

        switch(menuOptions) {
            case 1:
                registration.registrationForm();
                break;
            case 2: 
                console.log('LOGIN');
                break;
            case 3:
                console.log('EXIT');
                break;
            default:
                console.log('The option is incorrect');
                
        }
    }
    
    consolePrint(store) {
        console.log(store.storePresentation());
    }
}

/*const mainRoute = new MainRoute();
mainRoute.mainRouteMenu();*/

/*const registration = new Registration();
registration.registrationForm();*/


//arrays a global level
let storesTypes = [];


//Build stores types
const storeType = new StoreType();
const clothingStoreType = new StoreType(1,'Clothing Store');
const petStoreType = new StoreType(2,'Pet Store');
// Add stores types in an array
storeType.addStoreType(clothingStoreType);
storeType.addStoreType(petStoreType);

//instantiate object of a registration class
const registration = new Registration();


//Execute the main route
const mainRoute = new MainRoute();
console.log(storeType.getStoresTypes());
mainRoute.mainRouteMenu(storeType.getStoresTypes(),);








