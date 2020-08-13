// Written by Marlon Guandique

const fs = require('fs')
const inquirer = require('inquirer')
const intern = require('./lib/Intern')
const engineer = require('./lib/Engineer')
const manager = require('./lib/Manager')
const generatePage = require('./src/generatePage')


const questions = {
    managerQuestions: [
        {
            type: "input",
            name: "name",
            message: "Team's manager name:",
            validate: validateName
        },
        {
            type: "input",
            name: "employeeID",
            message: "Team's manager ID number:",
            validate: validateNumber
        },
        {
            type: "input",
            name: "email",
            message: "Team's manager email address:",
            validate: validateEmail
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Team's manager office number:",
            validate: validateNumber
        },

    ],
    engineerQuestions: [
        {
            type: 'input',
            name: 'name',
            message: "Engineer's name:",
            validate: validateName
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Engineer's ID number:",
            validate: validateNumber
        },
        {
            type: "input",
            name: "email",
            message: "Engineer's email address:",
            validate: validateEmail
        },
        {
            type: "input",
            name: "gitHub",
            message: "Engineer's GitHub username:",
            validate: validateName
        },
    ],
    internQuestions: [
        {
            type: 'input',
            name: 'name',
            message: "Intern's name:",
            validate: validateName
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Intern's ID number:",
            validate: validateNumber
        },
        {
            type: "input",
            name: "email",
            message: "Intern's email address:",
            validate: validateEmail
        },
        {
            type: "input",
            name: "school",
            message: "Intern's current school name:",
            validate: validateName
        },
    ],


    // New profile 
    newProfile: {
        type: 'list',
        name: 'newProfile',
        message: 'Add another employee?',
        choices: ['Engineer', 'Intern', "I am done."]
    },

    managerCard: '',
    engineerCards: '',
    internCards: '',

    askManager() {
        return inquirer.prompt(this.managerQuestions)
            .then(response => {
                this.managerCard += (new Manager(response.name, response.employeeID, response.email, response.officeNumber)).makeCard()
                return this.askNewProfile()
            })
    },
    askEngineer() {
        return inquirer.prompt(this.engineerQuestions)
            .then(response => {
                this.engineerCards += (new Engineer(response.name, response.employeeID, response.email, response.github)).makeCard();
                return this.askNewProfile();
            })
    },
    askIntern() {
        return inquirer.prompt(this.internQuestions)
            .then(response => {
                this.internCards += (new Intern(response.name, response.employeeID, response.email, response.school)).makeCard();
                return this.askNewProfile();
            })
    },

    askNewProfile() {
        return inquirer.prompt(this.newProfile)
            .then(response => {
                if (response.newProfile === 'Engineer') {
                    return this.askEngineer()
                }
                if (response.newProfile === 'Intern') {
                    return this.askIntern()
                }
                return
            })
    }
};


// Validation functions for validateName, validateNumber, validateEmail
function validateName(input) {
    if (input) {
        return true;
    }
    else {
        console.log('\n\nPlease enter a name.\n');
        return false;
    }
};
function validateNumber(input) {
    if (parseInt(input)) {
        return true;
    }
    else {
        console.log('\n\nPlease enter a number.\n');
        return false;
    }
};
function validateEmail(input) {
    if (input.includes('@')) {
        return true;
    }
    else {
        console.log('\n\nPlease enter a email address.\n');
        return false;
    }
};


//Main function init()
function init() {

    questions.askManager()
        .then(() => {
            const page = generatePage(questions.managerCard, questions.engineerCards, questions.internCards)
            fs.writeFile('./dist/index.html', page, err => (err) ? console.log(err) : console.log("good job"))
        })
}

init()


