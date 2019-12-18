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
                    <a href="filter.php"><button class="top-nav-button cta-button">Registrer plagg<span class="material-icons-outlined arrow">keyboard_arrow_right</span></button></a>
                </div>
                <!-- OVERVIEW -->
                <div class="row">
                    <div class="col-12">
                        <button id="discounts" class="discounts card">
                            <span class="col-4 material-icons-outlined color">monetization_on</span>
                            <h1 class="col-4">Dine rabatter</h1>
                            <h1 class="col-4">3/10</h1>
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <button id="orders" class="orders card">
                            <span class="col-4 material-icons-outlined color">bookmarks</span>
                            <h1 class="col-4">Dine order</h1>
                            <div class="col-4 status">
                                <h2>Ferdig behandlet: 3</h2>
                                <h2>Under behandling: 0</h2>
                            </div>
                        </button>
                    </div>
                </div>
                <!-- DISCOUNTS -->
                <div class="row">
                    <div class="col-12">
                        <button id="discount-1" class="discount-card card" onclick="exitDiscount()" data-id="0">
                            <div class="col-3">
                                <img src="img/logo/fjellreven.png" alt="Logo">
                            </div>
                            <div class="col-3">
                                <h1 class="sum">400,-</h1>
                            </div>
                            <div class="col-6">
                                <h3>150 kroner avslag ved ditt neste kjøp i butikk hos Fjellräven.</h3>
                                <h4>Utstedt 30/12-2019. Varighet 30/12-2020.</h4>
                            </div>
                        </button>
                    </div>
                    <div class="col-12">
                        <button id="discount-1" class="discount-card card" onclick="exitDiscount()" data-id="0">
                            <div class="col-3">
                                <img src="img/logo/stormberg.png" alt="Logo">
                            </div>
                            <div class="col-3">
                                <h1 class="sum">400,-</h1>
                            </div>
                            <div class="col-6">
                                <h3>400 kroner avslag ved ditt neste kjøp i butikk hos Stormberg.</h3>
                                <h4>Utstedt 21/09-2019. Varighet 21/09-2020.</h4>
                            </div>
                        </button>
                    </div>
                    <div class="col-12">
                        <button id="discount-1" class="discount-card card" onclick="exitDiscount()" data-id="0">
                            <div class="col-3">
                                <img src="img/logo/hh.png" alt="Logo">
                            </div>
                            <div class="col-3">
                                <h1 class="sum">250,-</h1>
                            </div>
                            <div class="col-6">
                                <h3>250 kroner avslag ved ditt neste kjøp i butikk hos Helly Hansen.</h3>
                                <h4>Utstedt 09/07-2019. Varighet 09/07-2020.</h4>
                            </div>
                        </button>
                    </div>
                </div>
                <!-- ORDERS -->
                <div class="row">
                    <div class="col-12">
                        <button id="order-1" class="order-card card" onclick="showOrder()" data-id="0">
                            <div class="col-3">
                                <img src="img/logo/fjellreven.png" alt="Picture">
                            </div>
                            <div class="col-3">
                                <h2>Sekk</h2>
                                <h3>16 liter, Rød</h3>
                            </div>
                            <div class="col-6">
                                <h2>Estimert verdi på gavekort: 100,-</h2>
                                <h3>Registrert: 30/12-2019</h3>
                            </div>
                        </button>
                    </div>
                    <div class="col-12">
                        <button id="order-1" class="order-card card" onclick="showOrder()" data-id="0">
                            <div class="col-3">
                                <img src="img/logo/stormberg.png" alt="Picture">
                            </div>
                            <div class="col-3">
                                <h2>Genser</h2>
                                <h3>Woodie, Grå</h3>
                            </div>
                            <div class="col-6">
                                <h2>Estimert verdi på gavekort: 350,-</h2>
                                <h3>Registrert: 21/09-2019</h3>
                            </div>
                        </button>
                    </div>
                    <div class="col-12">
                        <button id="order-1" class="order-card card" onclick="showOrder()" data-id="0">
                            <div class="col-3">
                                <img src="img/logo/hh.png" alt="Picture">
                            </div>
                            <div class="col-3">
                                <h2>Jakke</h2>
                                <h3>Skagen offshore, Blå</h3>
                            </div>
                            <div class="col-6">
                                <h2>Estimert verdi på gavekort: 250,-</h2>
                                <h3>Registrert: 01/07-2019</h3>
                            </div>
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