<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/header.css">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/profile/style.css">
    <link rel="stylesheet" href="./css/profile/sidebar.css">
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="stylesheet" href="./css/responsive.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli:400,600,700,800&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined">
    <title>Restore - Din profil</title>
</head>

<body>
    <?php include './includes/header.php' ?>
    <div class="container-fluid first">
        <div class="profile-container">
            <div class="content-left">
                <?php include './includes/profile-sidebar.php' ?>
            </div>
            <div class="content-right">
                <div class="top-nav">
                    <button class="top-nav-button" onclick="toOverview()" data-id="0">Oversikt</button>
                    <button class="top-nav-button" onclick="toDiscounts()" data-id="1">Rabatter</button>
                    <button class="top-nav-button" onclick="toOrders()" data-id="2">Ordre</button>
                </div>
                <!-- INDEX -->
                <div class="row">
                    <div class="col-12">
                        <button id="discounts" class="discounts" onclick="toDiscounts()">
                            <h3>Dine rabatter</h3>
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <button id="orders" class="orders" onclick="toOrders()">
                            <h3>Dine order</h3>
                        </button>
                    </div>
                </div>
                <!-- DISCOUNTS -->
                <div class="row">
                    <div class="col-12">
                        <button id="discount-1" class="discount-card" onclick="exitDiscount()" data-id="0">
                            <img src="" alt="Logo">
                            <h4>Brand</h4>
                            <p>Date</p>
                        </button>
                    </div>
                    <div class="col-12">
                        <button id="discount-2" class="discount-card" onclick="exitDiscount()" data-id="1">
                            <img src="" alt="Logo">
                            <h4>Brand</h4>
                            <p>Date</p>
                        </button>
                    </div>
                    <div class="col-12">
                        <button id="discount-3" class="discount-card" onclick="exitDiscount()" data-id="2">
                            <img src="" alt="Logo">
                            <h4>Brand</h4>
                            <p>Date</p>
                        </button>
                    </div>
                </div>
                <!-- ORDERS -->
                <div class="row">
                    <div class="col-12">
                        <button id="order-1" class="order-card" onclick="showOrder()" data-id="0">
                            <img src="" alt="Picture">
                            <h4>Name</h4>
                            <p>Date</p>
                        </button>
                    </div>
                    <div class="col-12">
                        <button id="order-2" class="order-card" onclick="showOrder()" data-id="1">
                            <img src="" alt="Picture">
                            <h4>Name</h4>
                            <p>Date</p>
                        </button>
                    </div>
                    <div class="col-12">
                        <button id="order-3" class="order-card" onclick="showOrder()" data-id="2">
                            <img src="" alt="Picture">
                            <h4>Name</h4>
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