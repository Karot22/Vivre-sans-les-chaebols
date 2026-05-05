<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Déplacer 1</title>
    <link rel="stylesheet" href="../style.css">
</head>

<body class="deplacer1">

    <?php include 'menu.php';?>


    <div class="deplacer">
        <iframe class="vid" id="vidDeplacer1" src="https://player.vimeo.com/video/1096384424?h=f4a5a934dc&color=ffffff&title=0&byline=0&portrait=0"
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
            <div class="info-complementaire" id="apr2"><p>Annexes complémentaires</p></div>
            <div class="info-complementaire" id="itw1"><p>Visionner l'interview en entier</p></div>
            <!-- <div class="carte" id="carte1"><p>Carte de Busan</p></div> -->
            <div class="suite" id="preparer2"><p>Partir</p></div>
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