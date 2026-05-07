const texts = {
  en: {
    title: "Living without Chaebols",
    subtitle: "Are you ready for the challenge?",
    def: "Chaebol (재벌) <br><br>A large business conglomerate in South Korea, typically owned and run by a single family. <br> It can be thought of as a family managing several companies under a single name. <br><br>",
    btnRetour: "Return",
    skipVideo: "Skip video",
    apr1Text: "Births of Chaebols",
    chaebolsvsgde:"Chaebol vs Large Corporation",
    preparerText:"Get ready to go",
    tDiffText:"Differences Between Chaebols and Large Corporations",
    defEtyText:"Etymological definition",
    chaeText:"Chae 재 = wealth",
    bolText:"bol 벌 = clan",
    chaebolText:"Chaebol = the wealthy class",

    
  
  },
  fr: {
    title: "Vivre sans les Chaebols",
    subtitle: "Seriez-vous prêt à relever le défi ?",
    def: "Chaebol (재벌) n.m<br><br>Grand conglomérat commercial en Corée du Sud, généralement détenu et dirigé par une seule famille. <br> On peut le considérer comme une famille gérant plusieurs entreprises sous un même nom. <br><br>",
    btnRetour: "Retour",
    skipVideo: "Passer la vidéo",
    apr1Text: "Naissances de Chaebols",
    chaebolsvsgde:"Chaebol vs Grande entreprise",
    preparerText:"Se préparer à partir",
    tDiffText:"Differences entre Chaebol et grande entreprise",
    defEtyText:"Définition étymologique",
    chaeText:"Chae 재 = richesse",
    bolText:"bol 벌 = clan",
    chaebolText:"Chaebol = clan des riches",

    

  },
  kr: {
    title: "재벌 없이 살기",
    subtitle: "도전할 준비가 되었나요?",
    def: "재벌 (Chaebol) <br><br>한국의 대형 상업계 그룹으로, 대개 한 가족이 소유하고 경영한다. <br> 이는 하나의 이름 아래 여러 기업을 운영하는 가족 기업으로 볼 수 있다. <br><br>",
    btnRetour: "뒤로",
    skipVideo: "동영상 건너뛰기",
    apr1Text: "재벌의 탄생",
    chaebolsvsgde:"재벌 대 대기업",
    preparerText:"떠날 준비하기",
    tDiffText:"재벌과 대기업의 차이점",
    defEtyText:"어원적 정의",
    chaeText:"Chae 재 = 부",
    bolText:"bol 벌 = 일족",
    chaebolText:"재벌 = 부자 집단",




  },
};
/*********************************/
/************* PAGE 1 ************/
/*********************************/

document.querySelectorAll(".flag").forEach(flag => {
  flag.addEventListener("mouseover", () => {
    const lang = flag.dataset.lang;
    document.getElementById("title").textContent = texts[lang].title;
    document.getElementById("subtitle").textContent = texts[lang].subtitle
  });

  flag.addEventListener("click", () => {
    const lang = flag.dataset.lang;
    localStorage.setItem("lang", lang);
    window.location.href = "php/definition.php";
  });
});


/*********************************/
/************* PAGE DEF **********/
/*********************************/

if (document.body.classList.contains("def")) {
  const lang = localStorage.getItem("lang") || "en";
  document.getElementById("definition").innerHTML = texts[lang].def;

  setTimeout(() => {
    document.getElementById("content").classList.add("show");
  }, 2000);
}

function goNext() {
  window.location.href = "dual.php";
}


/*********************************/
/************* PAGE DUAL *********/
/*********************************/

if (document.body.classList.contains("dual")) {
  document.querySelector(".left").onclick = () => {
    window.location.href = "intro.php";
  };

  document.querySelector(".right").onclick = () => {
    window.location.href = "documentaire.php";
  };
}


/*********************************/
/************* BACK **************/
/*********************************/

function goBack() {
  window.location.href = "dual.php";
}


/*********************************/
/************* PLAYERS ***********/
/*********************************/

let introPlayer = null;
let deplacerPlayer = null;


/*********************************/
/************* INTRO *************/
/*********************************/

