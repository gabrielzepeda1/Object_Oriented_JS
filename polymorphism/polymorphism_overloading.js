//Polymorphism reduces coupling in our application 

//Allows to create more compact code. 

//A language that supports polymorphism supports: 
//Overloading 
//Parametric Polymorphism 
//Inclusion polymorphism 

function countItems(x) { 
    return x.toString().length;
}

console.log(countItems(1000))
console.log(countItems("hola mundo"))

function sum(x = 0, y = 0, z = 0) { 
    return x + y + z 
}

console.log(sum(10,20))
console.log(sum(10,20,30))

function Stack() { 
    this.items = [] 

    this.push = function(item) { 
        this.items.push(item)
    }

}

const stack = new Stack()
stack.push('asdasd')
const stack2 = new Stack()
stack2.push(1000)

console.log(stack)
console.log(stack2)


//SUBTLE POLYMORPHISM 

class Person { 
    constructor(name, lastname) {
        this.name = name; 
        this.lastname = lastname;


    }

    
}

class Programmer extends Person { 
    constructor(language) { 
        super() 
        this.language = language
    }
}

const john = new Person('john', 'ray');
const ryan = new Programmer('javascript','ryan', 'ray');

console.log(john) 
console.log(ryan)

function writeFullName(p) { 
    console.log(p.name + " " + p.lastname)
}

writeFullName(john) 
writeFullName(ryan)