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
s
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
    sliderContent.innerHTML = "<h1>Approfondissement</h1>";
    slider.classList.add("show");
  };

  document.getElementById("chaebolsvs").onclick = () => {
    sliderContent.innerHTML = "<h1>Comparaison</h1>";
    slider.classList.add("show");
  };

  document.getElementById("preparer1").onclick = () => {
    window.location.href = "deplacer1.html";
  };
}


/*********************************/
/************* DEPLACER **********/
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
    sliderContent.innerHTML = "<h1>Approfondissement 2</h1>";
    slider.classList.add("show");
  };

  document.getElementById("itw1").onclick = () => {
    sliderContent.innerHTML = "<h1>Interview de ?</h1>";
    slider.classList.add("show");
  };

  document.getElementById("carte1").onclick = () => {
    sliderContent.innerHTML = "<h1>Carte</h1>";
    slider.classList.add("show");
  };

  document.getElementById("preparer2").onclick = () => {
    window.location.href = "deplacer2.html";
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
    window.location.href = "discussion1.html";
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