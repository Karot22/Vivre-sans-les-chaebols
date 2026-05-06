<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Définition</title>
    <link rel="stylesheet" href="../style.css">
</head>

<body class="def">
    <?php include 'menu.php';?>

    <div class="content hidden" id="content">
        <p id="definition"></p>
        <div class="def-next">
            <img class="passer" id="skip" src="../img/fleche-droite-2.png" onclick="goNext()">
        </div>
    </div>

    <script src="../script.js"></script>
</body>

</html>