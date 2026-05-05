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
        <iframe class="vid" id="vidIntroduction" src="https://player.vimeo.com/video/1097036952?h=43a64563f3&autoplay=0&title=0&byline=0&portrait=0"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen>
        </iframe>
        <div class="next">
            <img class="passer" id="skip" src="img/fleche-droite-2.png">
            <p>Passer la vidéo</p>
        </div>
        <div class="replay" id="replayBtn">
            <img class="rejouer" id="replays" src="img/rejouer.png">
        </div>
    </div>
    
    <div class="cacher">
        <div class="boutons">
            <div class="info-complementaire" id="apr1"><p>Approfondissement historique</p></div>
            <div class="info-complementaire" id="chaebolsvs"><p>Différences entre Chaebol et grande entreprise</p></div>
            <div class="suite" id="preparer1"><p>Se préparer à partir</p></div>
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