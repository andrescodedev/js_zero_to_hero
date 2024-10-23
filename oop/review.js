/* 
    REVIEW OF OOP IN JS
*/

// CLASS DECLARATION
/*class Animal {
    constructor(animalColor) {
        this.animalColor = animalColor;
    }
}

const animal = new Animal('blue');
console.log(animal);*/

/* 
    LODGING PROBLEMS || PROBLEMAS DE ALOJAMIENTO

    const animal = new Animal(); // reference error: Cannot access 'Animal' before initialization

    class Animal {}
*/

/*  CLASS EXPRESSION

// Anonima
let Rectangulo = class {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
};

console.log(Rectangulo.name);
// output: "Rectangulo"

// Nombrada
let Rectangulo = class Rectangulo2 {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
};
console.log(Rectangulo.name);
// output: "Rectangulo2"
*/

/* 
    PROTOTYPE METHODS || MÉTODOS PROTOTIPO

    - GETTERS
    - SETTERS
    - METHODS
*/

class GeometricShape {
    
    calculateArea(valueA, valueB) {
        return valueA * valueB;
    }

    calculatePerimeter(valueA, valueB, valueC, valueD) {
        return valueA + valueB + valueC + valueD;
    }

    //static methods
    static integerConvert(stringToInteger) {
        return parseInt(stringToInteger);
    }

    static floatConvert(stringToFloat) {
        return parseFloat(stringToFloat);
    }
}

class Rectangle extends GeometricShape {

    // PRIVATE PROPERTIES
    #height;
    #width;

    constructor(height, width) {
        super();
        this.#height = height;
        this.#width  = width;
    }

    //GETTERS
    get height() {
        return this.#height;
    }

    get width() {
        return this.#width;
    }

    //SETTERS
    set height(newHeight) {
        this.#height = newHeight;
    }

    set width(newWidth) {
        this.#width = newWidth;
    }

    /*calculateArea() {
        return this.#height * this.#width;
    }

    calculatePerimeter() {
        return this.#height+this.#height+this.#width+this.#width;
    }

    //static methods
    static integerConvert(stringToInteger) {
        return parseInt(stringToInteger);
    }

    static floatConvert(stringToFloat) {
        return parseFloat(stringToFloat);
    }*/
}

class Square extends GeometricShape {
    #side

    constructor(side) {
        super();
        this.#side = side;
    }

    //GETTER
    get side() {
        return this.#side;
    }

    //SETTER
    set side(sideValue) {
        this.#side = sideValue;
    }
}

const rectangle = new Rectangle('5','10');
const square = new Square('4');

console.log(typeof(square.side));
console.log(`The square side is: ${square.side}`);
console.log(`The perimeter square is: ${square.calculatePerimeter(square.side,square.side,square.side,square.side)}`);
console.log(`The area rectangle is: ${square.calculateArea(square.side,square.side)}\n\n`);

square.side = Square.integerConvert(square.side);

console.log(typeof(square.side));
console.log(`The square side is: ${square.side}`);
console.log(`The perimeter square is: ${square.calculatePerimeter(square.side,square.side,square.side,square.side)}`);
console.log(`The area rectangle is: ${square.calculateArea(square.side,square.side)}\n\n`);



/*console.log(typeof(rectangle.height));
console.log(typeof(rectangle.width));
console.log(`The rectangle height is: ${rectangle.height}`);
console.log(`The rectangle width is: ${rectangle.width}`);
console.log(`The perimeter rectangle is: ${rectangle.calculatePerimeter(rectangle.height,rectangle.width,rectangle.height,rectangle.width)}`);
console.log(`The area rectangle is: ${rectangle.calculateArea(rectangle.height,rectangle.width)}\n\n`);

rectangle.height = Rectangle.integerConvert(rectangle.height);
rectangle.width = Rectangle.integerConvert(rectangle.width);

console.log(typeof(rectangle.height));
console.log(typeof(rectangle.width));
console.log(`The rectangle height is: ${rectangle.height}`);
console.log(`The rectangle width is: ${rectangle.width}`);
console.log(`The perimeter rectangle is: ${rectangle.calculatePerimeter(rectangle.height,rectangle.width,rectangle.height,rectangle.width)}`);
console.log(`The area rectangle is: ${rectangle.calculateArea(rectangle.height,rectangle.width)}\n\n`);*/

/*rectangle.width = '3';
rectangle.height = '4';
console.log(rectangle);
console.log(`The new rectangle width is: ${rectangle.width}`);
console.log(`The new rectangle height is: ${rectangle.height}`);
console.log(`The new area is: ${rectangle.calculateArea()}`);*/
 