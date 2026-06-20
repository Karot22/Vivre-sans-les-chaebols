// slider naissance chaebols
const apr1 = document.getElementById("apr1");

if (apr1) {
  const slider = document.getElementById("slider");
  const sliderContent = document.getElementById("sliderContent");
  const closeSlider = document.getElementById("closeSlider");

  apr1.onclick = () => {
    sliderContent.innerHTML = `
            <div class="grain">

            <div class="timeline-wrapper">

    <!-- CONTENU PRINCIPAL -->

    <div class="slide-viewer">
        <button class="nav prev">❮</button>

        <div class="slide-content">
            <div class="slide-image">
                <img id="slideImg" src="img/hyundai.jpg">
                <p id="slideCaption">
                    At a picnic with the staff of Hyundai
                </p>
            </div>

            <div class="slide-text">
                

                <h2 id="slideTitle">
                    NAISSANCE DE HYUNDAI
                </h2>

                <p id="slideDescription">
                    Texte de présentation...
                </p>

            </div>
        </div>

        <button class="nav next">❯</button>
    </div>

    
</div>
            
</div>
        `;

const slides = [

{
    year:"1938",
    title:"title_samsung",
    image:"img/samsung.jpg",
    caption:"caption_samsung",
    text:"text_samsung"
},

{
    year:"1947",
    title:"title_hyundai",
    image:"img/hyundai.jpg",
    caption:"caption_hyundai",
    text:"text_hyundai"
},

{
    year:"1947",
    title:"title_LG",
    image:"img/lg.jpg",
    caption:"caption_LG",
    text:"text_LG"
},

{
    year:"1952",
    title:"title_hanwha",
    image:"img/hanwha.jpg",
    caption:"caption_hanwha",
    text:"text_hanwha"
},

{
    year:"1953",
    title:"title_SK",
    image:"img/sk.jpg",
    caption:"caption_SK",
    text:"text_SK"
},

{
    year:"1948/1967",
    title:"title_lotte",
    image:"img/lotte.jpg",
    caption:"caption_lotte",
    text:"text_lotte"
}

];

let current = 0;

function loadSlide(index){

    current = index;

    const lang =
        localStorage.getItem("lang") || "fr";
        console.log(lang);
        console.log(slides[index].text);
        console.log(texts.fr[slides[index].text]);
        console.log(texts[lang]?.[slides[index].text]);

    // document.getElementById("slideYear").textContent =
    //     slides[index].year;

    document.getElementById("slideTitle").innerHTML =
        texts[lang][slides[index].title];

    document.getElementById("slideDescription").innerHTML =
        texts[lang][slides[index].text];

    document.getElementById("slideImg").src =
        slides[index].image;

    document.getElementById("slideCaption").innerHTML =
        texts[lang][slides[index].caption];


    
}


document
.querySelector(".next")
.addEventListener("click", () => {

    loadSlide(
        (current + 1) % slides.length
    );

});

document
.querySelector(".prev")
.addEventListener("click", () => {

    loadSlide(
        (current - 1 + slides.length)
        % slides.length
    );

});

loadSlide(0);

document.addEventListener("keydown", (e) => {

    // Flèche droite
    if (e.key === "ArrowRight") {
        loadSlide(
            (current + 1) % slides.length
        );
    }

    // Flèche gauche
    if (e.key === "ArrowLeft") {
        loadSlide(
            (current - 1 + slides.length)
            % slides.length
        );
    }

});


    appliquerTraductions();
    slider.classList.add("show");
    enregistrerContenuVu("apr1");
  };

  closeSlider.onclick = () => {
    slider.classList.remove("show");
  };
}

// slider chaebols vs grande entreprise
const vs = document.getElementById("vs");

if (vs) {
  const slider = document.getElementById("slider");
  const sliderContent = document.getElementById("sliderContent");
  const closeSlider = document.getElementById("closeSlider");

  vs.onclick = () => {
    sliderContent.innerHTML = `
        <div class="grain">


    <h1 class="t-diff" data-translate="tDiffText">Differences entre Chaebol et grande entreprise</h1>

    <div class="definition-box">
      
      <div class="definition-text">
        <p data-translate="defEtyText"><strong>Définition étymologique</strong></p>
        <div class="chips">
          <span data-translate="chaeText">Chae 재 = richesse</span>
          <span data-translate="bolText">bol 벌 = clan</span>
          <span data-translate="chaebolText">Chaebol = clan des riches</span>
        </div>
      </div>
    </div>

    <div class="cards">
      <div class="card">
        <div class="info">i</div>
        <h3 data-translate="titreC1">Chaebols</h3>
        <p>Conglomérat industriel sud-coréen de type familial, qui combine des activités très diverses, avec le soutien de l'État et des banques.</p>
      </div>

      <div class="card">
        <div class="info">i</div>
        <h3 data-translate="titreC2">Conglomérat</h3>
        <p>Ensemble d'entreprises réunies par des liens juridiques et financiers plus ou moins précis, avec des activités très diverses.</p>
      </div>

      <div class="card">
        <div class="info">i</div>
        <h3 data-translate="titreC3">Grande entreprise</h3>
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
  
`;
    appliquerTraductions();
    slider.classList.add("show");
    enregistrerContenuVu("vs");
  };

  closeSlider.onclick = () => {
    slider.classList.remove("show");
  };
}


