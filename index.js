
// //primitive data types
// console.log(typeof "hello world")
// console.log(typeof 100)
// console.log(typeof false)



// //objects 
// console.log(typeof {})
// console.log(typeof [])

// console.log(typeof Date()) // string
// console.log(typeof new Date())
// console.log(typeof new RegExp())


// console.log(typeof new Number(100))
// console.log(typeof new String("hello world").toUpperCase())
// console.log(typeof new Boolean(true))


//Object literals 
// console.log( {} )

// let name = "Ryan";
// let lastname = "Ray";
// let age = 30;

const user = { 
    name: "Gabriel", //Properties
    lastname : "Zepeda", 
    age : 21, 
    showFullName() { 
        return this.name + " " + this.lastname
    },
    hobbies: ['read', 'programming', 'run'],
    address: { 
        street: "some street", 
        city: "london", 

    }
} 

// console.log(user)

// //Object properties 
// console.log(user.name)
// console.log(user.lastname)
// console.log(user.age)


// //Methods 
// console.log(user.showFullName())

// const account = { 
//     number: "123123123123123", 
//     amount: 100, 
//     deposit(quantity) { 
//         this.amount += quantity
//     }, 
//     withdraw() { 
//         this.amount = this.amount - quantity
//     }
// }

// account.deposit(100)
// account.deposit(50)
// account.deposit(10)
// console.log(account) 

// account.withdraw(10)
// account.withdraw(200)

// console.log(account) 

//Constructor

function Person() { 
    this.name = ""
    this.lastname = ""
    this.age = 0
    this.showFullName = function () { 
        return `${this.name} ${this.lastname}`
    }
}

const user2 = new Person() 
user2.name = 'Joe' 
user2.lastname = "McMillan" 
user2.age = 30 
console.log(user2.showFullName())

const user3 = new Person() 
user3.name = 'Camren' 
user3.lastname = "Howe" 
user3.age = 45 
console.log(user3.showFullName())

const user4 = new Person() 
const user5 = new Person()

console.log(user3) 
console.log(user4) 
console.log(user5) 


//OBJECT 

const person1 = new Object()

//Equivalent to creating an object literal {}

const person2 = {}
console.log(person2.constructor)

const number = new Object(3*2) 
console.log(number)

console.log(Object.keys(user))


///NEW 
const mankind = { 
    Person: function() { 
        "use strict" 
        this.name = "" 
        this.lastname = ""
    }
}

const person3 = new mankind.Person() 
console.log(person3) 
console.log(mankind)

