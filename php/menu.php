<?php
echo '
<div id="menuBtn" class="menu-btn">
  <img id="menuIcon" src="../img/menu-2.png" alt="menu">
</div>

<div id="menuOverlay" class="menu-overlay"></div>

<div id="menu" class="menu">

  <div class="menu-links">
    <div class="menu-item" id="goDual"><a href="dual.php">Accueil</a></div>
    <div class="menu-item" id="goDoc"><a href="documentaire.php">Regarder le documentaire</a></div>
    <div class="menu-item" id="goAnnexe"><a href="annexes.php">Annexes</a></div>
    <div class="menu-item" id="goLegal"><a href="mentions-legales.php">Mentions légales</a></div>
  </div>

  <div class="menu-lang">
    <p>Langues :</p>
    <button data-lang="fr">FR</button>
    <button data-lang="en">EN</button>
    <button data-lang="kr">KR</button>
  </div>

  <div class="logos">
    <img src="../img/logo-dongeui-blanc.png" class="logo">
    <img src="../img/logo-univ-gustave-eiffel-1.png" class="logo">
    <img src="../img/logo-cmw-1.png" class="logo">
  </div> 
</div>
';
?>