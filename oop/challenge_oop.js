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

//const prompt = require("prompt-sync")({sigint: true});

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

    validateStoreEmail(storeEmailToValidate) {
        let validateStoreEmail = true;

        if (storeEmailToValidate.includes('@') === false) {
            validateStoreEmail = false;
        }

        return validateStoreEmail;
    }

    validateStorePassword(storePasswordToValidate) {
        let storePasswordValidate = true;

        if (storePasswordToValidate.includes(' ') || storePasswordToValidate.length < 5) {
            storePasswordValidate = false;
        }

        return storePasswordValidate;
    }

    verifyStoreRegister(storeEmailToVerify) {
        let storeRegisterToVerify = false;

        if (DataBases.registeredStoresDB.length > 0) {
            let register = {};

            for (register of DataBases.registeredStoresDB) {
                if (register.storeEmail === storeEmailToVerify) {
                    storeRegisterToVerify = true;
                }
            }
        }

        return storeRegisterToVerify;
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

    #validateStoreName(storeNameToValidate) {
        let validateStoreName = true;

        if (storeNameToValidate === '' || storeNameToValidate === undefined || storeNameToValidate === null) {
            validateStoreName = false;
        }

        return validateStoreName;
    }

    signUpStore(signUpStore) {
        let validateStoreName = this.#validateStoreName(signUpStore.storeName);
        let validateStoreEmail = this.validateStoreEmail(signUpStore.storeEmail);
        let validateStorePassword = this.validateStorePassword(signUpStore.storePassword);
        let verifyStoreRegister = this.verifyStoreRegister(signUpStore.storeEmail);
        let registerMessage = `A store is already registered with the email ${signUpStore.storeEmail} ... 
Please, change the email for the register`;


        if (validateStoreName === false) {
            console.log('The store name field is required');
        } else if (validateStoreEmail === false) {
            console.log('You must enter a valid email ');
        } else if (validateStorePassword === false) {
            console.log('The password field must not have blanck spaces and it must have 5 or more characters');
        } else if (verifyStoreRegister === true) {
            console.log(registerMessage);
        } else {
            DataBases.registeredStoresDB.push(signUpStore);
            console.log('Account created Successfully');
        }
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

    constructor(id, type) {
        // this.#id = generateIds();
        this.#id = id;
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

class ClothingStore extends Store {

    #clothingTypes;
    #clothingSizes;

    constructor(id, name, email, password, phones, addresses, isVirtual, storeType, clothingType, clothingSizes) {
        super(id, name, email, password, phones, addresses, isVirtual, storeType);
        this.#clothingTypes = clothingType;
        this.#clothingSizes = clothingSizes;
    }

    get clothingTypes() {
        return this.#clothingTypes;
    }

    get clothingSizes() {
        return this.#clothingSizes;
    }

    set clothingTypes(newClothingType) {
        this.#clothingTypes = newClothingType;
    }

    set clothingSizes(newClothingSizes) {
        this.#clothingSizes = newClothingSizes;
    }

    storePresentation() {
        return `${super.storePresentation()}
Clothing Type: ${this.clothingType}\nClothing Sizes: ${this.sizes}`;
    }
}

class PetStore extends Store {

    #petServices;

    constructor(id, name, email, password, phones, addresses, isVirtual, storeType, petServices) {
        super(id, name, email, password, phones, addresses, isVirtual, storeType);
        this.#petServices = petServices;
    }

    get petServices() {
        return this.#petServices;
    }

    set petServices(newPetServices) {
        this.#petServices = newPetServices;
    }

    storePresentation() {
        return `${super.storePresentation()}
Our Services: ${this.petServices}`;
    }
}

class Utilities {

}

class DataBases {
    static storesTypesDB = [];
    static petStoresDB = [];
    static clothingStoresDB = [];
    static storesDB = [];
    static registeredStoresDB = [];
}

function main() {
    //Instantiate objects of stores types
    const clothingStoreType = new StoreType('01', 'Clothing');
    const petStoreType = new StoreType('02', 'Pet');

    //Add stores types to databases
    DataBases.storesTypesDB.push(clothingStoreType);
    DataBases.storesTypesDB.push(petStoreType);

    //Instantiate SignUp object
    const signUp1 = new SignUp('Valle Perruno', 'perruno@gmail.com', 'perruno123', petStoreType);
    const signUp2 = new SignUp('Feria del calzado', 'feriadelcalzado@gmail.com', 'calzado258', clothingStoreType);
    const signUp3 = new SignUp('Perruno Store', 'perruno@gmail.com', 'perrunostore41', petStoreType);

    signUp1.signUpStore(signUp1);
    signUp2.signUpStore(signUp2);
    signUp3.signUpStore(signUp3);


}

main();










