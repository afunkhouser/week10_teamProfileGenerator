const generateManager = Manager => {
    return `
    <div>${Manager.name}</div>
    <div>${Manager.offceNumber}</div>
    <div>${Manager.email}</div>
    <div>${Manager.id}</div>`
}

module.exports = templateData => {
    const {interns, engineers, ...manager} = templateData;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href='style.css'>
        <title>Document</title>
    </head>
    <body>
        ${generateManager(manager)}
    </body>
    </html>
    `
}