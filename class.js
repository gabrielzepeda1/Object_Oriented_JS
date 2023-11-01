// function Person() { 
//     this.name = ''
//     this.lastname = ''
// }

class Person { 
    constructor(name, lastname) { 
        this.name = ''
        this.lastname = ''
        return { 
            x: "something"
        }
    }

    greet() { 
        return `hello I am ${this.name} ${this.lastname}`
    }
}

const user = new Person('joe', 'ray') 
const user2 = new Person('ryan', 'ray')

// function Person(name, lastname) { 
//     'use strict' 
//     this.name = name 
//     this.lastname = lastname
// }

console.log(user)
console.log(user2)

console.log(Person.prototype)


