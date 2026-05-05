<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Discussion 2</title>
    <link rel="stylesheet" href="../style.css">
</head>

<body class="discussion2">

    <?php include 'menu.php';?>

    <div class="discussion">
        <iframe class="vid" id="vidDiscussion2" src="https://player.vimeo.com/video/1097036952?h=43a64563f3&autoplay=0&title=0&byline=0&portrait=0"
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
            <div class="info-complementaire" id="apr3"><p>Annexes complémentaires</p></div>
            <div class="info-complementaire" id="itw3"><p>Voir l'interview complète</p></div>
            <div class="suite" id="manger"><p>Aller manger</p></div>
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