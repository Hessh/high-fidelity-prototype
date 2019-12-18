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

    <div id="instruction-text" class="container"></div>

    <div id="instruction-progress" class="container">
        <div id="progress-brand" class="col-2 text-container center filter-progress">Merke</div>
        <div id="progress-category" class="col-2 text-container center filter-progress">Kategori</div>
        <div id="progress-sub-category" class="col-2 text-container center filter-progress">Underkategori</div>
        <div id="progress-gender" class="col-2 text-container center filter-progress">Kjønn</div>
        <div id="progress-color" class="col-2 text-container center filter-progress">Farge</div>
        <div id="progress-model" class="col-2 text-container center filter-progress">Modell</div>
    </div>
    <div class="container filter-drop-down-container">
            <select id="filter-brand" class="col-2 text-container"></select>
            <select id="filter-category" class="col-2 text-container"></select>
            <select id="filter-sub-category" class="col-2 text-container"></select>
            <select id="filter-gender" class="col-2 text-container"></select>
            <select id="filter-color" class="col-2 text-container"></select>
        </div>
    <div id="instruction-selector" class="container"></div>
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