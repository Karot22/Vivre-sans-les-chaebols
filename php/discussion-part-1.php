<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Discussion 1</title>
    <link rel="stylesheet" href="../style.css">
</head>

<body class="discussion1">

    <?php include 'menu.php';?>


    <div class="discussion">
        <iframe class="vid" id="vidDiscussion1" src="https://player.vimeo.com/video/1096384424?h=f4a5a934dc&color=ffffff&title=0&byline=0&portrait=0"
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
            <div class="info-complementaire" id="affaireSK"><p>L’affaire du SK Chemical et humidifier </p></div>
            <div class="info-complementaire" id="cultureU"><p>Culture universitaire liée aux Chaebols</p></div>
            <div class="suite" id="chercherB"><p>Aller chercher à boire</p></div>
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