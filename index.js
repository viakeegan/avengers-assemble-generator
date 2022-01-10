const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./src/page-template.js");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamArr = [];

const promptManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the manager's name!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "email",
      message: "Please provide the manager's email: ",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the manager's email!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "id",
      message: "Please provide the manager's ID: ",
      validate: ID => {
        if (isNaN(ID)) {
          console.log("Please enter the manager's ID!");
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please provide the office number: ",
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log("Please enter the the office number!");
          return false;
        }
      }
    }
  ])
  .then(managerInfo => {
    const {name, email, id, officeNumber} = managerInfo;
    const manager = new Manager (name, email, id, officeNumber);

    teamArr.push(manager);
    console.log(manager);
  })
};

const promptEmployee = () => {
  console.log(`
  =================
  Add employees
  =================
  `);

  return inquirer.prompt ([
    {
      type: "list",
      name: "role",
      message: "What is this employee's role?",
      choices: ["Engineer", "Intern"]
    },
    {
      type: "input",
      name: "name",
      message: "What is the employee's name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the employee's name!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "email",
      message: "Please provide the employee's email: ",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the employee's email!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "id",
      message: "Please provide the employee's ID: ",
      validate: ID => {
        if (isNaN(ID)) {
          console.log("Please enter the employee's ID!");
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: "input",
      name: "github",
      message: "Please provide the engineer's github username: ",
      when: (input) => input.role === "Engineer",
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter the the engineer's github username!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "school",
      message: "Please provide the intern's school: ",
      when: (input) => input.role === "Intern",
      validate: schoolInput => {
          if (schoolInput) {
              return true;
          } else {
              console.log ("Please enter the intern's school!")
          }
      }
    },
    {
      type: "confirm",
      name: "confirmAdd",
      message: "Would you like to add another employee?",
      default: false
    }
  ])
  .then(employeeInfo => {
    let {name, email, id, role, github, school, confirmAdd} = employeeInfo;
    let employee = employeeInfo;

    if (role === "Engineer") {
      employee = new Engineer(name, email, id, github);

      console.log(employee);
    }
    else if (role === "Intern") {
      employee = new Intern(name, email, id, school);

      console.log(employee);
    }
    teamArr.push(employee);

    if (confirmAdd) {
      return promptEmployee(teamArr);
    } else {
      console.log(teamArr);
      return teamArr;
    }
  })
};

function writeToFile(data) {
  fs.writeFile("./dist/index.html", data, err => {
    if (err) {
      return console.log(err);
    }
    console.log('Success!');
  });
}

promptManager()
  .then(promptEmployee)
  .then(teamArr => {
    return generatePage(teamArr);
  })
  .then(pageHTML => {
    return writeToFile(pageHTML);
  })
  .catch(err => {
    console.log(err)
  })