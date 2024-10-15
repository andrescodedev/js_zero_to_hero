/* 
    FUNCTION OF A ANATOMY

    function function_name() {
        //return
        //code
    }

    function function_name(param_a, param_b) {
        //code
        //return
    }

*/

function substraction() {
    console.log(`The substraction between 10 - 5 is ${10-5}`);
}

function addition(value_a,value_b) {
    return value_a + value_b;
}

//substraction();
//console.log(`The addition is ${addition(5,5)}`);


/* 
    EXAMPLE OF DISCOUNT IN THE CLOTHE'S PRICE
*/

let discountPercentage = 30;

let product = {
    id:'123',
    name:'Js Shirt',
    price:80,
    id_category:'p01'
}

function calculateProductPriceWithDiscount() {
    let  discountValue = (product.price * discountPercentage) / 100;
    let  productPriceWithDiscount = product.price - discountValue;

    return productPriceWithDiscount;
}

function printOnScreen() {
    console.log(`Product Price: $${product.price}`);
    console.log(`Discount Percentage: ${discountPercentage}%`);
    console.log(`Produc price with discount: $${calculateProductPriceWithDiscount()}`);
}

printOnScreen();