if (document.body.classList.contains("intro")) {

  const lang = localStorage.getItem("lang") || "en";
  document.getElementById("btnRetour").innerHTML = texts[lang].btnRetour;
  document.getElementById("skipVideo").innerHTML = texts[lang].skipVideo;

  // document.getElementById("frise").src = "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vQRByxhwAz-Ac_rrRVguZtsp0sJ5h7y2v3JBwGaQW7cxjoEzKkf4tH9aXF30ZayVZVAeS6OUBfjSH2q&font=Default&lang="+[lang]+"&initial_zoom=2&width=100%25&height=100%";


  document.getElementById("apr1Text").innerHTML = texts[lang].apr1Text;
  document.getElementById("chaebolsvsgde").innerHTML = texts[lang].chaebolsvsgde;
  document.getElementById("preparerText").innerHTML = texts[lang].preparerText;
  

  const iframe = document.getElementById("vidIntroduction");
  const skip = document.getElementById("skip");
  const overlayIntro = document.querySelector(".cacher");
  const replay = document.getElementById("replayBtn");

  let done = false;

  if (iframe) {
    introPlayer = new Vimeo.Player(iframe);

    function showUI() {
      overlayIntro.classList.add("show");
      replay.classList.add("show");
      introPlayer.pause();
    }

    function hideUI() {
      overlayIntro.classList.remove("show");
      replay.classList.remove("show");
    }

    skip.onclick = showUI;

    introPlayer.on("ended", showUI);

    introPlayer.on("timeupdate", data => {
      if (!done && data.percent >= 0.999) {
        done = true;
        showUI();
      }
    });

    replay.onclick = async () => {
      done = false;
      hideUI();
      await introPlayer.setCurrentTime(0);
      introPlayer.play();
    };

    introPlayer.on("play", async () => {
      const t = await introPlayer.getCurrentTime();
      if (t < 1) {
        done = false;
        hideUI();
      }
    });
  }

  /******** SLIDER ********/

  const slider = document.getElementById("slider");
  const sliderContent = document.getElementById("sliderContent");

  document.getElementById("closeSlider").onclick = () => {
    slider.classList.remove("show");
  };


  document.getElementById("apr1").onclick = () => {
    sliderContent.innerHTML = `
    <iframe id="frise" src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vQRByxhwAz-Ac_rrRVguZtsp0sJ5h7y2v3JBwGaQW7cxjoEzKkf4tH9aXF30ZayVZVAeS6OUBfjSH2q&font=Default&lang=fr&initial_zoom=2&width=100%25&height=100%' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>
    `;
    slider.classList.add("show");
  };

  document.getElementById("chaebolsvs").onclick = () => {
    sliderContent.innerHTML = `

  <div class="grain">


    <h1 class="t-diff" id="tDiffText">Differences entre Chaebol et grande entreprise</h1>

    <div class="definition-box">
      
      <div class="definition-text">
        <p id="defEtyText"><strong>Définition étymologique</strong></p>
        <div class="chips">
          <span id="chaeText">Chae 재 = richesse</span>
          <span id="bolText">bol 벌 = clan</span>
          <span id="chaebolText">Chaebol = clan des riches</span>
        </div>
      </div>
    </div>

    <div class="cards">
      <div class="card">
        <div class="info">i</div>
        <h3>Chaebols</h3>
        <p>Conglomérat industriel sud-coréen de type familial, qui combine des activités très diverses, avec le soutien de l'État et des banques.</p>
      </div>

      <div class="card">
        <div class="info">i</div>
        <h3>Conglomérat</h3>
        <p>Ensemble d'entreprises réunies par des liens juridiques et financiers plus ou moins précis, avec des activités très diverses.</p>
      </div>

      <div class="card">
        <div class="info">i</div>
        <h3>Grande entreprise</h3>
        <p>Entreprise employant au moins 5000 salariés, avec un chiffre d'affaires supérieur à 1,5 milliard d'euros.</p>
      </div>
    </div>
    <br><br>
    <h1 class="t-comparaison">Tableau comparatif</h1>

  <div class="compare-grid">

    <div class="empty"></div>
    <div class="header">Grandes entreprises</div>
    <div class="header">Chaebols</div>

    <div class="label">Fonctionnement</div>
    <div class="cell">Machine à profit</div>
    <div class="cell">Système de pouvoir</div>

    <div class="label">Hiérarchie</div>
    <div class="cell">Le fondateur part et des gestionnaires prennent le relais</div>
    <div class="cell">Le pouvoir est dynastique</div>

    <div class="label">Spécialisation</div>
    <div class="cell">Se spécialise dans un domaine précis : luxe, électronique</div>
    <div class="cell">Aucune spécialisation, ils sont présents dans tous les domaines</div>

    <div class="label">Croissance</div>
    <div class="cell">Elle grandit par le marché</div>
    <div class="cell">Créés et financés par le gouvernement sud-coréen après la guerre</div>

    <div class="label">Statut</div>
    <div class="cell">Souvent une entité claire avec des filiales</div>
    <div class="cell">Amas d’entreprises juridiquement indépendantes mais liées</div>

  </div>

  </div>

  <br>
  <br>
  <br>

  <div class="timeline-item full">
  <div class="compare">
    <div class="textes-compare">

      <div class="compare-col">
        <h3>Chaebol</h3>
        <ul>
          <li>Système de pouvoir</li>
          <li>Le pouvoir est dynastique</li>
          <li>Aucune spécialisation, ils sont présents dans tous les domaines</li>
          <li>Créés et financés par le gouvernement sud-coréen après la guerre</li>
          <li>Amas d’entreprises juridiquement indépendantes mais liées</li>
        </ul>
      </div>

      <div class="compare-col">
        <h3>Grande entreprise</h3>
        <ul>
          <li>Machine à profit</li>
          <li>Le fondateur part et des gestionnaires prennent le relais</li>
          <li>Se spécialise dans un domaine précis : luxe, électronique</li>
          <li>Elle grandit par le marché</li>
          <li>Souvent une entité claire avec des filiales</li>
        </ul>
      </div>

    </div>
  </div>
</div>

  `;

  const lang = localStorage.getItem("lang") || "en";

  document.getElementById("tDiffText").innerHTML = texts[lang].tDiffText;
  document.getElementById("defEtyText").innerHTML = texts[lang].defEtyText;
  document.getElementById("chaeText").innerHTML = texts[lang].chaeText;
  document.getElementById("bolText").innerHTML = texts[lang].bolText;
  document.getElementById("chaebolText").innerHTML = texts[lang].chaebolText;

    slider.classList.add("show");
  };

  document.getElementById("preparer1").onclick = () => {
    window.location.href = "deplacer-part-1.php";
  };
}


