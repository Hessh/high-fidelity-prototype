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
    <?php include './includes/progress.php' ?>
    <div class="container-fluid first">
        <div class="container condition-container">
            <div class="row">
                <div class="col-12">
                    <h1 class="main-title">Vurder plaggets tilstand</h1>
                </div>
            </div>
            <!-- AGE -->
            <div class="background condition-containers">
                <div class="row">
                    <div class="col-push-2"></div>
                    <div class="col-8">
                        <h2>Hvor gammelt er plagget?</h2>
                    </div>
                    <div class="col-push-2"></div>
                </div>
                    <div class="row">
                        <div class="col-push-2"></div>
                        <div class="col-2 content-center column ">
                            <div class="radio-buttons">
                                <input type="radio" name="age" id="first">
                                <label for="first">0-2 år</label>
                            </div>
                        </div>

                        <div class="col-2 content-center column">
                            <div class="radio-buttons">
                                <input type="radio" name="age" id="second">
                                <label for="second">3-5 år</label>
                            </div>
                        </div>
                        <div class="col-2 content-center column">
                            <div class="radio-buttons">
                                <input type="radio" name="age" id="third">
                                <label for="third">6-8 år</label>
                            </div>
                        </div>
                        <div class="col-2 content-center column">
                            <div class="radio-buttons">
                                <input type="radio" name="age" id="fourth">
                                <label for="fourth">9+ år</label>
                            </div>
                        </div>
                        <div class="col-push-2"></div>
                    </div>
            </div>
            <!-- WORN -->
            <div class="condition-containers">
                <div class="row">
                    <div class="col-push-2"></div>
                    <div class="col-8">
                        <h2>Hvor slitt er plagget?</h2>
                    </div>
                    <div class="col-push-2"></div>
                </div>
                <div class="row">
                    <div class="col-push-2"></div>
                    <div class="col-2 content-center column">
                        <div class="radio-buttons">
                            <input type="radio" name="worn" id="as-new">
                            <label for="as-new">Som ny</label>
                        </div>
                    </div>
                    <div class="col-2 content-center column">
                        <div class="radio-buttons">
                            <input type="radio" name="worn" id="easy-worn">
                            <label for="easy-worn">Litt slitt</label>
                        </div>
                    </div>
                    <div class="col-2 content-center column">
                        <div class="radio-buttons">
                            <input type="radio" name="worn" id="worn">
                            <label for="worn">Slitt</label>
                        </div>
                    </div>
                    <div class="col-2 content-center column">
                        <div class="radio-buttons">
                            <input type="radio" name="worn" id="very-worn">
                            <label for="very-worn">Veldig slitt</label>
                        </div>
                    </div>
                    <div class="col-push-2"></div>
                </div>
            </div>
            <!-- SIZE -->
            <div class="background condition-containers">
                <div class="row">
                    <div class="col-push-2"></div>
                    <div class="col-8">
                        <h2>Hvilken størrelse er plagget?</h2>
                    </div>
                    <div class="col-push-2"></div>
                </div>
                <div class="row">
                    <div class="col-push-2"></div>
                    <div class="col-2 content-center column">
                        <div class="radio-buttons">
                            <input type="radio" name="size" id="S">
                            <label for="S">Small</label>
                        </div>
                    </div>
                    <div class="col-2 content-center column">
                        <div class="radio-buttons">
                            <input type="radio" name="size" id="M">
                            <label for="M">Medium</label>
                        </div>
                    </div>
                    <div class="col-2 content-center column">
                        <div class="radio-buttons">
                            <input type="radio" name="size" id="L">
                            <label for="L">Large</label>
                        </div>
                    </div>
                    <div class="col-2 content-center column">
                        <div class="radio-buttons">
                            <input type="radio" name="size" id="XL">
                            <label for="XL">Extra Large</label>
                        </div>
                    </div>
                    <div class="col-push-2"></div>
                </div>
            </div>

            <!-- UPLOAD PICTURE -->
            <div class="row">

                <div class="col-8">
                    <h2>Legg ved bilde av ditt plagg (anbefales)</h2>
                </div>
                
                <form runat="server">
                   <!-- <div class = "imgImpContainer cta-button upload-button"> -->
                    <!--    Upload File -->
                        <input class="cta-button upload-button"  type='file' id="imgInp" />
                     <!--</div> -->
                    <!--<img id="customerProdImg" src="#" /> -->
                </form>

                <div class="col-push-2"></div>
                <div class="col-8">
                    <img id="customerProdImg" src="#" class="preview"/>

                </div>
                <div class="col-push-2"></div>
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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script> <!-- Load jquery in order to display images -->
    <script src="js/condition.js"></script>

</body>

</html>