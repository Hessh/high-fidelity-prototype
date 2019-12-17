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
                    <h1 class="main-title">Registrer produkt</h1>
                </div>
            </div>
            <!-- AGE -->
            <div class="row">
                <div class="col-12">
                    <div class="col-12 content-center">
                        <h2>Alder</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 content-center">
                        <input type="radio">
                    </div>
                    <div class="col-3 content-center">
                        <input type="radio">
                    </div>
                    <div class="col-3 content-center">
                        <input type="radio">
                    </div>
                    <div class="col-3 content-center">
                        <input type="radio">
                    </div>
                </div>
            </div>
            <!-- DEGRATATION -->
            <div class="row">
            <div class="col-12">
                    <div class="col-12 content-center">
                        <h2>Slitasje</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 content-center">
                        <input type="radio">
                    </div>
                    <div class="col-3 content-center">
                        <input type="radio">
                    </div>
                    <div class="col-3 content-center">
                        <input type="radio">
                    </div>
                    <div class="col-3 content-center">
                        <input type="radio">
                    </div>
                </div>
            </div>
            <!-- SIZE -->
            <div class="row">
                <div class="col-12">
                    <div class="col-12 content-center">
                        <h2>Størrelse</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 content-center column">
                        <label for="S">S</label>
                        <input type="radio" id="S">
                    </div>
                    <div class="col-3 content-center column">
                        <label for="M">M</label>
                        <input type="radio" id="M">
                    </div>
                    <div class="col-3 content-center column">
                        <label for="L">L</label>
                        <input type="radio" id="L">
                    </div>
                    <div class="col-3 content-center column">
                        <label for="XL">XL</label>
                        <input type="radio" id="XL">
                    </div>
                </div>
            </div>
            <!-- UPLOAD PICTURE -->
            <div class="row">
                <div class="col-12">
                    <h2>Bilde (valgfritt)</h2>
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