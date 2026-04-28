<?php
echo '
<div id="menuBtn" class="menu-btn">
  <img id="menuIcon" src="img/menu.png" alt="menu">
</div>

<div id="menuOverlay" class="menu-overlay"></div>

<div id="menu" class="menu">

  <div class="menu-links">
    <div class="menu-item" id="goDual"><a href="dual.html">Accueil</a></div>
    <div class="menu-item" id="goDoc"><a href="documentaire.html">Regarder le documentaire en entier</a></div>
    <div class="menu-item" id="goAnnexe"><a href="annexes.html">Annexes</a></div>
    <div class="menu-item" id="goLegal"><a href="mentions-legales.html">Mentions légales</a></div>
  </div>

  <div class="menu-lang">
    <p>Langues :</p>
    <button data-lang="fr">FR</button>
    <button data-lang="en">EN</button>
    <button data-lang="kr">KR</button>
  </div>
</div>
';
?>