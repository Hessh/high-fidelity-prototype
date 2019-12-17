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
                    <div class="col-3 content-center ">
                        <div class="col content-center column">
                            <label for="first">0-2</label>
                            <input type="radio" id="first">
                        </div>
                    </div>
                    <div class="col-3 content-center column">
                        <label for="second">3-5</label>
                        <input type="radio" id="second">
                    </div>
                    <div class="col-3 content-center column">
                        <label for="third">6-8</label>
                        <input type="radio" id="third">
                    </div>
                    <div class="col-3 content-center column">
                        <label for="fourth">9+</label>
                        <input type="radio" id="fourth">
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
                    <div class="col-3 content-center column">
                        <label for="as-new">Som ny</label>
                        <input type="radio" id="as-new">
                    </div>
                    <div class="col-3 content-center column">
                        <label for="easy-worn">Litt slitt</label>
                        <input type="radio" id="easy-worn">
                    </div>
                    <div class="col-3 content-center column">
                        <label for="worn">Slitt</label>
                        <input type="radio" id="worn">
                    </div>
                    <div class="col-3 content-center column">
                        <label for="very-worn">Veldig slitt</label>
                        <input type="radio" id="very-worn">
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
                    <h2>Bilde (anbefales)</h2>
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
            <!-- NEXT BUTTON -->
            <div class="row">
                <div class="col-12 button-container">
                    <a href="delivery.php"><button class="cta-button">Videre</button></a>
                </div>
            </div>
        </div>
    </div>
    <?php include './includes/footer.php' ?>
    <script src="js/menu.js"></script>
    <script src="js/script.js"></script>
</body>

</html>