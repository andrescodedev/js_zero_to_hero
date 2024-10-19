/* 
    INHERITANCE
*/

class Store {

    constructor(name, logo, slogan, phones, addresses, products, storeType) {
        this.name = name;
        this.logo = logo;
        this.slogan = slogan;
        this.phones = phones;
        this.addresses = addresses;
        this.products = products;
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

    setPhones(phones) {
        this.phones = phones;
    }

    setAddresses(addresses) {
        this.addresses = addresses;
    }
}

class ClothingStore  extends Store {

    constructor(name, logo, slogan, phones, addresses, products, storeType, clothingType, sizes) {
        super(name, logo, slogan, phones, addresses, products, storeType);
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
}

class DrugStore extends Store {
     
    constructor(name, logo, slogan, phones, addresses, products, storeType, drugType) {
        super(name, logo, slogan, phones, addresses, products, storeType);
        this.drugType = drugType;
    }

    getDrugType() {
        return this.drugType;
    }

    setDrugType(drugType) {
        this.drugType = drugType;
    }
}

class PetStore extends Store {

    constructor(name, logo, slogan, phones, addresses, products, storeType, petServices) {
        super(name, logo, slogan, phones, addresses, products, storeType);
        this.petServices = petServices;
    }

    getPetServices() {
        return this.petServices;
    }

    setPetServices(petServices) {
        this.petServices = petServices;
    }
}

const clothingStore = new ClothingStore(
    'Ropa Gym', null, null, 
    {mobilePhone:'3164789636'}, 
    {district:'Carmelo',address:'calle 6'},null,
    'Clothing','Deportiva',['s','m','l','xl']);

console.log(clothingStore);
console.log(clothingStore.getPhones());

clothingStore.setPhones({whatsApp: '3174569636'});
console.log(clothingStore.getPhones());