/*********************************/
/************* DEPLACER 1 **********/
/*********************************/

if (document.body.classList.contains("deplacer1")) {

  const iframe = document.getElementById("vidDeplacer1");
  const skip = document.getElementById("skip");
  const overlay = document.querySelector(".cacher");
  const replay = document.getElementById("replayBtn");

  let done = false;

  if (iframe) {
    deplacerPlayer = new Vimeo.Player(iframe);

    function showUI() {
      overlay.classList.add("show");
      replay.classList.add("show");
      deplacerPlayer.pause();
    }

    function hideUI() {
      overlay.classList.remove("show");
      replay.classList.remove("show");
    }

    skip.onclick = showUI;

    deplacerPlayer.on("ended", showUI);

    deplacerPlayer.on("timeupdate", data => {
      if (!done && data.percent >= 0.999) {
        done = true;
        showUI();
      }
    });

    replay.onclick = async () => {
      done = false;
      hideUI();
      await deplacerPlayer.setCurrentTime(0);
      deplacerPlayer.play();
    };

    deplacerPlayer.on("play", async () => {
      const t = await deplacerPlayer.getCurrentTime();
      if (t < 1) {
        done = false;
        hideUI();
      }
    });
  }

  /******** SLIDER ********/

  const slider = document.getElementById("slider");
  const sliderContent = document.getElementById("sliderContent");

  document.getElementById("closeSlider").onclick = () => {
    slider.classList.remove("show");
  };

  document.getElementById("apr2").onclick = () => {
    sliderContent.innerHTML = `
    <div class="grain">
    <br>
    <h1>L'histoire de Hyundai</h1> 
    <div class="timeline">

  <div class="timeline-item gauche">
    <div class="img"><img src="../img/l_usine-de-fabrication-de-voiture-Hyundai.jpg"></div>
    <div class="timeline-content">
      <h3>1941 - 1947 : de naissance à renaissance</h3>
      <p>
      Hyundai est fondé en 1947 par Chung Ju-yung dans un contexte de reconstruction nationale après la Seconde Guerre mondiale. À l’origine, Hyundai ne naît pas comme un constructeur automobile. L'aventure automobile commence réellement en 1940. Après la fermeture forcée de son commerce de riz par les autorités coloniales, il rachète un atelier de réparation s’appelant Art Service Garage. Cette expérience lui permet d'acquérir une connaissance technique parfaite des véhicules, posant ainsi les racines de son futur empire.
      </p>
    </div>
  </div>

  
    <div class="timeline-item full">
      <div class="timeline-content">
      <h3>1940 - 1947 : Rapide évolution</h3>
      <p>
      Dans les années 1940, l’atelier de réparation se distingue par son efficacité et sa rapidité, valeurs qui deviendront caractéristiques de Hyundai. L’entreprise se développe rapidement, passant d’une vingtaine à environ soixante-dix employés en quelques années. Cette croissance attire l’attention des autorités, qui intègrent temporairement l’activité dans l’effort de guerre, renforçant encore l’expérience organisationnelle du fondateur. En avril 1946, un an après de l'indépendance du pays, Chung Ju-yung a fondé le "Hyundai Motor Service Center", utilisant pour la première fois le nom "Hyundai". Son atelier se distingue par une efficacité hors pair, transformant par exemple des camions de 1,5 tonne en 2,5 tonnes. Grâce à cette première réussite, il a fondé en 1947 Hyundai Engineering & Construction. L’entreprise participe activement au développement du pays après la guerre en construisant des routes, posant les bases du développement économique et des systèmes de transport modernes.
      </p>
      </div>
    </div>

  
  <div class="timeline-item droite">
    <div class="img"><img src="../img/Hyundai-signed-a-construction-contract-with-the-U.S.-military.jpg" alt=""></div>
    <div class="timeline-content">
      <h3>1947 - 1967 : Vision de l’entreprise</h3>
      <p>
      De 1947 à 1967, le développement de Hyundai repose sur une vision globale portée par son fondateur. Chung Ju-yung considère que « les routes sont les veines du pays, et les voitures le sang qui les irrigue ». Cette métaphore montre une pensée logique est que construire des infrastructures implique aussi de développer les moyens de circulation. C’est dans cette raison que Hyundai entre officiellement dans l’industrie automobile et continue à croître jusqu’à aujourd’hui, devenant l’un des plus grands conglomérats diversifiés de Corée du Sud.
      </p>
    </div>
  </div>

  <div class="timeline-item full">
    <div class="timeline-content">
      <h3>1967 : Hyundai Motor Company</h3>
      <p>
      L'année 1967 marque la naissance officielle de la Hyundai Motor Company, concrétisant cette ambition de mettre le pays en mouvement. Dès l’année suivante, le groupe achève la construction de son usine d'assemblage à Ulsan. Ce site, qui n'était alors qu'un modeste début, est devenu aujourd'hui la plus grande usine intégrée de fabrication automobile au monde, capable de produire jusqu'à 1,6 million de véhicules par an. 
      </p>
    </div>
  </div>

  <div class="timeline-item gauche">
    <div class="img"><img src="../img/First-car-model-of-Huyndai-Pony.jpg" alt=""></div>
    <div class="timeline-content">
      <h3>1975 : un tournant majeur</h3>
      <p>
      1975 marque une étape importante pour Hyundai Motor Company quand cette entreprise lançait le modèle de voiture Pony. C’était la première voiture développée et produite en série par Hyundai Motor Company et le premier modèle de fabrication en Corée du Sud. Pour créer Pony, Chung Ju-yung a invité l'expertise internationale, le design de cette voiture a été fait par styliste italien Giorgetto Giugiaro. Pony a non seulement devenu la véhicule populaire des foyers coréens, mais elle a aussi ouvert les portes du marché international. De ce fait, Hyundai devient le premier constructeur national à exporter ses véhicules à grande échelle. Ce succès a définitivement transformé l'image de la marque, passant d'un assembleur local à un acteur industriel capable de concevoir et de diffuser sa propre vision de l'automobile à travers le monde.
      </p>
    </div>
  </div>

</div>
</div>
    `;
    slider.classList.add("show");
  };

  document.getElementById("itw1").onclick = () => {
    sliderContent.innerHTML = `
    <h1>Interview de ?</h1> <br> <iframe src="https://player.vimeo.com/video/1096384424?h=f4a5a934dc&color=ffffff&title=0&byline=0&portrait=0"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen>
        </iframe>
        `;
    slider.classList.add("show");
  };

  // document.getElementById("carte1").onclick = () => {
  //   sliderContent.innerHTML = "<h1>Carte</h1>";
  //   slider.classList.add("show");
  // };

  document.getElementById("preparer2").onclick = () => {
    window.location.href = "deplacer-part-2.php";
  };
}

