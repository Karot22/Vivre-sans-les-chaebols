const texts = {
  en: {
    title: "Living without Chaebols",
    subtitle: "Are you ready for the challenge?",
    def: "A large South Korean conglomerate...",
  },
  fr: {
    title: "Vivre sans les Chaebols",
    subtitle: "Seriez-vous prêt à relever le défi ?",
    def: "Chaebol (재벌) n.m<br><br>Grand conglomérat commercial en Corée du Sud, généralement détenu et dirigé par une seule famille. <br> On peut le considérer comme une famille gérant plusieurs entreprises sous un même nom. <br><br>",
  },
  kr: {
    title: "재벌 없이 살기",
    subtitle: "도전할 준비가 되었나요?",
    def: "재벌은 한국의 대기업...",
  },
};
/*********************************/
/************* PAGE 1 ************/
/*********************************/

document.querySelectorAll(".flag").forEach(flag => {
  flag.addEventListener("mouseover", () => {
    const lang = flag.dataset.lang;
    document.getElementById("title").textContent = texts[lang].title;
    document.getElementById("subtitle").textContent = texts[lang].subtitle;
  });

  flag.addEventListener("click", () => {
    const lang = flag.dataset.lang;
    localStorage.setItem("lang", lang);
    window.location.href = "def.html";
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
  window.location.href = "dual.html";
}


/*********************************/
/************* PAGE DUAL *********/
/*********************************/

if (document.body.classList.contains("dual")) {
  document.querySelector(".left").onclick = () => {
    window.location.href = "intro.html";
  };

  document.querySelector(".right").onclick = () => {
    window.location.href = "documentaire.html";
  };
}


/*********************************/
/************* BACK **************/
/*********************************/

function goBack() {
  window.location.href = "dual.html";
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

  // Page d'introduction js

  document.getElementById("apr1").onclick = () => {
    sliderContent.innerHTML = "<h1>Approfondissement historique</h1> <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vQRByxhwAz-Ac_rrRVguZtsp0sJ5h7y2v3JBwGaQW7cxjoEzKkf4tH9aXF30ZayVZVAeS6OUBfjSH2q&font=Default&lang=en&initial_zoom=2&width=100%25&height=100%' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe> <br> <h2>International Monetary Fund</h2>";
    slider.classList.add("show");
  };

  document.getElementById("chaebolsvs").onclick = () => {
    sliderContent.innerHTML = `
    <h1>Differences entre Chaebol et grande entreprise</h1>

    <div class="definition-box">
      
      <div class="definition-text">
        <p><strong>Définition étymologique :</strong></p>
        <div class="chips">
          <span>Chae = richesse</span>
          <span>bol = clan</span>
          <span>Chaebol = clan des riches</span>
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

  `;
    slider.classList.add("show");
  };

  document.getElementById("preparer1").onclick = () => {
    window.location.href = "deplacer-part-1.html";
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
    sliderContent.innerHTML = "<h1>Annexes complémentaires</h1> <br> <h2>L'histoire de Hyundai</h2> <br> <h2>Carte de Busan</h2>";
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
    window.location.href = "deplacer-part-2.html";
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

  document.getElementById("cheminT").onclick = () => {
    sliderContent.innerHTML = "<h1>Tracé du chemin</h1>";
    slider.classList.add("show");
  };

  document.getElementById("questionsM").onclick = () => {
    window.location.href = "discussion-part-1.html";
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

  document.getElementById("cultureT").onclick = () => {
    sliderContent.innerHTML = "<h1>Culture du travail en Corée du Sud</h1>";
    slider.classList.add("show");
  };

  document.getElementById("cultureU").onclick = () => {
    sliderContent.innerHTML = "<h1>Culture universitaire liée aux Chaebols</h1>";
    slider.classList.add("show");
  };

  document.getElementById("chercherB").onclick = () => {
    window.location.href = "trouver-a-boire.html";
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
    window.location.href = "discussion-part-2.html";
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
    sliderContent.innerHTML = "<h1>Annexes complémentaires</h1>";
    slider.classList.add("show");
  };

  document.getElementById("itw3").onclick = () => {
    sliderContent.innerHTML = "<h1>Interview complète de ?</h1>";
    slider.classList.add("show");
  };

  document.getElementById("manger").onclick = () => {
    window.location.href = "se-nourrir.html";
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
    window.location.href = "conclusion.html";
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
    window.location.href = "informations.html";
  };

  document.getElementById("annexes").onclick = () => {
    window.location.href = "annexes.html";
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
  menuIcon.src = open ? "img/croix-rouge.png" : "img/menu.png";

  // 🔥 pause vidéo 
  if (open) {
    if (introPlayer) introPlayer.pause();
    if (deplacerPlayer) deplacerPlayer.pause();
  }
}

function closeMenu() {
  menu.classList.remove("show");
  menuOverlay.classList.remove("show");
  menuIcon.src = "img/menu.png";
}

if (menuBtn) menuBtn.onclick = toggleMenu;
if (menuOverlay) menuOverlay.onclick = closeMenu;

// navigation
if (goDual) goDual.onclick = () => location.href = "dual.html";
if (goDoc) goDoc.onclick = () => location.href = "documentaire.html";
if (goAnnexe) goAnnexe.onclick = () => location.href = "annexes.html";
if (goLegal) goLegal.onclick = () => location.href = "mentions.html";

// langue
langBtns.forEach(btn => {
  btn.onclick = () => {
    localStorage.setItem("lang", btn.dataset.lang);
    location.reload();
  };
});



