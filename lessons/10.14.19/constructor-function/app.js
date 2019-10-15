// // function User(name, age, password, username, isAdmin = false){   //user is cap
// //     this.name = name
// // }
// function User(name, isAdmin = false){   
//     this.name = name
//     this.isAdmin = isAdmin
//     this.greet = function(){
//         console.log("hello, my name is " + this.name) //have to use this.(keyword) because it doesnt know th ename yet
//     }
// }

// const addedUser = new User("Richie") //new makes a new object, the this.'s in functin User is what the object is. it instantiate.
// addedUser.greet()
// console.log(addedUser)

const employees = []
function Employee(name, title, salary, status = "Full Time"){
    this.name = name
    this.title = title
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function(){
        console.log(`name: ${this.name}, title: ${this.title}, salary: ${this.salary}, status: ${this.status}`)
    }
}

employees.push(new Employee("Jeremy", "Head Wizard" ,"~5", "Part Time"))
employees.push(new Employee("Ethan", "Minor Wizard" ,"~2"))
employees.push(new Employee("Jim", "A Guy", "$10"))
employees.push(new Employee("Steven", ".....", "Maybe $1"))
employees[3].printEmployeeForm()
// console.log(Employee1.printEmployeeForm())
// console.log(Employee2.printEmployeeForm())
// console.log(Employee3.printEmployeeForm())
// console.log(Employee4.printEmployeeForm())
// console.log(employees)