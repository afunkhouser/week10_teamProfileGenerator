const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager');

const inquirer = require('inquirer')
// const generateSite = require('./templates');
// const {writeFile, copyFile} = require('./utils');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "what is your manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "what is your manager's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "what is your manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "what is your manager's Office Number?"
        }
    ])
    .then(managerData => {
        const {name, id, email, officeNumber} = managerData;
        employee = new Manager(name)
        let role = {role: 'Manager'};
        return {...managerData, ...role}
    })
}

const propmtEmployee = managerData => {
    if(!managerData.engineers) {
        managerData.engineers = [];
    }
    if(!managerData.intern) {
        managerData.engineers = [];
    }

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Would you like to add an Engineer, Intern, or finish building your team?',
            choices: ['Engineer', 'Intern', 'Done']
        }
    ]).then(({role}) => {
        if(role === 'Engineer') {
            // Questions to ask for Engineer
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "what is your engineer's name?"
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "what is your engineer's ID?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "what is your engineer's email?"
                },
                {
                    type: 'input',
                    name: 'gitHub',
                    message: "what is your engineer's GitHub?"
                }
            ]).then(employeeData => {
                employeeData = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.gitHub)
                let role = {role: 'Engineer'}
                managerData.engineers.push({...employeeData, ...role})
                return propmtEmployee(managerData)
            })

        } else if(role === 'Intern') {
            // Questios to ask for Intern
        } else {
            return managerData
        }
    })
}
promptManager()
.then(propmtEmployee)
.then((response) => {
    console.log(response.engineers)
})