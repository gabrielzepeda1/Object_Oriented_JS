//Encapsulation 
// Simplifies the use of your code 

function Company(name) { 
    let employees = []
    this.name = name

    this.getEmployees = () => { 
        return employees
    }

    this.addEmployee = (employee) => { 
        employees.push(employee)
    }
}

const company = new Company('coca-cola')
const company2 = new Company('pepsi')

console.log(company)
console.log(company2)

company.addEmployee({name: "ryan"})
company2.addEmployee({name: "joe"})

console.log(company.getEmployees())
console.log(company2.getEmployees())
