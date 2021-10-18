const Engineer = require("../lib/Engineer");

const generateManager = Manager => {
    return `
     <div class="card employee-card">
        <div class="card-header manager">
            <h2 class="card-title">${Manager.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${Manager.role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
                <li class="list-group-item">Office number: ${Manager.officeNumber}</li>
            </ul>
        </div>
    </div>`
}

const generateEngineers = engineersArr => {
    return `
    ${engineersArr
    .map(({ name, id, email, github, role }) => {
        return `
    <div class="card employee-card">
        <div class="card-header engineer">
            <h2 class="card-title">${name}</h2>
            <h3 class="card-title"><i class="fas fa-cogs mr-2"></i>${role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank" rel="noopener noreferrer">${github}</a></li>
            </ul>
        </div>
    </div>
        `;
    })
    .join('')}
`}

const generateInterns = internsArr => {
    return `
    ${internsArr
        .map(({ name, id, email, school, role }) => {
            return `
    <div class="card employee-card">
        <div class="card-header intern">
            <h2 class= "card-title">${name}</h2>
            <h3 class="card-title"><i class="fas fa-graduation-cap mr-2"></i>${role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
        </div>
    </div>
    `;
    })
    .join('')}
`};

module.exports = templateData => {
    const {interns, engineers, ...manager} = templateData;

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="navbar navbar-dark bg-secondary text-center">
        <span class="navbar-brand mb-0 w-100 h1 text-white"><i class="fas fa-users-cog"></i>Team Profile Generator</span>
    </nav>
    <main class="container my-5">
        <div class="row justify-content-center">
       ${generateManager(manager)}
       ${generateEngineers(engineers)}
       ${generateInterns(interns)}
       </div>
      </main>
</body>
</html>
    `
}