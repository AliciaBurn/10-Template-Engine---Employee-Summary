// requires 
const inquirer = require("inquirer");
const createCards = require("./lib/createCards");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const managerArray = [];
const engineerArray = [];
const internArray = [];

const createEmployee = () => {

    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name:"
        },
        {
            type: "number",
            name: "id",
            message: "Enter your ID number:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your E-mail:"
        },
        {
            type: "list",
            name: "role",
            message: "Select your current role:",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        }
    ])
    // .then(function({ managerName, managerId, managerEmail, managerOffice }){
    //     const manager = new Manager(managerName, managerId, managerEmail, managerOffice);
    //     managerArray.push(manager)
    //     createTeam();
    // });
}

const createManager = [
    {
        type: "input",
        name: "officeNumber",
        message: "Enter your office number:"
    }
]

const createEngineer = [
    {
        type: "input",
        name: "github",
        message: "Enter your Github user name:"
    }
]

const createIntern = [
    {
        type: "input",
        name: "school",
        message: "Enter your school name:"
    }
]

const continueQuestion = [
    {
        type: "confirm",
        name: "continue",
        message: "Would you like to add another Team Member"
    }
]

// createEmployee();

// function createTeam() {

//     inquirer.prompt([
//       {
//         type: "list",
//         name: "teamMember",
//         message: "Would you like to add an Engineer or Intern?",
//         choices: [
//           "Engineer",
//           "Intern",
//           "Don't add any more team members"
//         ]
//       }
//     ]).then(answer => {
//       switch(answer.teamMember) {
//         case "Engineer":
//             createEngineer();
//             break;
//         case "Intern":
//             createIntern();
//             break;
//         default:
//             createCards(managerArray, engineerArray, internArray);
//       }
//     });

// }

// function createEngineer() {

//     return inquirer.prompt([
//         {
//             type: "input",
//             name: "engineerName",
//             message: "Enter the name of a engineer:"
//         },
//         {
//             type: "input",
//             name: "engineerId",
//             message: "Enter the ID of the engineer:"
//         },
//         {
//             type: "input",
//             name: "engineerEmail",
//             message: "Enter the email of the engineer:"
//         },
//         {
//             type: "input",
//             name: "engineerGithub",
//             message: "Enter the Github username of the engineer:"
//         }
//     ]).then(function({ engineerName, engineerId, engineerEmail, engineerGithub }) {
//         const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
//         engineerArray.push(engineer);
//         createTeam();
//     });

// }

// function createIntern() {

//     return inquirer.prompt([
//         {
//             type: "input",
//             name: "internName",
//             message: "Enter the name of a intern:"
//         },
//         {
//             type: "input",
//             name: "internId",
//             message: "Enter the ID of the intern:"
//         },
//         {
//             type: "input",
//             name: "internEmail",
//             message: "Enter the email of the intern:"
//         },
//         {
//             type: "input",
//             name: "internSchool",
//             message: "Enter the school the intern is attending:"
//         }
//     ]).then(function({ internName, internId, internEmail, internSchool }) {
//         const intern = new Intern(internName, internId, internEmail, internSchool);
//         internArray.push(intern);
//         createTeam();
//     });

// }
