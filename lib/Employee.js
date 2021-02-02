class Employee{
    constructor(name, id, email){
        this.name = name; 
        this.id = id;
        this.email = email;
    }


    
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee"
    }
    
}

module.exports = Employee


// // var testOB = new Employee("test", 1, "test@test.com")
// // console.log(testOB);
// // console.log(testOB.getEmail());
// module.exports = Employee;
// 2:34
// const Employee = require("./Employee");
// class Engineer extends Employee {
// constructor(name, id, email, github) {
//     super(name,id,email)
//     this.github = github;
// }
// getRole = () => "Engineer";
// getGithub = () => this.github;
// }
// module.exports = Engineer;const Employee = require("./Employee");
// class Engineer extends Employee {
// constructor(name, id, email, github) {
//     super(name,id,email)
//     this.github = github;
// }
// getRole = () => "Engineer";
// getGithub = () => this.github;
// }
// module.exports = Engineer;