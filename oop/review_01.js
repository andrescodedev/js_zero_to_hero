/* 
    PRIVATE FIELDS
*/



/* 
    PRIVATE METHODS
*/


/* 
    PRIVATE STATIC PROPERTIES
    LEVEL 01: Una propiedad estatica no puede ser accedida desde otra clase.
    LEVEL 02: Una propiedas estatica puede ser accedida por una subclase de la clase que la creo.
    LEVEL 03: Una propiedad estatica y privada solo puede ser accedida por la clase que la creo.

    PRIVATE STATIC METHODS
    LEVEL 01: Un metodo estatica no puede ser accedida desde otra clase.
    LEVEL 02: Un metodo estatica puede ser accedida por una subclase de la clase que lo creo.
    LEVEL 03: Un metodo estatica y privada solo puede ser invocado desde adentro de la clase que lo creo.

    - Un metodo estatico o no estatico pero declarado como privado, solo puede ser invocado desde adentro de la clase que lo creo.
*/

/*class ClassWithPrivateStaticField {
    static #PRIVATE_STATIC_FIELD = 10;
  
    static #publicStaticMethod() {
      ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42;
      return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
    }

    static notStaticMethod() {
      return ClassWithPrivateStaticField.#publicStaticMethod();
    }

    static notStaticMethod2() {
      return this.#publicStaticMethod();
    }
  }

  class SubClass extends ClassWithPrivateStaticField {}
  class AnotherClass {}
  
const obj = new ClassWithPrivateStaticField();
const another = new AnotherClass();

//console.log(ClassWithPrivateStaticField.publicStaticMethod() === 42);
//console.log(ClassWithPrivateStaticField.publicStaticMethod());
//console.log(obj.notStaticMethod());
//console.log(SubClass.PRIVATE_STATIC_FIELD);
console.log(SubClass.notStaticMethod2());*/


/* 
  STATIC INITIALIZATION BLOCKS

  class ClassWithSIB {
    static property1 = "value1";
    static property2;
    static {
      this.property2 = "value2";
      this.property3 = "value3";
    }
  }
*/

class ClassWithSIB {
  static property1 = 'value1';
  static property2;
  static {
    this.property2 = "value2";
    this.property3 = "value3";
  }
}

console.log(ClassWithSIB.property1);
console.log(ClassWithSIB.property2);
console.log(ClassWithSIB.property3);
  