// slider se déplacer

const deplacement = document.getElementById("se-deplacer-en-coree");

if (deplacement) {
  const slider = document.getElementById("slider");
  const sliderContent = document.getElementById("sliderContent");
  const closeSlider = document.getElementById("closeSlider");

  deplacement.onclick = () => {
    sliderContent.innerHTML = `
        <div class="grain">
    <h1>Les moyens de déplacements en Corée du Sud </h1> <br> 
      <div class="timeline-liste full">
    <div class="timeline-content-liste">
      <ul class="liste">
        <li>Les moyens mis à disposition en Corée du Sud pour se déplacer sont nombreux, voitures, bus, métro, train, vélo et même trottinette électrique.</li>
        <br>
        <li>Cependant la grande majorité d'entre eux ont été soit construits par des entreprises appartenant au chaebols soit appartiennent tout simplement à ceux-ci.</li>
      </ul>
    </div>
  </div>

  <div class="timeline-moyens">
  <div class="timeline-moyensD gauche">
    <div class="v-hyundai"><img src="img/voitures-hyundai.jpg"></div>
    <div class="timeline-content-M2">
      <h3>Espaces routiers et véhicules</h3>
      <p>
      Commençons par les voitures, en Corée du Sud, les marques les plus représentées sont évidemment KIA et Hyundai, dû au contexte historique de la Corée qui domine dans le secteur de l'automobile, il est évident que les deux marques issues des chaebols sont omniprésentes.
      Dans leur pays respectif, Hyundai et KIA à eux seuls représentent 75% des automobiles en Corée du Sud. Le reste correspond à des marques importées ou des marques locales moins populaires et influentes.        </p>
    </div>
  </div>
  </div>
<br><br>
  <div class="timeline-liste full">
    <div class="timeline-content-liste">
      <ul class="liste">
        <li>Toujours sur les espaces routiers, la Corée du Sud dispose de nombreux bus et bus urbains, dominés par Hyundai Motors et KGM Commercials.</li>
        <br>
        <li>90% de la proportion des bus dans le pays proviennent de Hyundai.</li>
      </ul>
    </div>
  </div>

  <br><br>

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
    <div class="hsr"><img src="img/hsr-350X.webp" alt=""></div>
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

    <div class="timeline-liste full">
        <div class="timeline-content-liste">
        <ul class="liste">
            <li>En ce qui concerne les vélos et les trottinettes électriques, il existe de nombreuses options : Ttareungi, Tashu, Kickgoing. Néanmoins Kakao T permet d'emprunter des vélos électriques et des trottinettes électriques.</li>
            <br>
            <li>De plus, la Corée-du-Sud possède ses propres services de cartographie proposées par Kakao (Kakao Map) et (Naver) Naver Maps, des Chaebols à l’échelle numérique.</li>
            <br>
            <li>Globalement, les Chaebols ont un énorme impact dans la vie quotidienne des coréens lorsqu’il s’agit de se déplacer, il existe très peu de possibilités pour se déplacer sans avoir recours aux Chaebols.</li>
        </ul>
        </div>
    </div>
    <br>
    <br>
    <br>
</div>
  
`;
    appliquerTraductions();
    slider.classList.add("show");
    enregistrerContenuVu("se-deplacer-en-coree");
  };

  closeSlider.onclick = () => {
    slider.classList.remove("show");
  };
}

// slider affaire scandaleuse humidifier

const affaireScandaleuse = document.getElementById("affaire-scandaleuse");

