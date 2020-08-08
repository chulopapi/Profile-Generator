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
            name: "id",
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
}

