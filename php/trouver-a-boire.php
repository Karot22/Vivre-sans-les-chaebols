<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Trouver à boire</title>
    <link rel="stylesheet" href="../style.css">
</head>

<body class="trouver-boire">

    <?php include 'menu.php';?>

    <div class="boire">
        <iframe class="vid" id="vidTrouverBoire" src="https://player.vimeo.com/video/1189727859?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen>
        </iframe>
        <div class="next">
            <img class="passer" id="skip" src="../img/fleche-droite-2.png">
            <p>Passer la vidéo</p>
        </div>
        <div class="previous">
            <img class="passer" id="retour" src="../img/fleche-gauche-2.png" onclick="history.back()">
            <p>Retour</p>
        </div>
        <div class="replay" id="replayBtn">
            <img class="rejouer" id="replays" src="../img/rejouer.png">
        </div>
    </div>
    
    <div class="cacher">    
        <div class="boutons">
            <div class="info-complementaire" id="itw2"><p>Voir l'interview complète</p></div>
            <div class="info-complementaire" id="mini-jeu"><p>Mini-jeu</p></div>
            <div class="suite" id="poserQ"><p>Poser d'autres questions à Minseo</p></div>
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