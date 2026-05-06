<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Se nourrir et avoir une vie sociale</title>
    <link rel="stylesheet" href="../style.css">
</head>

<body class="se-nourrir">

   <?php include 'menu.php';?>

    <div class="nourrir">
        <iframe class="vid" id="vidSeNourrir" src="https://player.vimeo.com/video/1097036952?h=43a64563f3&autoplay=0&title=0&byline=0&portrait=0"
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
            <div class="info-complementaire" id="apr4"><p>Annexes complémentaires</p></div>
            <div class="suite" id="conclusion"><p>Conclusion</p></div>
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