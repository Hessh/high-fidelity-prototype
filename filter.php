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
<div class="container-fluid first">
    <div class="row text-row-container text-row-container-left">
        <div id="filter-brand" class="col-2 text-container"></div>
        <div id="filter-category" class="col-2 text-container"></div>
        <div id="filter-sub-category" class="col-2 text-container"></div>
        <div id="filter-gender" class="col-2 text-container"></div>
        <div id="filter-color" class="col-2 text-container"></div>
        <div id="filter-model" class="col-2 img-container"></div>
    </div>
    <div id="instruction-container" class="container"></div>
    <div id="products-container" class="container"></div>
</div>
<?php include './includes/footer.php' ?>
<script src="js/menu.js"></script>
<script src="js/script.js"></script>
<script src="js/products.js"></script>
<script src="js/filter.js"></script>
<script>
    renderFilterPage();
</script>
</body>

</html>