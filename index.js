// Written by Marlon Guandique

const fs = require('fs')
const inquirer = require('inquirer')
// const intern = req('./lib/Intern')
// const engineer = req('./lib/Engineer')
// const manager = req('./lib/Manager')


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
            validate: validateId
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
            validate: validateOfficeNumber
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
            validate: validateGithub
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
            validate: validateSchool
        },
    ],
}
//functions needed to validate the data using Inquirer
function validateName(input) {
    if (input) {
        return true;
    } 
    else {
        console.log('\n\n Please input a name.\n');
        return false;
    }
}; 
function validateNumber(input) {
    if (parseInt(input)) {
        return true;
    } 
    else {
        console.log('\n\nPlease input a correct number ID.\n');
        return false;
    }
};
function validateEmail(input) {
    if (input.includes('@')) {
        return true;
    } 
    else {
        console.log('\n\nPlease input a valid email address.\n');
        return false;
    }
};
