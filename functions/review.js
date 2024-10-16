let person = {
    name:'Andrew',
    lastName:'Ronaldo',
    profession:'Developer'
}

function printPersonDataOnConsole() {
    console.log(`My name in ${this.name} ${this.lastName} and my profession is ${this.profession}`);
}

printPersonDataOnConsole.call(person);