if (affaireScandaleuse) {
  const slider = document.getElementById("slider");
  const sliderContent = document.getElementById("sliderContent");
  const closeSlider = document.getElementById("closeSlider");

  affaireScandaleuse.onclick = () => {
    sliderContent.innerHTML = `
        <div class="grain">
    <section class="news">

    <div class="title-container">
        <h1>Chaebol News</h1>
        <div class="line"></div>
    </div>

    <div class="content">
    

        <!-- COLONNE GAUCHE -->
        <div class="left-column">
            <div class="chapo">
                <h2>L’affaire scandaleuse du SK Chemical et Humidifier</h2>
                <p>
                Le scandale des désinfectants pour humidificateurs est considéré comme l'un des pires scandales sanitaires de Corée du Sud, directement lié à la négligence des chaebols.                
                </p>
            </div>

            <div class="section-title">Origine et contexte</div>
            <p>
                Dans les années 1990 et 2000, les désinfectants pour humidificateurs ont connu un succès fulgurant en Corée du Sud. La publicité vantait les mérites de ces produits chimiques, ajoutés à l'eau des humidificateurs, pour éliminer les bactéries et protéger la santé de la famille. Les deux principaux produits utilisés étaient le PHMG (polyhexaméthylène guanidine) et le PGH (chlorure d'oligo(2-(2-éthoxy)éthoxyéthyl guanidinium)), désinfectants sans danger pour la peau, mais extrêmement toxiques par pulvérisation et inhalation. Oxy Reckitt Benckiser (multinationale) et des chaebols comme SK Chemical et Lotte Mart en étaient les principaux fabricants et distributeurs.
            </p>

            <div class="section-title">Le déroulement du scandale</div>
            <p>
                L'affaire a commencé à attirer l'attention en 2011 lorsqu'un grand nombre de femmes enceintes et d'enfants ont été hospitalisés pour des symptômes inexpliqués de fibrose pulmonaire aiguë, entraînant de nombreux décès. Les enquêtes menées par les Centres coréens de contrôle et de prévention des maladies (KCDC) ont par la suite établi un lien direct entre le désinfectant pour humidificateurs et de graves lésions pulmonaires. Les statistiques gouvernementales ont recensé des milliers de victimes, dont plus de 1 500 décès officiels, bien que des organisations de la société civile estiment que le nombre réel pourrait être bien plus élevé.
            </p>

            <div class="section-title">Les circonstances et les décisions de justice</div>
            <p>
                La procédure judiciaire a été longue et controversée en raison des dénégations de responsabilité des entreprises impliquées.
                <br><br>

                Première phase (2017) : Shin Hyun-woo, ancien PDG d'Oxy Reckitt Benckiser, a été condamné à 7 ans de prison pour homicide involontaire par négligence et publicité mensongère. Le tribunal a statué que l'entreprise n'avait pas effectué de tests de toxicité respiratoire avant la mise sur le marché du produit.
                <br><br>

                Phase 2 (Revirement de jugement pour SK Chemical et Aekyung) : Initialement, en 2021, les anciens dirigeants de SK Chemical et d’Aekyung Industrial furent acquittés, le tribunal ayant jugé insuffisantes les preuves scientifiques établissant un lien de causalité direct entre leurs produits chimiques CMIT/MIT et les lésions pulmonaires. Cependant, en janvier 2024, la Haute Cour de Séoul cassa ce jugement et les condamna à quatre ans de prison, reconnaissant leur responsabilité partagée dans l’évaluation de la sécurité du produit.            </p>

        </div>

        <!-- COLONNE DROITE -->
        <div class="right-column">

            <img src="img/voitures-hyundai.jpg" alt="News">

            <div class="quote-box">
                Cette affaire a non seulement abouti à des condamnations pénales, mais a également contraint le gouvernement sud-coréen à adopter une réglementation plus stricte sur les produits chimiques ménagers (communément appelée « Loi sur les produits chimiques ») et a profondément modifié la perception de la société quant à l’éthique des entreprises.
            </div>

        </div>

    </div>

</section>
</div>
  
`;
    appliquerTraductions();
    slider.classList.add("show");
    enregistrerContenuVu("affaire-scandaleuse");
  };

  closeSlider.onclick = () => {
    slider.classList.remove("show");
  };
}

// slider boycott corée du sud vs japon

const boycottskvsjp = document.getElementById("boycott");

