// create manager card
const createManager = manager => {
    return `
      <div class="shadow col-2 flex-column m-2 p-0">
        <div class="bg-info px-2 pb-1">
          <h2>${manager.name}</h2>
          <h3>Manager</h3>
        </div>

        <div class="flex-wrap flex-column p-0">
          <ul class="list-unstyled m-0 p-2">
            <li class="bg-white border border-dark px-1">ID: ${manager.id}</li>
            <li class="bg-white border border-dark px-1">Email: ${manager.email}</li>
            <li class="bg-white border border-dark px-1">Office #: ${manager.officeNumber}</li>
          </ul>
        </div>
      </div>
    `
  }

  // create engineer card
  const createEngineer = engineer => {
    return `
      <div class="shadow col-2 flex-column m-2 p-0">
        <div class="bg-info px-2 pb-1">
          <h2>${engineer.name}</h2>
          <h3>Engineer</h3>
        </div>

        <div class="flex-wrap flex-column p-0">
          <ul class="list-unstyled m-0 p-2">
            <li class="bg-white border border-dark px-1">ID: ${engineer.id}</li>
            <li class="bg-white border border-dark px-1">Email: ${engineer.email}</li>
            <li class="bg-white border border-dark px-1">Github username: ${engineer.github}</li>
          </ul>
        </div>
      </div>
    `
  }

  // create intern card
const createIntern = intern => {
  return `
    <div class="shadow col-2 flex-column m-2 p-0">
      <div class="bg-info px-2 pb-1">
        <h2>${intern.name}</h2>
        <h3>Intern</h3>
      </div>

      <div class="flex-wrap flex-column p-0">
        <ul class="list-unstyled m-0 p-2">
          <li class="bg-white border border-dark px-1">ID: ${intern.id}</li>
          <li class="bg-white border border-dark px-1">Email: ${intern.email}</li>
          <li class="bg-white border border-dark px-1">School: ${intern.school}</li>
        </ul>
      </div>
    </div>
  `
}

// generate page data
generatePage = data => {
    teamBoxesArr = [];
  
    for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole(); 
      console.log(role);
      
      if (role === "Manager") {
        const managerBox = createManager(employee);
  
        teamBoxesArr.push(managerBox);
      }
  
      if (role === "Engineer") {
        const engineerBox = createEngineer(employee);
  
        teamBoxesArr.push(engineerBox);
      }
  
      if (role === "Intern") {
        const internBox = createIntern(employee);
  
        teamBoxesArr.push(internBox);
      }
    }
  
    const teamBoxes = teamBoxesArr.join("");
  
    const generateTeam = createTeamHTML(teamBoxes);
    return generateTeam;
  }

  // create team boxes
const createTeamHTML = teamBoxes => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profiles</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
      </head>

      <body>
        <header>
          <div class="text-center p-3 mb-2 bg-danger">
            <h1>My Team</h1>
          </div>
        </header>

        <section class="d-flex flex-row flex-wrap justify-content-center">
          ${teamBoxes}
        </section>
        
      </body>
      </html>
    `
  }
  
  module.exports = generatePage;

  