/*********************************/
/************* DEPLACER 2 **********/
/*********************************/

if (document.body.classList.contains("deplacer2")) {

  const iframe = document.getElementById("vidDeplacer2");
  const skip = document.getElementById("skip");
  const overlay = document.querySelector(".cacher");
  const replay = document.getElementById("replayBtn");

  let done = false;

  if (iframe) {
    deplacerPlayer2 = new Vimeo.Player(iframe);

    function showUI() {
      overlay.classList.add("show");
      replay.classList.add("show");
      deplacerPlayer2.pause();
    }

    function hideUI() {
      overlay.classList.remove("show");
      replay.classList.remove("show");
    }

    skip.onclick = showUI;

    deplacerPlayer2.on("ended", showUI);

    deplacerPlayer2.on("timeupdate", data => {
      if (!done && data.percent >= 0.999) {
        done = true;
        showUI();
      }
    });

    replay.onclick = async () => {
      done = false;
      hideUI();
      await deplacerPlayer2.setCurrentTime(0);
      deplacerPlayer2.play();
    };

    deplacerPlayer2.on("play", async () => {
      const t = await deplacerPlayer2.getCurrentTime();
      if (t < 1) {
        done = false;
        hideUI();
      }
    });
  }


  /******** SLIDER ********/

  const slider = document.getElementById("slider");
  const sliderContent = document.getElementById("sliderContent");

  document.getElementById("closeSlider").onclick = () => {
    slider.classList.remove("show");
  };

  document.getElementById("moyensD").onclick = () => {
    sliderContent.innerHTML = `
    <h1>Les moyens de déplacements en Corée du Sud </h1> <br> 
      <div class="timeline-liste full">
    <div class="timeline-content-liste">
      <ul class="liste">
        <li>Les moyens mis à disposition en Corée du Sud pour se déplacer sont nombreux, voitures, bus, métro, train, vélo et même trottinette électrique.</li>
        <li>Cependant la grande majorité d'entre eux ont été soit construits par des entreprises appartenant au chaebols soit appartiennent tout simplement à ceux-ci.</li>
      </ul>
    </div>
  </div>

  <div class="timeline-moyens">
  <div class="timeline-moyensD gauche">
    <div class="v-hyundai"><img src="../img/voitures-hyundai.jpg"></div>
    <div class="timeline-content-M2">
      <h3>Espaces routiers et véhicules</h3>
      <p>
      Commençons par les voitures, en Corée du Sud, les marques les plus représentées sont évidemment KIA et Hyundai, dû au contexte historique de la Corée qui domine dans le secteur de l'automobile, il est évident que les deux marques issues des chaebols sont omniprésentes.
      Dans leur pays respectif, Hyundai et KIA à eux seuls représentent 75% des automobiles en Corée du Sud. Le reste correspond à des marques importées ou des marques locales moins populaires et influentes.        </p>
    </div>
  </div>
  </div>

  <div class="timeline-liste full">
    <div class="timeline-content-liste">
      <ul class="liste">
        <li>Toujours sur les espaces routiers, la Corée du Sud dispose de nombreux bus et bus urbains, dominés par Hyundai Motors et KGM Commercials.</li>
        <li>90% de la proportion des bus dans le pays proviennent de Hyundai.</li>
      </ul>
    </div>
  </div>

  <hr>

  <div class="timeline-ferro full">
    <div class="timeline-content-ferro">
      <h3> Transports ferroviaires </h3>
      <p>Un autre moyen de déplacement très populaire en Corée, c’est le métro coréen :
      disponible dans six villes principales en Corée du Sud (Séoul et Incheon, Busan, Daegu, Gwangju et Daejeon). <br><br>
      Le réseau ferroviaire coréen, est très dense, aussi remarquable par son efficacité, et sa propreté. Toutefois, ses réseaux n’appartiennent pas aux Chaebols. 
      Cependant, les métros ont bien été fabriqués par Hyundai Rotem qui appartiennent à Hyundai Motor Groups.</p>
    </div>
  </div>

<div class="timeline-moyens">
  <div class="timeline-moyensD droite">
    <div class="hsr"><img src="../img/hsr-350X.webp" alt=""></div>
    <div class="timeline-content-M2">
      <p>
      A plus grande échelle, nous avons le KTX et les SRT qui sont des trains de grandes lignes en Corée du Sud, permettant de rejoindre de très grandes villes comme Seoul, Busan, Honam etc.
      <br>
      <br>
      Exploité principalement par Korail et SR Corporation qui ne sont tous les deux pas des Chaebols, ils ont cependant, comme les métros, été assemblés par Hyundai Rotem.
      </p>
    </div>
  </div>
  </div>






    `;
    slider.classList.add("show");
  };

  document.getElementById("cheminT").onclick = () => {
    window.location.href = "map.php";
//     sliderContent.innerHTML = `
//     <h1>Trace du chemin</h1> <br> 
//     <div id="map" style="height:500px;"></div>
//     `;
//     slider.classList.add("show");

//     slider.addEventListener("transitionend", function handler(e) {
//     if (e.propertyName === "bottom") {

//       initMap();

//       // 🔥 TRÈS IMPORTANT
//       setTimeout(() => {
//         map.invalidateSize();
//       }, 400); // laisse le temps au layout

//       slider.removeEventListener("transitionend", handler);
//       }
//     });
//   };


//   // MAP
// let map = null; // variable globale

// function initMap() {

//   // 🔥 si une map existe déjà → on la supprime
//   if (map !== null) {
//     map.remove();
//   }

//   // 🔥 on recrée une nouvelle map propre
//   map = L.map('map').setView([35.144, 129.036], 13);

//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '© OpenStreetMap'
//   }).addTo(map);

//   let allBounds = L.latLngBounds();

//   function addGPX(file, color) {
//     new L.GPX(file, {
//       async: true,
//       polyline_options: {
//         color: color,
//         weight: 3
//       }
//     }).on('loaded', function(e) {
//       allBounds.extend(e.target.getBounds());
//       map.fitBounds(allBounds);
//     }).addTo(map);
//   }

//   addGPX('../marche.gpx', 'red');
//   addGPX('../trajet-transport.gpx', 'blue');
}

  document.getElementById("questionsM").onclick = () => {
    window.location.href = "discussion-part-1.php";
  };
}




  /*********************************/
