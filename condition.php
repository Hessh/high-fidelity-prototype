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
        <div class="container condition-container">
            <div class="row">
                <div class="col-12">
                    <h1 class="main-title">Registrer produkt</h1>
                </div>
            </div>
            <!-- AGE -->
            <div class="row">
                <div class="col-12">
                    <div class="col-12">
                        <h2>Alder</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-push-2"></div>
                    <div class="col-2 content-center ">
                        <div class="col content-center column">
                            <div class="radio-buttons">
                                <label for="first">0-2</label>
                                <input type="radio" name="age" id="first">
                            </div>
                        </div>
                    </div>
                    <div class="col-2 content-center column">
                        <div class="radio-buttons">
                            <label for="second">3-5</label>
                            <input type="radio" name="age" id="second">
                        </div>
                    </div>
                    <div class="col-2 content-center column">
                        <div class="radio-buttons">
                            <label for="third">6-8</label>
                            <input type="radio" name="age" id="third">
                        </div>
                    </div>
                    <div class="col-2 content-center column">
                        <div class="radio-buttons">
                            <label for="fourth">9+</label>
                            <input type="radio" name="age" id="fourth">
                        </div>
                    </div>
                    <div class="col-push-2"></div>
                </div>
            </div>
            <!-- WORN -->
            <div class="row">
            <div class="col-12">
                    <div class="col-12">
                        <h2>Slitasje</h2>
                    </div>
                </div>
                <div class="row">
                <div class="col-push-2"></div>
                    <div class="col-2 content-center column">
                        <div class="radio-buttons">
                            <label for="as-new">Som ny
                            <input type="radio" name="worn" id="as-new">
                            </label>
                            
                        </div>
                    </div>
                    <div class="col-2 content-center column">
                        <div class="radio-buttons">
                            <label for="easy-worn">Litt slitt</label>
                            <input type="radio" name="worn" id="easy-worn">
                        </div>
                    </div>
                    <div class="col-2 content-center column">
                        <div class="radio-buttons">
                            <label for="worn">Slitt</label>
                            <input type="radio" name="worn" id="worn">
                        </div>
                    </div>
                    <div class="col-2 content-center column">
                        <div class="radio-buttons">
                            <label for="very-worn">Veldig slitt</label>
                            <input type="radio" name="worn" id="very-worn">
                        </div>
                    </div>
                    <div class="col-push-2"></div>
                </div>
            </div>
            <!-- SIZE -->
            <div class="row">
                <div class="col-12">
                    <div class="col-12">
                        <h2>Størrelse</h2>
                    </div>
                </div>
                <div class="row">
                <div class="col-push-2"></div>
                    <div class="col-2 content-center column">
                        <div class="radio-buttons">
                            <label for="S">S</label>
                            <input type="radio" name="size" id="S">
                        </div>
                    </div>
                    <div class="col-2 content-center column">
                        <div class="radio-buttons">
                            <label for="M">M</label>
                            <input type="radio" name="size" id="M">
                        </div>
                    </div>
                    <div class="col-2 content-center column">
                        <div class="radio-buttons">
                            <label for="L">L</label>
                            <input type="radio" name="size" id="L">
                        </div>
                    </div>
                    <div class="col-2 content-center column">
                        <div class="radio-buttons">
                            <label for="XL">XL</label>
                            <input type="radio" name="size" id="XL">
                        </div>
                    </div>
                    <div class="col-push-2"></div>
                </div>
            </div>
            <!-- UPLOAD PICTURE -->
            <div class="row">
                <div class="col-12">
                    <h2>Bilde (anbefales)</h2>
                </div>
                <div class="col-12">
                    <button class="cta-button upload-button" onclick="showImg()">Last opp bilde</button>
                </div>
                <div class="col-12">
                    <div class="preview"></div>
                </div>
            </div>
            <!-- CTA BUTTON -->
            <div class="row">
                <div class="col-12 button-container center">
                    <button class="cta-button estimate-button" onclick="estimate()">Beregn verdi</button>
                </div>
            </div>
        </div>
        <div class="container estimate-container">
            <div class="row">
                <div class="col-12">
                    <h2 class="main-title">Estimert verdi:</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-push-2"></div>
                <div class="col-8">
                    <h1 class="text-center">250,-</h1>
                    <h3 class="text-center">avslag ved ditt neste kjøp i butikk hos Helly Hansen</h3>
                    <p class="text-center">Dette vil bli endelig verdivurdert hos våre eksperter når du mottar et endelig tilbud i løpet av de neste virkedagene.</p>
                </div>
                <div class="col-push-2"></div>
            </div>
            <!-- NEXT BUTTON -->
            <div class="row">
                <div class="col-12 button-container">
                    <a class="center" href="delivery.php"><button class="cta-button">Videre</button></a>
                </div>
            </div>
        </div>
    </div>
    <?php include './includes/footer.php' ?>
    <script src="js/menu.js"></script>
    <script src="js/script.js"></script>
    <script src="js/condition.js"></script>
</body>

</html>