<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Déplacer 2</title>
    <link rel="stylesheet" href="../style.css">
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/2.1.0/gpx.js"></script>
</head>

<body class="deplacer2">

    <?php include 'menu.php';?>

    <div class="deplacer-2">
        <iframe class="vid" id="vidDeplacer2" src="https://player.vimeo.com/video/1005118522?h=6329c725a8&texttrack=fr"
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
            <div class="info-complementaire" id="moyensD"><p>Les moyens de déplacements en Corée du Sud </p></div>
            <div class="info-complementaire" id="cheminT"><p>Voir le chemin tracé</p></div>
            <div class="suite" id="questionsM"><p>Poser des questions à Minseo</p></div>
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