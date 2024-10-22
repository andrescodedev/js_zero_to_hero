/* 
    CHALLENGE OOP

    1. EL ESTABLECIMIENTO DEBE PODER REGISTRARSE.
    2. EL ESTABLECIMIENTO DEBE PODER INICIAR SESIÓN CON SU EMAIL Y CONTRASEÑA.
    3. SI EL EMAIL Y CONTRASEÑA SON CORRECTOS, EL SISTEMA DEBE MOSTRAR UN MENSAJE
       DE BIENVENIDA Y EL TIMELINE DEL ESTABLECIMIENTO.
    4. SI EL EMAIL Y CONTRASEÑA SON INCORRECTOS, EL SISTEMA DEBE MOSTRAR UN MENSAJE
       DE ERROR Y NO MOSTRAR NINGUNA TIMELINE.
*/

const PromptSync = require("prompt-sync");

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

class Registration {
    storeTypes = new StoreTypes();

    registeredStores = [];


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
        console.log(this.storeTypes[0].id);
        console.log(`WELCOME TO THE REGISTRATION FORM`);
        let storeName = prompt(`Enter the store name`);
        let storeEmail = prompt(`Enter the store email`);
        let storePassword = prompt(`Enter the store password`);
        let storeType = prompt(`Choose your store type ${this.storeTypes[0].id}. ${this.storeTypes[0].type}$`);
        console.log('ingresamos al formulario');
        

        /*let storeRegistrationData = {
            storeName:storeName,
            storeEmail:storeEmail,
            storePassword:storePassword
        };

        let registrationForm = this.registration(storeRegistrationData);*/

    }
}

class StoreTypes {
    constructor() {
        this.storeTypes = [
            {
                id:'1',
                type:'Clothing'
            },
            {
                id:'2',
                type:'Pet'
            }
        ];
    }
}

class Store {

    constructor(name, email, password, phones, addresses, storeType) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phones = phones;
        this.addresses = addresses;
        this.storeType = storeType;
    }

    getName() {
        return this.name;
    }

    getPhones() {
        return this.phones;
    }

    getAddresses() {
        return this.addresses;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    getStoreType() {
        return this.storeType;
    }

    setPhones(phones) {
        this.phones = phones;
    }

    setAddresses(addresses) {
        this.addresses = addresses;
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

class MainRoute {
    registration = new Registration();

    mainRouteMenu() {
        console.log('holi');
        var menuOptions = prompt(`Welcome, digit the option that you prefer\n1.Register\n2.Login\n3.Exit `);
        console.log(menuOptions);
        switch(menuOptions) {
            case 1:
                console.log('ingresamos al caso 1');
                this.registration.registrationForm();
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

 const registration = new Registration();
 registration.registrationForm();