/************* DISCUSSION PART 1 **********/
/*********************************/

if (document.body.classList.contains("discussion1")) {

  const iframe = document.getElementById("vidDiscussion1");
  const skip = document.getElementById("skip");
  const overlay = document.querySelector(".cacher");
  const replay = document.getElementById("replayBtn");

  let done = false;

  if (iframe) {
    discussionPlayer1 = new Vimeo.Player(iframe);

    function showUI() {
      overlay.classList.add("show");
      replay.classList.add("show");
      discussionPlayer1.pause();
    }

    function hideUI() {
      overlay.classList.remove("show");
      replay.classList.remove("show");
    }

    skip.onclick = showUI;

    discussionPlayer1.on("ended", showUI);

    discussionPlayer1.on("timeupdate", data => {
      if (!done && data.percent >= 0.999) {
        done = true;
        showUI();
      }
    });

    replay.onclick = async () => {
      done = false;
      hideUI();
      await discussionPlayer1.setCurrentTime(0);
      discussionPlayer1.play();
    };

    discussionPlayer1.on("play", async () => {
      const t = await discussionPlayer1.getCurrentTime();
      if (t < 1) {
        done = false;
        hideUI();
      }
    });
  }

  /******** SLIDER ********/

  const slider = document.getElementById("slider");
  const sliderContent = document.getElementById("sliderContent");

  document.getElementById("closeSlider").onclick = () => {
    slider.classList.remove("show");
  };

  document.getElementById("affaireSK").onclick = () => {
    sliderContent.innerHTML = `
   
    `; 
    slider.classList.add("show");
  };

  document.getElementById("cultureU").onclick = () => {
    sliderContent.innerHTML = "<h1>Culture universitaire liée aux Chaebols</h1>";
    slider.classList.add("show");
  };

  document.getElementById("chercherB").onclick = () => {
    window.location.href = "trouver-a-boire.php";
  };
}

  /*********************************/
