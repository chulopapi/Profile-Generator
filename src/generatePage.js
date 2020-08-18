const generatePage = (manager, engineers, interns) => {

    // Generates the template for final HTML page
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
        <header class="container-fluid">
            <nav class="navbar navbar-dark justify-content-center" style="background-color: #E84756;">
                <h1 class=" text-light p-4">The Team</h1>
            </nav>
        </header>
        <main class="container">
            <!-- Manager section row -->
            <section class="row justify-content-center mt-md-5">
                <div class="col-12 d-block text-center my-2">
                    ${manager}
                </div>
            </section>
            <!-- Engineer section row -->
            <section class="row justify-content-center mt-md-4">
                <div class="col-12 d-block text-center my-2"><h3>${(engineers) ? '' : ''}</h3></div>
                ${engineers}
            </section>
            <!-- Intern section Row -->
            <section class="row justify-content-center mt-md-4">
                <div class="col-12 d-block text-center my-2"><h3>${(interns) ? '' : ''}</h3></div>
                ${interns}
            </section>
        </main>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
    `
}
module.exports = generatePage;