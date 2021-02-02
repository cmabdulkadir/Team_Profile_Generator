const inquirer = require("inquirer");

function selectRole(){
    inquirer.prompt([{
        type: "list",
        message:"What role would you like to add?",
        name: "chosenRole",
        choices:["Manager", "Engineer", "Intern", "none"],
     
     }]).then((answer)=>{
         console.log(answer.chosenRole)
     })

}

function createManager(){
    inquirer.prompt([
        {
        type: "input",
        message:"What is the manager's name?",
        name: "name",
    },
    {
        type: "input",
        message:"What is the manager's id?",
        name: "id",
        

    },
    {
        type: "input",
        message:"What is the manager's email?",
        name: "email",

    },
    {
        type: "input",
        message:"What is the manager's office number?",
        name: "officeNumber", 

    },


]).then((answer)=>{
    console.log(answer)
})
    
}
createManager()