if (boycottskvsjp) {
  const slider = document.getElementById("slider");
  const sliderContent = document.getElementById("sliderContent");
  const closeSlider = document.getElementById("closeSlider");

  boycottskvsjp.onclick = () => {
    sliderContent.innerHTML = `
        <div class="grain">
        <h1>Boycott de la Corée contre le Japon</h1> <br>
        <div class="timeline-boycott">
  <div class="timeline-line">
    <div class="timeline-partie">

        <button class="timeline-boycott-title">
            L'élément déclencheur : Une décision de justice sur fond de contentieux historique
        </button>

        <div class="timeline-boycott-content">
            <p>
                En octobre 2018, la Cour suprême sud-coréenne a rendu un arrêt historique : elle a statué que de grandes entreprises japonaises (comme Nippon Steel et Mitsubishi Heavy Industries) devaient indemniser les travailleurs coréens soumis au travail forcé durant l'occupation japonaise de la péninsule (1910-1945). Le Japon s'est fermement opposé à cette décision. Du côté du gouvernement japonais, la question des réparations de guerre avait déjà été définitivement réglée par le Traité de normalisation des relations de 1965, par lequel le Japon avait versé à la Corée du Sud 800 millions de dollars sous forme d'aide et de prêts préférentiels. Face au refus japonais, la Corée du Sud a commencé à saisir les actifs de ces entreprises sur son territoire. En réaction, Tokyo a décidé de répliquer sur le terrain économique.
                <br><br>
                En juillet 2019, le Japon a imposé des sanctions visant le secteur des semi-conducteurs et des écrans, pilier de l'économie sud-coréenne. Tokyo a renforcé les restrictions à l'exportation vers la Corée du Sud concernant trois produits chimiques essentiels, contrôlés de manière quasi exclusive par les entreprises japonaises (représentant 70 à 90 % du marché mondial) :
                <br><br>
                - <strong>Le polyimide fluoré</strong> : indispensable pour la fabrication des écrans OLED haut de gamme (notamment pour Samsung et LG).
                <br>
                - <strong>La photorésine</strong> : un agent chimique crucial pour graver les circuits sur les plaquettes de silicium (wafers).
                <br>
                - <strong>Le fluorure d'hydrogène</strong> : un gaz de haute pureté utilisé pour nettoyer les puces pendant leur fabrication.
                <br><br>
                En conséquence, en août 2019, le Japon a officiellement retiré la Corée du Sud de sa « liste blanche » (liste de pays bénéficiant de procédures d'exportation préférentielles maximales).

            </p>
        </div>

    </div>

    <div class="timeline-partie">

        <button class="timeline-boycott-title">
            Réactions de la Corée du Sud : autonomie et boycott
        </button>

        <div class="timeline-boycott-content">
            <p>
                La réaction sud-coréenne a été immédiate, mêlant décisions gouvernementales et stratégie industrielle. Sur le plan diplomatique, Séoul a également retiré le Japon de sa propre liste blanche et a déposé une plainte auprès de l'Organisation mondiale du commerce (OMC). Le gouvernement a même menacé de rompre l'accord de partage de renseignements militaires (GSOMIA), c’est un outil crucial pour surveiller la Corée Nord mais enfin cette décision a été suspendue sous la pression des États-Unis.
                <br><br>
                Sur le plan industriel, cette crise a poussé la Corée du Sud à passer d'une dépendance subie à une autonomie forcée. Ce processus a fonctionné grâce à un triangle de collaboration : l'État a massivement investi dans la recherche et développement (R&D), les PME locales ont développé les technologies de substitution, et les Chaebols (Samsung, SK Hynix) jouent un rôle central. Avant 2019, ces géants étaient très réticents à l'idée d'utiliser des matériaux locaux à cause des risques de défauts sur leurs lignes de production. Mais face à l'embargo, Samsung et SK Hynix ont changé de stratégie :
                <br>
                - <strong>Intégration directe</strong> : Ils ont intégré des fournisseurs coréens (comme Soulbrain et Dongjin Semichem) directement dans leurs lignes de test, réduisant le temps de certification de plusieurs années à quelques mois seulement.
                <br>
                - <strong>Investissements agressifs</strong> : Le groupe SK a décidé de racheter la branche de matériaux avancés de l'américain DuPont, récupérant ainsi des brevets clés sur les semi-conducteurs de nouvelle génération (SiC), tout en transformant sa filiale SK Siltron en un leader des plaquettes de silicium. Samsung Electronics, de son côté, a acheté des parts et versé des subventions à des entreprises locales de composants pour stabiliser leur trésorerie et garantir le financement de leur recherche et développement.
                <br>
                - <strong>Pression sur les fournisseurs</strong>: Les Chaebols ont profité de leur statut de clients incontournables pour forcer des entreprises japonaises (comme TOK) à construire des usines directement en Corée du Sud, permettant ainsi un transfert indirect de technologie et la création d'emplois locaux.
                <br>
                - <strong>Diversification</strong> : Ils ont rapidement cherché de nouvelles sources de matières premières en Europe (notamment en Belgique) et à Taïwan pour éviter toute rupture de production.
            </p>
        </div>

    </div>

    <div class="timeline-partie">

        <button class="timeline-boycott-title">
            La mobilisation citoyenne : Le mouvement « No Japan » et le cas Uniqlo
        </button>

        <div class="timeline-boycott-content">
            <p>
                Parallèlement à la réponse industrielle, la société civile sud-coréenne a lancé un boycott massif et inédit. Contrairement aux mouvements du passé, souvent éphémères, la campagne de 2019 a été redoutable grâce à l'alliance du patriotisme et du numérique.
                <br><br>
                La solidarité des commerçants a été totale : plus de 600 ONG et l'Association des petits distributeurs ont retiré les produits japonais de leurs rayons. Des milliers de supérettes de quartier ont affiché le logo « No Japan » (avec le slogan : <i>"Je n'y vais pas, je n'achète pas"</i>), refusant de vendre de la bière ou du tabac importés du Japon. De jeunes développeurs ont créé l'application NoNoJapan, permettant aux consommateurs de scanner le code-barres d'un produit pour savoir s'il était japonais et obtenir immédiatement une alternative coréenne.
                <br><br>
                La marque de vêtements <strong>Uniqlo</strong> est devenue la cible numéro un du boycott, au point de devenir le symbole de la crise. Ce rejet a été amplifié par de graves erreurs de communication. D'abord, un dirigeant de la maison-mère japonaise a déclaré publiquement que le boycott coréen <i>"ne durerait pas longtemps"</i>, ce qui a été perçu comme un profond mépris par l'opinion publique. Ensuite, en octobre 2019, une publicité d'Uniqlo a affiché des sous-titres coréens évoquant des événements d'il y a <i>"plus de 80 ans"</i>, une période qui correspond exactement aux pires heures de l'occupation japonaise et à l'esclavage sexuel des "femmes de réconfort".
                <br><br>
                La réaction a été violente : des manifestants ont bloqué l'entrée des magasins et les clients ont déserté les rayons. En quelques mois, les ventes d'Uniqlo en Corée du Sud ont chuté de plus de 40 %, l'entreprise a enregistré d'immenses pertes financières et a été contrainte de fermer définitivement des dizaines de boutiques à travers le pays, y compris son immense magasin amiral (Flagship) du quartier de Myeong-dong à Séoul.
                <br>
                D'autres secteurs ont subi le même choc : les exportations de bière japonaise vers la Corée ont chuté de près de 99 %, les constructeurs automobiles comme Toyota ou Nissan ont vu leurs ventes s'effondrer (Nissan finira d'ailleurs par quitter le marché coréen), et les vols vers le Japon se sont vidés. Sur les réseaux sociaux, la pression sociale était telle que publier des photos de vacances au Japon ou afficher des marques nippones était considéré comme un manque de fierté nationale. Les sondages de l'époque ont révélé que plus de 80 % des Sud-Coréens soutenaient ce mouvement et que près de 70 % y participaient activement.

            </p>
        </div>

    </div>
  </div>
</div>
    
</div>
  
`;

const titles =
document.querySelectorAll(".timeline-boycott-title");

titles.forEach(title => {

    title.addEventListener("click", () => {

        const content =
        title.nextElementSibling;
      title.classList.toggle("ouvert");

        content.classList.toggle("actif");

    });

});

    appliquerTraductions();
    slider.classList.add("show");
    enregistrerContenuVu("boycott");
  };

  closeSlider.onclick = () => {
    slider.classList.remove("show");
  };
}


