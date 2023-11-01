//Create new objects from a general object. 


class Person {
    constructor(name, lastname) { 
        this.name = name 
        this.lastname = lastname
        this.age = null
    }
}
class Programmer extends Person {
    constructor(language, name, lastname) { 
        super(name, lastname);
        this.language = language
    }
}

const person = new Person('maria', 'perez')

const programmer = new Programmer('joe', 'mcmillan', 'python')

console.log(person)
console.log(programmer)