<?php
echo '
    <style>
        #map { height: 500px; width: 100%; }
    </style>
<body class="carte">
    <div id="map"></div>
    <div class="previous-bgwhite">
            <img class="passer" id="retour" src="../img/fleche-gauche-2.png" onclick="history.back()">
            <p>Retour</p>
        </div>

    <!-- Leaflet JS -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <!-- Leaflet-GPX Plugin -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/2.1.0/gpx.js"></script>

    <script>
        // Initialize the map
        var map = L.map("map").setView([35.144, 129.036], 13);

        // Add OpenStreetMap tiles
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap"
        }).addTo(map);

        var allBounds = L.latLngBounds();

        // Fonction pour charger un GPX
        function addGPX(file, color) {
        new L.GPX(file, {
            async: true,
            polyline_options: {
            color: color,
            opacity: 0.3,
            weight: 3
            }
        }).on("loaded", function(e) {
            allBounds.extend(e.target.getBounds());
            map.fitBounds(allBounds);
        }).addTo(map);
        }

        // Ajout de plusieurs trajets
        addGPX("../marche.gpx", "red");
        addGPX("../trajet-transport.gpx", "blue");

        
    </script>
</body>

';

?>