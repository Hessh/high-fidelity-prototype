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
                    <button class="top-nav-button" onclick="toggle(dataset.id)" data-id="0">Oversikt</button>
                    <button class="top-nav-button" onclick="toggle(dataset.id)" data-id="1">Rabatter</button>
                    <button class="top-nav-button" onclick="toggle(dataset.id)" data-id="2">Ordre</button>
                    <button class="top-nav-button" onclick="toggle(dataset.id)" data-id="3">Stats</button>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="discounts">
                            <h2>Rabatter</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="orders">
                            <h2>Order</h2>
                        </div>
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