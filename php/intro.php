<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Introduction</title>
    <link rel="stylesheet" href="../style.css">
</head>

<body class="intro">

   <?php include 'menu.php';?>


    <div class="Introduction">
        <iframe class="vid" id="vidIntroduction" src="https://player.vimeo.com/video/1189727859?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479?autoplay=1"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen>
        </iframe>
        <div class="next">
            <img class="passer" id="skip" src="../img/fleche-droite-2.png">
            <p id="skipVideo">Passer la vidéo</p>
        </div>
        <div class="previous">
            <img class="passer" id="retour" src="../img/fleche-gauche-2.png" onclick="history.back()">
            <p id="btnRetour">Retour</p>
        </div>
        <div class="replay" id="replayBtn">
            <img class="rejouer" id="replays" src="../img/rejouer.png">
        </div>
    </div>
    
    <div class="cacher">
        <div class="boutons">
            <div class="info-complementaire" id="apr1"><p id="apr1Text">Naissance de Chaebols</p></div>
            <div class="info-complementaire" id="chaebolsvs"><p id="chaebolsvsgde">Chaebol vs grande entreprise</p></div>
            <div class="suite" id="preparer1"><p id="preparerText">Se préparer à partir</p></div>
        </div>
    </div>

    <div class="slider" id="slider">
        <div class="slider-content" id="sliderContent">
        <!-- contenu dynamique -->
        </div>

        <div class="closeSlider" id="closeSlider">✕</div>
    </div>
    
    
    <script src="https://player.vimeo.com/api/player.js"></script>
    <script src="../script.js"></script>
</body>

</html>