// slider crise FMI / crise de 1997

const criseFMI = document.getElementById("crise-fmi");

if (criseFMI) {
  const slider = document.getElementById("slider");
  const sliderContent = document.getElementById("sliderContent");
  const closeSlider = document.getElementById("closeSlider");


  criseFMI.onclick = () => {
    sliderContent.innerHTML = `
        <div class="grain">
        
        <br><br>

        <div class="crise-container">

    <div class="etape active">
        <h2>L’héritage colonial et la guerre coréenne</h2>
        <p>
        La période de la colonisation japonaise en Corée présente un point marquant : le Japon a contribué indirectement et sans intention délibérée à l'industrialisation de la Corée. À partir des années 1930, le Japon développe certaines activités industrielles en Corée, principalement pour répondre à ses propres intérêts impériaux. Ce développement ne vise pas à enrichir ou  à moderniser la société coréenne, mais à soutenir la guerre entre le Japon et les autres pays en exploitant les ressources humaines et matérielles de la colonie. Cependant, cette industrialisation a imposé un effet inattendu : elle pose les bases du développement économique futur de la Corée. En effet, plusieurs entreprises coréennes participent, directement ou indirectement, à cette économie de guerre, acquérant des compétences et des structures organisationnelles. Certaines d’entre elles deviendront par la suite des acteurs majeurs du capitalisme coréen moderne.
        <br><br>
        Après la guerre de Corée, le Sud a été coupé économiquement du Nord, avec des répercussions économiques très fortes. Avant cette division, la Corée du Sud dépendait largement du Nord pour ses ressources énergétiques et ses infrastructures industrielles. Privée de ces éléments essentiels, son économie devient principalement agricole, tandis que la population fait face à une pauvreté extrême et à de grandes difficultés pour subvenir à ses besoins. Dans les années 1950, la Corée du Sud est ainsi considérée comme l’un des pays les plus pauvres au monde. Malgré ce contexte difficile, certains grands entrepreneurs émergent et nouent des liens étroits avec le pouvoir politique. Ensemble, ils contribuent à la formation des chaebols, ces conglomérats destinés à jouer un rôle déterminant dans la transformation de l’économie sud-coréenne.
        </p>
    </div>


    <div class="etape">
        <h2>L’aide militaire et économique des américains</h2>
        <p>
        Après la guerre, sous l'égide des États-Unis, le gouvernement sud-coréen entreprend la reconstruction du pays, s'appuyant sur deux piliers principaux : militaire et économique. Sur le plan militaire, les États-Unis maintinrent 60000 soldats pour former l'armée sud-coréenne et établir des bases permanentes (comme Camp Humphreys), créant ainsi un solide dispositif de sécurité. Sur le plan économique, de 1953 à 1955, les États-Unis injectèrent environ 200 millions de dollars par an dans le budget de la Corée du Sud. Cette aide financière et technique massive permet non seulement au gouvernement sud-coréen de stabiliser la société après la dévastation, mais crée également un marché pour les produits américains, mettant ainsi les bases essentielles permettant à la Corée du Sud de devenir un pilier du bloc capitaliste en Asie. La présence de troupes et d'experts américains (notamment dans le cadre du futur programme Peace Corps) affirme la solidité de l'alliance stratégique, permettant à la Corée du Sud de se développer rapidement malgré le conflit persistant dans la péninsule.
        </p>
    </div>

    <div class="etape">
        <h2>Le rôle de gouvernement de Park Chung-hee</h2>
        <p>
            Le général Park Chung-hee a mis en place un modèle économique centralisé, inspiré du complexe militaro-industriel japonais. Par la création de l’Office de planification économique, il a appliqué des plans quinquennaux de modernisation du pays. En particulier, la normalisation des relations avec le Japon (1965) et l'alliance étroite avec les États-Unis ont généré d'importantes ressources pour stimuler les exportations et développer les infrastructures stratégiques. 
            <br>
            Sous la dictature de Park, l’économie voit l’émergence spectaculaire des Chaebols, ces conglomérats familiaux géants se construisent en basant sur le modèle des Zaibatsu japonais. Des groupes tels que Samsung, Hyundai et LG cessent d'être de simples entreprises pour devenir les acteurs stratégiques de la survie nationale. La relation entre l'État et ces groupes n'est pas une simple collaboration, mais une collusion systémique. Le régime de Park garantit la stabilité et la prospérité des Chaebols par une aide massive : politique de taux d'intérêt préférentiel, accès prioritaire aux crédits bancaires et attribution de contrats publics exclusifs. En contrepartie, les Chaebols soutiennent politiquement et financièrement le régime, formant un bloc monolithique où le succès de l'entreprise est indissociable de la survie de la dictature. À partir des années 1970, ce modèle permet à la Corée du Sud de dépasser radicalement, puis de doubler, le dynamisme économique de la Corée du Nord.
        </p>
    </div>

    <div class="etape">
        <h2>L’impact de la crise économique asiatique sur <br> l’économie sud-coréenne et les chaebols</h2>
        <p>
            La crise financière asiatique de 1997, ou « crise du FMI » a été le choc qui a mis fin à l'ère de croissance rapide des chaebols. Auparavant, les chaebols s'étaient développés de manière inconsidérée grâce à des prêts à court terme, faisant grimper leur ratio d'endettement moyen à plus de 500 % (Krueger & Yoo, 2002). Ils s'étaient diversifiés dans tous les secteurs, même ceux où ils n'exerçaient pas d'expertise, ce qui avait engendré une faible efficacité opérationnelle. Lorsque les capitaux étrangers se sont retirés et que le won s'est effondré, ce réseau de conglomérats s'est désintégré, provoquant des faillites retentissantes comme celle du groupe Daewoo, dont la dette dépassait 70 milliards de dollars (OCDE, 1999).
            <br><br>
            En conséquence, la Corée du Sud a dû accepter un plan de sauvetage financier de 57 milliards de dollars du FMI avec les conditions de réformes rigoureuses. Les chaebols ont été contraints de mettre en œuvre la politique du « Big Deal » : les entreprises ont abandonné leurs structures diversifiées et cédé leurs activités déficitaires, mis fin aux garanties croisées et instauré une gouvernance transparente conforme aux normes internationales. 
            <br>
            Cette crise a mis fin au système d'emploi à vie, créant un marché du travail flexible mais aussi extrêmement stressant et inégalitaire. Cependant, c'est cette crise financière, conjuguée à ces réformes novatrices, qui a permis à des entreprises comme Samsung et Hyundai de se restructurer avec succès et de devenir des conglomérats technologiques mondiaux de premier plan.
        </p>
    </div>

</div>

<div class="navigation">

    <button id="prev">◄</button>

    <div class="dots">
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>

    <button id="suivants">►</button>

</div>
      
    
</div>
  
`;

const etapes = document.querySelectorAll(".etape");
const dots = document.querySelectorAll(".dot");

let current = 0;

function showStep(index){

    etapes.forEach(e => e.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    etapes[index].classList.add("active");
    dots[index].classList.add("active");
}

document.getElementById("suivants").onclick = () => {

    current++;

    if(current >= etapes.length){
        current = etapes.length - 1;
    }

    showStep(current);
};

document.getElementById("prev").onclick = () => {

    current--;

    if(current < 0){
        current = 0;
    }

    showStep(current);
};

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {
        e.preventDefault();
        document.getElementById("suivants").click();
    }

    if (e.key === "ArrowLeft") {
        e.preventDefault();
        document.getElementById("prev").click();
    }

});

    appliquerTraductions();
    slider.classList.add("show");
    enregistrerContenuVu("crise-fmi");
  };

  closeSlider.onclick = () => {
    slider.classList.remove("show");
  };
}




