function Person(name, lastname) { 
    this.name = name
    this.lasname = lastname
    this.displayName = function() { 
        return `${this.name}  ${this.lastname}`
    }
}

const john = new Person("John", "McMillan")
const mario = new Person("Mario", "Rossi")
const maria = new Person("Maria", "Perez")
const jose = new Person("Jose", "Perez")

Person.prototype.greet = function() { 
    return `Hello I am ${this.name}`

}

Person.prototype.age = 100 

console.log(john.age)
console.log(mario.age)
console.log(maria.age)
console.log(jose.age)

const s = new String("hello world") 

String.prototype.concatText() = function() { 
    return this + "test";
}

"My name is Jesus".concatTest

console.log(s.concatTest())