/************* TROUVER A BOIRE **********/
/*********************************/

if (document.body.classList.contains("trouver-boire")) {

  const iframe = document.getElementById("vidTrouverBoire");
  const skip = document.getElementById("skip");
  const overlay = document.querySelector(".cacher");
  const replay = document.getElementById("replayBtn");

  let done = false;

  if (iframe) {
    trouverPlayer = new Vimeo.Player(iframe);

    function showUI() {
      overlay.classList.add("show");
      replay.classList.add("show");
      trouverPlayer.pause();
    }

    function hideUI() {
      overlay.classList.remove("show");
      replay.classList.remove("show");
    }

    skip.onclick = showUI;

    trouverPlayer.on("ended", showUI);

    trouverPlayer.on("timeupdate", data => {
      if (!done && data.percent >= 0.999) {
        done = true;
        showUI();
      }
    });

    replay.onclick = async () => {
      done = false;
      hideUI();
      await trouverPlayer.setCurrentTime(0);
      trouverPlayer.play();
    };

    trouverPlayer.on("play", async () => {
      const t = await trouverPlayer.getCurrentTime();
      if (t < 1) {
        done = false;
        hideUI();
      }
    });
  }

  /******** SLIDER ********/

  const slider = document.getElementById("slider");
  const sliderContent = document.getElementById("sliderContent");

  document.getElementById("closeSlider").onclick = () => {
    slider.classList.remove("show");
  };

  document.getElementById("itw2").onclick = () => {
    sliderContent.innerHTML = "<h1>Interview complète de ?</h1>";
    slider.classList.add("show");
  };

  document.getElementById("mini-jeu").onclick = () => {
    sliderContent.innerHTML = "<h1>Mini-jeu</h1>";
    slider.classList.add("show");
  };

  document.getElementById("poserQ").onclick = () => {
    window.location.href = "discussion-part-2.php";
  };
}

  /*********************************/
