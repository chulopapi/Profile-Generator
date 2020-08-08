// Written by Marlon Guandique

const fs = require('fs')
const inquirer = require('inquirer')
const intern = req('./lib/intern')
const engineer = req('./lib/engineer')
const manager = req('./lib/manager')


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
            validate: validateEmail
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
            validate: validateEmail
        },
    ],
}

