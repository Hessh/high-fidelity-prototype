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
    <title>Restore - Velg leveringsmetode</title>
</head>

<body>
<?php include './includes/header.php' ?>
<?php include './includes/progress.php' ?>
<div class="container-fluid first">
    <div class="container">

        <div class="row">
            <div class="col-12">
                <h1 class="main-title">Velg leveringsmetode</h1>
            </div>
        </div>
        <div class="row icon-wrapper">
            <div class="col-4 icon-container">
                <img src="img/register.png" alt="Icon">
            </div>

            <div class="col-2 text-container center" style="align-self: center">ELLER</div>

            <div class="col-4 icon-container">
                <img src="img/value.png" alt="Icon">
                <div class="col-push-1"></div>
            </div>
        </div>
        <div class="row delivery-button">
            <div class="col-push-1"></div>
            <div class="col-4 center">
                <button class="cta-buttons" onclick="showStores()">Lever i nærmeste butikk</button>
            </div>
            <div class="col-2"></div>
            <div class="col-4 center">
                <button class="cta-buttons" onclick="showForm()">Få tilsendt pose hjem</button>
            </div>
            <div class="col-push-1"></div>
        </div>
        <div class="row map-container">

            <iframe class="center"
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d16001.862170515704!2d10.725829863523485!3d59.91168414726755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shelly%20hansen!5e0!3m2!1sen!2sno!4v1576588704343!5m2!1sen!2sno"
                    width="800" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            <div class="col-12 button-container">
                <a class="center" href="done.php">
                    <button class="cta-button">Fullfør</button>
                </a>
            </div>
        </div>
        <div class="row form-container">
            <div class="col-push-3"></div>
            <div class="col-6 input-form center">
                <label for="name">Navn</label>
                <input type="text" id="name" placeholder="Ditt navn">
                <label for="mail">E-post</label>
                <input type="mail" id="mail" placeholder="Din e-post adresse">
                <label for="address">Adresse</label>
                <input type="text" id="address" placeholder="Din gateadresse">
                <div>
                    <label for="zip" class="col-4">Postnummer</label>
                    <div class="col-push-1"></div>
                    <label for="area" class="col-6" style="padding-left: 3rem;">Poststed</label>
                    <input type="zipcode" id="zip" placeholder="Postnummer" class="col-3" style="margin-right: 4.24rem;">
                    <div class="col-3"></div>
                    <input type="text" id="area" placeholder="Poststed" class="col-6" style="padding-right:1.2rem;">
                </div>
                <a class="center" href="done.php">
                    <button class="submit-button">Fullfør</button>
                </a>
            </div>
            <div class="col-push-3"></div>
        </div>
    </div>
</div>
<?php include './includes/footer.php' ?>
<script src="js/menu.js"></script>
<script src="js/script.js"></script>
<script src="js/delivery.js"></script>
</body>

</html>