/************* DISCUSSION PART 2 **********/
/*********************************/

if (document.body.classList.contains("discussion2")) {

  const iframe = document.getElementById("vidDiscussion2");
  const skip = document.getElementById("skip");
  const overlay = document.querySelector(".cacher");
  const replay = document.getElementById("replayBtn");

  let done = false;

  if (iframe) {
    discussionPlayer = new Vimeo.Player(iframe);

    function showUI() {
      overlay.classList.add("show");
      replay.classList.add("show");
      discussionPlayer.pause();
    }

    function hideUI() {
      overlay.classList.remove("show");
      replay.classList.remove("show");
    }

    skip.onclick = showUI;

    discussionPlayer.on("ended", showUI);

    discussionPlayer.on("timeupdate", data => {
      if (!done && data.percent >= 0.999) {
        done = true;
        showUI();
      }
    });

    replay.onclick = async () => {
      done = false;
      hideUI();
      await discussionPlayer.setCurrentTime(0);
      discussionPlayer.play();
    };

    discussionPlayer.on("play", async () => {
      const t = await discussionPlayer.getCurrentTime();
      if (t < 1) {
        done = false;
        hideUI();
      }
    });
  }

  /******** SLIDER ********/

  const slider = document.getElementById("slider");
  const sliderContent = document.getElementById("sliderContent");

  document.getElementById("closeSlider").onclick = () => {
    slider.classList.remove("show");
  };

  document.getElementById("apr3").onclick = () => {
    sliderContent.innerHTML = `
    <h1>Naissance des Chaebols dans le contexte historique <br> de la Corée du Sud</h1> <br>
    `;
    slider.classList.add("show");
  };

  document.getElementById("itw3").onclick = () => {
    sliderContent.innerHTML = "<h1>Interview complète de ?</h1>";
    slider.classList.add("show");
  };

  document.getElementById("manger").onclick = () => {
    window.location.href = "se-nourrir.php";
  };
}



  /*********************************/
/************* Se nourrir et vie sociale **********/
/*********************************/

