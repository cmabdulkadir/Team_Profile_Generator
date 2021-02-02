const inquirer = require("inquirer");
const fs = require('fs');

// import classes here
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')


// import page-template
const generateHTML = require('./src/page-template');

// global variable for team array
let myTeam = [];

function selectRole() {
    inquirer.prompt([{
        type: "list",
        message: "What role would you like to add?",
        name: "chosenRole",
        choices: ["Manager", "Engineer", "Intern", "none"],
    }]).then((answer) => {
        console.log(answer.chosenRole)
        if (answer.chosenRole === "Manager") {
            createManager()
        } else if(answer.chosenRole === 'Engineer') {
            createEngineer()
        } else if(answer.chosenRole === 'Intern') {
            createIntern()
        } else {
            generateTeam(myTeam)
        }
    })
}

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the manager's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the manager's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officeNumber",
        },
    ]).then((answer) => {
        // create a new manager
        const newManager = new Manager(answer.name,answer.id,answer.email,answer.officeNumber);

        // add the newly created manager to the team array
        myTeam.push(newManager);

        console.log(myTeam)

        // ask again which role
        selectRole();

    })
}
function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the engineer's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the engineer's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the engineer's github?",
            name: "github",
        },
    ]).then((answer) => {
        // create a new manager
        const newEngineer = new Engineer(answer.name,answer.id,answer.email,answer.github);

        // add the newly created manager to the team array
        myTeam.push(newEngineer);

        console.log(myTeam)

        // ask again which role
        selectRole();

    })
}
function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the intern's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the intern's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What school is the intern enrolled to?",
            name: "school",
        },
    ]).then((answer) => {
        
        const newIntern = new Intern(answer.name,answer.id,answer.email,answer.school);

        // add the newly created intern to the team array
        myTeam.push(newIntern);

        console.log(myTeam)

        // ask again which role
        selectRole();

    })
}

// function for generating the HTML file
function generateTeam (teamArray) {
    const generatedOutput = generateHTML(teamArray);

    fs.writeFileSync('./output/team.html', generatedOutput);
}

selectRole()
