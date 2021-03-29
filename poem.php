<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>কন্যা | মারজিয়া মাহজাবিন</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous">
        <link rel="stylesheet" href="./styles/poems.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="./js/poem.js"></script>
    </head>
    <body>
        <?php require 'menu.php'; ?>
        <div class="container">
            <div class="single-poem">
                <h3 id="poem-name"></h3>
                <p id="full-poem"></p>
                <br/>
                <h4>এরকম আরও কবিতা</h4>
                <ul class="poem-list" id="other-poems"></ul>
            </div>
        </div>
    </body>
</html>