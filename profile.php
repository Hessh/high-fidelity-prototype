<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/header.css">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/profile/style.css">
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="stylesheet" href="./css/responsive.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli:400,600,700,800&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined">
    <title>Restore - Din profil</title>
</head>

<body>
    <?php include './includes/header-profile.php' ?>
    <div class="container-fluid first">
        <div class="profile-container">
            <!-- RIGHT -->
            <div class="content-left">
                <div class="row">
                    <div class="profile-picture-container">
                        <img src="img/profile-picture.jpg" alt="Profilbilde">
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h2 class="name">Ola Nordmann</h2>
                        <div class="info-wrapper">
                            <span class="material-icons-outlined">email</span>
                            <span>ola-gutt1@gmail.com</span>
                        </div>
                        <div class="info-wrapper">
                            <span class="material-icons-outlined">room</span>
                            <span>Heiveien 1,<br>0570 Oslo</span>
                        </div>
                        <button id="edit-button" class="edit-button" onclick="editProfile()"><span class="material-icons-outlined">edit</span>Endre profil</button>
                    </div>
                </div>
            </div>
            <!-- RIGHT -->
            <div class="content-right">
                <div class="top-nav">
                    <button class="top-nav-button" onclick="toOverview()" data-id="0"><span class="material-icons-outlined">home</span>Oversikt</button>
                    <button class="top-nav-button" onclick="toDiscounts()" data-id="1"><span class="material-icons-outlined">monetization_on</span>Rabatter</button>
                    <button class="top-nav-button" onclick="toOrders()" data-id="2"><span class="material-icons-outlined">bookmarks</span>Ordre</button>
                </div>
                <!-- OVERVIEW -->
                <div class="row">
                    <div class="col-12">
                        <button id="discounts" class="discounts card">
                            <span class="material-icons-outlined color">monetization_on</span>
                            <h3>Dine rabatter</h3>
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <button id="orders" class="orders card">
                            <span class="material-icons-outlined color">bookmarks</span>
                            <h3>Dine order</h3>
                        </button>
                    </div>
                </div>
                <!-- DISCOUNTS -->
                <div class="row">
                    <div class="col-12">
                        <button id="discount-1" class="discount-card card" onclick="exitDiscount()" data-id="0">
                            <img src="img/logo/hh.png" alt="Logo">
                            <h4>Helly Hansen</h4>
                            <p>Date</p>
                        </button>
                    </div>
                </div>
                <!-- ORDERS -->
                <div class="row">
                    <div class="col-12">
                        <button id="order-1" class="order-card card" onclick="showOrder()" data-id="0">
                            <img src="img/logo/hh.png" alt="Picture">
                            <h4>Helly Hansen</h4>
                            <p>Date</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php include './includes/footer.php' ?>
    <script src="js/menu.js"></script>
    <script src="js/script.js"></script>
    <script src="js/profile.js"></script>
</body>

</html>