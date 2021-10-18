const Employee = require("./lib/Employee");
const Enigneer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const inquirer = require("inquirer");
const generateSite = require('./templates/page-template');
const {writeFile, copyFile} = require('./utils/createSite');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What the manager's office number?"
        }
    ]).then (managerData => {
        const{name, id, email, officeNumber} = managerData
        employee = new Manager(name, id, email, officeNumber)
        let role = {role: "Manger"};
        return {...managerData, ...role}
    })
}

const promptEmployee = managerData => {
    if (!managerData.engineers) {
        managerData.engineers = [];
    }
    if(!managerData.interns) {
        managerData.interns = [];
    }
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Would you like to add an engineer, intern, or finish building your team?",
            choices: ['Engineer', 'Intern', 'Finished']
        }
    ]).then(({ role }) => {
        if (role === "Engineer") {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is your engineer's name?"
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is your engineer's ID?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is your engineer's email?"
                },
                {
                    type: 'input',
                    name: 'github',
                    message: "What is your engineer's GitHub username?"
                }
            ]).then(employeeData => {
                employee = new Enigneer(employeeData.name, employeeData.id, employeeData.email, employeeData.github)
                let role = {role: "Engineer"}
                managerData.engineers.push({...employeeData,...role})
                return promptEmployee(managerData)
            })
        } else if (role === "Intern") {
            return inquirer.prompt([
                {
                    type: "input",
                    name: 'name',
                    message: "What is your intern's name?"
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is your intern's ID?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is your intern's email?"
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What school does the intern attend?'
                }
            ]).then(employeeData => {
                employeeData = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school)
                let role = {role: "Intern"}
                managerData.interns.push({...employeeData,...role})
                return promptEmployee(managerData)
            })
        } else {
            return managerData
        }
    })
}

promptManager()
    .then(promptEmployee)
    .then(managerData => {
        return generateSite(managerData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log("----------------------------")
        console.log(writeFileResponse.message);
        return copyFile();
    }).then(copyFileResponse => {
        console.log(copyFileResponse.message)
        console.log("----------------------------");
    })
    .catch(err => {
        console.log(err);
    });