if (document.body.classList.contains("se-nourrir")) {

  const iframe = document.getElementById("vidSeNourrir");
  const skip = document.getElementById("skip");
  const overlay = document.querySelector(".cacher");
  const replay = document.getElementById("replayBtn");

  let done = false;

  if (iframe) {
    nourrirPlayer = new Vimeo.Player(iframe);

    function showUI() {
      overlay.classList.add("show");
      replay.classList.add("show");
      nourrirPlayer.pause();
    }

    function hideUI() {
      overlay.classList.remove("show");
      replay.classList.remove("show");
    }

    skip.onclick = showUI;

    nourrirPlayer.on("ended", showUI);

    nourrirPlayer.on("timeupdate", data => {
      if (!done && data.percent >= 0.999) {
        done = true;
        showUI();
      }
    });

    replay.onclick = async () => {
      done = false;
      hideUI();
      await nourrirPlayer.setCurrentTime(0);
      nourrirPlayer.play();
    };

    nourrirPlayer.on("play", async () => {
      const t = await nourrirPlayer.getCurrentTime();
      if (t < 1) {
        done = false;
        hideUI();
      }
    });
  }

  /******** SLIDER ********/

  const slider = document.getElementById("slider");
  const sliderContent = document.getElementById("sliderContent");

  document.getElementById("closeSlider").onclick = () => {
    slider.classList.remove("show");
  };

  document.getElementById("apr4").onclick = () => {
    sliderContent.innerHTML = "<h1>Annexes complémentaires</h1>";
    slider.classList.add("show");
  };

  document.getElementById("conclusion").onclick = () => {
    window.location.href = "conclusion.php";
  };
}



  /*********************************/
/************* Page Conclusion **********/
/*********************************/

if (document.body.classList.contains("conclusion")) {

  const iframe = document.getElementById("vidConclusion");
  const skip = document.getElementById("skip");
  const overlay = document.querySelector(".cacher");
  const replay = document.getElementById("replayBtn");

  let done = false;

  if (iframe) {
    conclusionPlayer = new Vimeo.Player(iframe);

    function showUI() {
      overlay.classList.add("show");
      replay.classList.add("show");
      conclusionPlayer.pause();
    }

    function hideUI() {
      overlay.classList.remove("show");
      replay.classList.remove("show");
    }

    skip.onclick = showUI;

    conclusionPlayer.on("ended", showUI);

    conclusionPlayer.on("timeupdate", data => {
      if (!done && data.percent >= 0.999) {
        done = true;
        showUI();
      }
    });

    replay.onclick = async () => {
      done = false;
      hideUI();
      await conclusionPlayer.setCurrentTime(0);
      conclusionPlayer.play();
    };

    conclusionPlayer.on("play", async () => {
      const t = await conclusionPlayer.getCurrentTime();
      if (t < 1) {
        done = false;
        hideUI();
      }
    });
  }

  /******** SLIDER ********/

  const slider = document.getElementById("slider");
  const sliderContent = document.getElementById("sliderContent");

  document.getElementById("closeSlider").onclick = () => {
    slider.classList.remove("show");
  };

  document.getElementById("apr5").onclick = () => {
    window.location.href = "informations-complementaires.php";
  };

  document.getElementById("annexes").onclick = () => {
    window.location.href = "annexes.php";
  };
}











/*********************************/
/************* MENU **************/
/*********************************/

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const menuOverlay = document.getElementById("menuOverlay");
const menuIcon = document.getElementById("menuIcon");

// navigation
const goDual = document.getElementById("goDual");
const goDoc = document.getElementById("goDoc");
const goAnnexe = document.getElementById("goAnnexe");
const goLegal = document.getElementById("goLegal");

// langue
const langBtns = document.querySelectorAll(".menu-lang button");

function toggleMenu() {
  menu.classList.toggle("show");
  menuOverlay.classList.toggle("show");

  const open = menu.classList.contains("show");

  // icône
  menuIcon.src = open ? "../img/croix-rouge.png" : "../img/menu-2.png";

  // 🔥 pause vidéo 
  if (open) {
    if (introPlayer) introPlayer.pause();
    if (deplacerPlayer) deplacerPlayer.pause();
  }
}

function closeMenu() {
  menu.classList.remove("show");
  menuOverlay.classList.remove("show");
  menuIcon.src = "../img/menu-2.png";
}

if (menuBtn) menuBtn.onclick = toggleMenu;
if (menuOverlay) menuOverlay.onclick = closeMenu;

// navigation
if (goDual) goDual.onclick = () => location.href = "dual.php";
if (goDoc) goDoc.onclick = () => location.href = "documentaire.php";
if (goAnnexe) goAnnexe.onclick = () => location.href = "annexes.php";
if (goLegal) goLegal.onclick = () => location.href = "mentions-legales.php";

// langue
langBtns.forEach(btn => {
  btn.onclick = () => {
    localStorage.setItem("lang", btn.dataset.lang);
    location.reload();
  };
});



