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