<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/header.css">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/condition.css">
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="stylesheet" href="./css/responsive.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli:400,600,700,800&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined">
    <title>Restore - Tilstand</title>
</head>

<body>
    <?php include './includes/header.php' ?>
    <div class="container-fluid first">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="main-title">Hovedtittel</h1>
                </div>
            </div>
            <!-- AGE -->
            <div class="row">
                <div class="col-12">
                    <h2>Tittel</h2>
                </div>
                <div class="col-12">
                    <input type="radio">
                    <input type="radio">
                    <input type="radio">
                    <input type="radio">
                </div>
            </div>
            <!-- WEAR -->
            <div class="row">
                <div class="col-12">
                    <h2>Tittel</h2>
                </div>
                <div class="col-12">
                    <input type="radio">
                    <input type="radio">
                    <input type="radio">
                    <input type="radio">
                </div>
            </div>
            <!-- UPLOAD PICTURE -->
            <div class="row">
                <div class="col-12">
                    <h2>Tittel</h2>
                </div>
                <div class="col-12">
                    <button>Last opp bilde</button>
                </div>
                <div class="col-12">
                    <div class="preview"></div>
                </div>
            </div>
            <!-- CTA BUTTON -->
            <div class="row">
                <div class="col-12 button-container">
                    <button class="cta-button" onclick="estimate()">Beregn verdi</button>
                </div>
            </div>
        </div>
        <div class="container">
            MASSE PENGER
        </div>
    </div>
    <?php include './includes/footer.php' ?>
    <script src="js/menu.js"></script>
    <script src="js/script.js"></script>
</body>

</html>