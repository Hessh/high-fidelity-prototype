<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/header.css">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/filter.css">
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="stylesheet" href="./css/responsive.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli:400,600,700,800&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined">
    <title>Restore - Filtrering</title>
</head>

<body>
    <?php include './includes/header.php' ?>
    <div class="container-fluid">
        <div class="row text-row-container text-row-container-left">
                <div class="col-2 text-container">
                    <div id="filter"></div>
                </div>
                <div class="col-2 text-container">
                    <div id="filterCategory"></div>
                </div>
                <div class="col-2 text-container">
                    <div id="filterSubCategory"></div>
                </div>
                <div class="col-2 text-container">
                    <div id="Gender"></div>
                </div>
                <div class="col-4 img-container">
                    <img src="" alt="Illustrasjon">
                </div>
            </div>
            <!---
        <div id="products-container"></div>
        ---->
    </div>
    <?php include './includes/footer.php' ?>
    <script src="js/menu.js"></script>
    <script src="js/script.js"></script>
    <script src="js/products.js"></script>
    <script src="js/filter.js"></script>
<!---
    <script>
        for (i = 0; i < products.length; i++) {
            renderProduct(document.getElementById("products-container"), products[i]);
        }
    </script>
----->
</body>

</html>