// slider scandale SPC

const affaireSPC = document.getElementById("scandale");

if (affaireSPC) {
  const slider = document.getElementById("slider");
  const sliderContent = document.getElementById("sliderContent");
  const closeSlider = document.getElementById("closeSlider");

  affaireSPC.onclick = () => {
    sliderContent.innerHTML = `
        <div class="grain">
        <br><br>
        <div class="article-pixel">

    <header class="hero-news">
        <div class="breaking">
            BREAKING NEWS
        </div>
        <h1>
            LE SCANDALE SPC
        </h1>
        <p>
            Le grave scandale des accidents du travail survenus dans les usines du géant agroalimentaire SPC (propriétaire des marques populaires comme Paris Baguette, Baskin-Robbins et Dunkin) a profondément choqué le public sud-coréenne. L'indignation publique s'est intensifiée après une série d'accidents du travail graves survenus dans les usines de l'entreprise, révélant une défaillance systémique en matière de sécurité des travailleurs.
        </p>
    </header>


    <section class="article-grid">
        <div class="photo-card">
            <img src="img/spc.png">
            <span>Usine SPC - Corée du Sud</span>
        </div>

        <div class="text-card">
            <h2>Le scandale</h2>
            <p>
               D'après les données d'organisations de la société civile, entre 2018 et juin 2023, 853 employés de SPC ont été victimes d'accidents du travail (soit une moyenne d'environ 13 cas par mois). Parmi ces violations systémiques, trois accidents graves, ayant entraîné des décès, ont été au cœur de la crise de l'entreprise et ont conduit à un boycott public des produits de la marque. Des accidents du travail graves ont eu lieu à plusieurs fois entre 2022 et 2025 : 
            </p>
        </div>
    </section>


    <section class="pixel-timeline">
        <h2>CHRONOLOGIE</h2>
        <div class="event">
            <div class="year">
                OCT 2022
            </div>
            <div class="event-card">
                Décès d'une ouvrière de 23 ans
                dans une usine SPC.
     <br><br>
              Le 15 octobre, une ouvrière d’environ 20 ans est décédée, le haut de son corps s'étant retrouvé coincé dans un mélangeur à sauce alors qu'elle travaillait à l'usine de pain de SPC à Pyeongtaek, dans la province de Gyeonggi. L'incident a choqué le public car le mélangeur était totalement dépourvu de dispositifs de sécurité élémentaires et la victime travaillait seule de nuit. Peu après, le 23 octobre 2022, un employé de la filiale Shany de SPC a perdu un doigt dans l'usine de pain de l'entreprise à Seongnam, Gyeonggi. Cet homme, âgé d'une quarantaine d'années, triait des produits défectueux sur un tapis roulant lorsque son doigt s'est retrouvé coincé dans la machine.
            </div>
        </div>

        <div class="event">
            <div class="year">
                AOÛT 2023
            </div>

            <div class="event-card">
                Une nouvelle ouvrière décède
                dans l'usine Shany.
              <br><br>
              Moins de dix mois après l'accident survenu dans l'usine SPC de Pyeongtaek, une autre ouvrière de 56 ans est décédée, écrasée par un pétrin dans l'usine de confiserie Shany, appartenant au groupe SPC, à Seongnam, Gyeonggi. Selon la police, l'accident s'est produit lors du transvasement de pâte d'un récipient à un autre. Alors que la victime travaillait avec une collègue, cette dernière a mis en marche la machine sans prendre les précautions de sécurité nécessaires. Cet accident survient moins d'un an après le décès d'une employée de 23 ans dans une autre usine SPC à Pyeongtaek, également dans la province de Gyeonggi.
            </div>
        </div>

        <div class="event">
            <div class="year">
                MAI 2025
            </div>

            <div class="event-card">
                Une employée meurt dans
                l'usine SPC Samlip.
              <br><br>
              Ce dernier accident, survenu le 19 mai 2025 vers 3 h du matin, ravive l’indignation suite à de précédents accidents du travail dans les usines SPC. Une ouvrière d’une cinquantaine d’années s’est retrouvée coincée sur un convoyeur et est décédée alors qu’elle lubrifiait le système de refroidissement du pain frais à l’usine SPC Samlip de Sihwa.
            </div>
        </div>
    </section>


    <section class="quote-card">
        <p>
            "Je ne veux pas manger un pain
            taché du sang des ouvriers"
        </p>
    </section>
  <section class="full-card">
    <h2>Gestion de l'entreprise</h2>
        <p>
            Ce que la société coréenne a jugé inacceptable, c'est l'attitude insensible et la gestion de crise de la direction de l'entreprise immédiatement après le premier accident, ainsi que la gestion répétée, insensible et superficielle des crises par cette même direction.
            <br><br>
             - Immédiatement après l'accident survenu en 2022 et ayant coûté la vie à une ouvrière de 23 ans, l'usine SPC s'est contentée d'arrêter la machine défectueuse, puis a contraint les autres ouvriers à continuer d'utiliser les machines voisines dès le lendemain, juste à côté du lieu où leur collègue venait de perdre la vie.
            <br><br>
            - L'envoi de boîtes de pain par l'entreprise en guise de condoléances lors des funérailles de la victime a été critiqué par le public comme un acte arrogant, témoignant d'un mépris pour la vie des travailleurs.        
            <br><br>
                 - La promesse de 2022 non tenue : Suite à l'accident de 2022, le président de SPC, Hur Young-in, a présenté des excuses publiques et promis 100 milliards de wons pour moderniser les systèmes de sécurité. Cependant, la multiplication des accidents mortels en 2023 et en mai 2025 a démontré que ces promesses étaient vaines.
            <br><br>
            - La culture des excuses copiées-collées : Immédiatement après l'accident de 2025, le PDG de SPC Samlip, Kim Beom-soo, a rapidement présenté des excuses et promis de coopérer à l'enquête. Cependant, l'opinion publique et les organisations de la société civile ont souligné que le contenu de ce document était une copie quasi conforme des précédentes excuses de l'entreprise, alimentant ainsi l'indignation générale. 
            </p>
    </section>



    <section class="article-grid">
        <div class="text-card-2">
            <h2>Le mouvement NO SPC</h2>
            <p>
               Les conditions de travail dangereuses pour les employés des usines SPC, ainsi que la gestion inefficace des conséquences par l'entreprise, ont entraîné une vague de boycotts contre les produits des marques appartenant à l'entreprise. Le dernier accident, survenu en mai 2025, a exacerbé la colère des consommateurs sud-coréens, les incitant à participer à la vaste campagne de boycott « Non à SPC ». Les consommateurs sud-coréens, notamment les jeunes, ont lancé un puissant mouvement de boycott sur les réseaux sociaux. 
            </p>
        </div>

        <div class="photo-card">
            <img src="img/scandale-spc.png">
            <span>Usine SPC - Corée du Sud</span>
        </div>

    </section>
    <section class="full-card-2">
        <p>
            Ils ont partagé des listes de toutes les marques de l'écosystème SPC pour appeler à un boycott total. Le slogan « Je ne veux pas manger de pain taché du sang des ouvriers » est devenu un symbole du mouvement. Les ventes de nombreuses franchises Paris Baguette ont chuté.
            </p>
    </section>
  
  <section class="article-grid">
        <div class="photo-card">
            <img src="img/scandale-spc-2.png">
            <span>Usine SPC - Corée du Sud</span>
        </div>

        <div class="text-card-2">
            <p>
               Suite à une série d'accidents du travail chez SPC, l'indignation grandissait. Les principaux syndicats français, notamment la CGT (Confédération Générale du Travail), se sont coordonnés avec l'UITA (Fédération Internationale des Travailleurs de l'Alimentation) et des organisations coréennes en France pour organiser des manifestations. Des syndicalistes français se sont rassemblés devant le magasin Paris Baguette, dans le 1er arrondissement de Paris. Ils ont distribué des tracts en français aux Parisiens et aux touristes, expliquant les nombreux manquements aux règles de sécurité au travail, le nombre de travailleurs blessés en Corée du Sud et appelant à une meilleure prise de conscience des pratiques éthiques de l'entreprise.
            </p>
        </div>
    </section>
  
  <section class="conclusion-card">
        <p>
            À travers la campagne de boycott, les participants ont exprimé leur profonde indignation face au contraste saisissant entre l'image élégante et moderne des boutiques Paris Baguette et les conditions de travail difficiles et dangereuses qui régnaient dans les usines. Ils ont dénoncé le fait que les grandes entreprises privilégiaient la rapidité de production et la maximisation des profits au détriment de la sécurité des travailleurs.
        </p>

    </section>
</div>
    
</div>
  
`;
    appliquerTraductions();
    slider.classList.add("show");
    enregistrerContenuVu("scandale");
  };

  closeSlider.onclick = () => {
    slider.classList.remove("show");
  };
}



//












document.addEventListener("DOMContentLoaded", () => {
    appliquerTraductions();
});
