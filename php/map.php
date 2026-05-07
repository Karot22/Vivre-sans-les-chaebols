<!DOCTYPE html>
<html>

<head>
    <title>Carte des différents trajets</title>
    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <link rel="stylesheet" href="../style.css">
    <style>
        #map {
            height: 500px;
            width: 100%;
        }
    </style>
</head>

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
        var map = L.map('map').setView([35.144, 129.036], 13);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap'
        }).addTo(map);

        var allBounds = L.latLngBounds();

        // Fonction pour charger un GPX
        function addGPX(file, color, text) {
            new L.GPX(file, {
                async: true,
                polyline_options: {
                    color: color,
                    opacity: 0.5,
                    weight: 4
                }

            }).on('loaded', function(e) {


                allBounds.extend(e.target.getBounds());
                map.fitBounds(allBounds);

                e.target.getLayers().forEach(layer => {

                    // 🔥 TOOLTIP
                    layer.bindTooltip(text, {
                        direction: "top",
                        offset: [0, -10],
                        className: "custom-tooltip"
                    });

                    layer.on('mouseover', () => {
                        layer.setStyle({
                            opacity: 1,
                            weight: 6
                        });
                    });

                    layer.on('mouseout', () => {
                        layer.setStyle({
                            opacity: 0.6,
                            weight: 4
                        });
                    });

                });


            }).addTo(map);
        }

        addGPX('../marche.gpx', '#1D3C3F', "🚶 Trajet à pied. <br> Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit. Ut porttitor metus vitae <br> porttitor semper. Mauris at magna et metus <br> fermentum molestie vel sed sapien. Nam tempor <br> lorem a sem sodales hendrerit non sed quam. <br> Ut id ligula ac magna tincidunt pellentesque. <br> Sed euismod massa enim, id facilisis justo <br> pharetra id. Cras non fermentum turpis. Nullam <br> laoreet dictum arcu commodo bibendum.");
        addGPX('../trajet-transport.gpx', 'red', "🚌 Trajet en transport. <br>  Lorem ipsum <br> dolor sit amet, consectetur <br> adipiscing elit. Ut porttitor <br> metus vitae porttitor semper. Mauris <br> at magna et metus fermentum molestie <br> leo.");

        // Légende

        /*Legend specific*/
        var legend = L.control({
            position: "bottomleft"
        });

        legend.onAdd = function(map) {
            var div = L.DomUtil.create("div", "legend");
            div.innerHTML += "<h4>Légende</h4>";
            div.innerHTML += '<svg width="40" height="20" viewBox="0 0 25 25"><line x1="0" y1="12.5" x2="25" y2="12.5" style="stroke-width: 4; stroke: #1D3C3F;"></line></svg><span>Trajet parcouru à pied</span></div> <br>';
            div.innerHTML += '<svg width="40" height="20" viewBox="0 0 25 25"><line x1="0" y1="12.5" x2="25" y2="12.5" style="stroke-width: 4; stroke: red;"></line></svg><span>Trajet en transport</span></div> <br>';

            return div;
        };

        legend.addTo(map);
    </script>
</body>

</html>