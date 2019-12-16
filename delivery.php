<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/header.css">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/delivery.css">
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="stylesheet" href="./css/responsive.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli:400,600,700,800&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined">
    <title>Restore - Leveringsmetode</title>
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
            <div class="row">
                <div class="col-6">
                    <button class="cta-button" onclick="">Lever i nærmeste butikk</button>
                </div>
                <div class="col-6">
                    <button class="cta-button" onclick="">Bestill pose hjem</button>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    Google
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <label for="name">Navn</label>
                    <input type="text" id="name">
                    <label for="mail">E-post</label>
                    <input type="text" id="mail">
                    <label for="address">Adresse</label>
                    <input type="text" id="address">
                </div>
            </div>
        </div>
    </div>
    <?php include './includes/footer.php' ?>
    <script src="js/menu.js"></script>
    <script src="js/script.js"></script>
</body>

</html>