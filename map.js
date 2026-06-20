function getVideoUrl(baseUrl) {
  const lang = localStorage.getItem("lang") || "fr";
  let subtitle = "fr";
  if (lang === "en") {
    subtitle = "en";
  }
  else if (lang === "kr") {
    subtitle = "ko";
  }
  return `${baseUrl}?autoplay=1&texttrack=${subtitle}`;
}


// ==========================
// CONFIGURATION DES NIVEAUX
// ==========================

const niveaux = [
  "intro",
  "deplacer1",
  "discussion1",
  "boire",
//   "discussion2",
  "nourrir",
  "conclusion",
];

let niveauActuel = 0;

// ==========================
// MISE À JOUR DE LA CARTE
// ==========================

function mettreAJourCarte() {
  const progression = parseInt(localStorage.getItem("progression")) || 0;

  niveaux.forEach((niveau, index) => {
    const element = document.getElementById("niveau-" + niveau);

    if (!element) return;

    element.classList.remove("done", "current", "locked");

    if (index < progression) {
      element.classList.add("done");
    } else if (index === progression) {
      element.classList.add("current");
    } else {
      element.classList.add("locked");
    }
  });
}

// ==========================
// MAJ ELEMENTS COMPLEMENTAIRE
// ==========================

const contenusComplementaires = {
  eleves: {
    unlock: 0,
    message: "lock_intro",
    titre:"titre_point_eleves_pensent"
  },

  vs: {
    unlock: 0,
    message: "lock_intro",
    titre:"titre_point_vs"
  },

  apr1: {
    unlock: 0,
    message: "lock_intro",
    titre:"titre_point_apr1"
  },

  boycott: {
    unlock: 1,
    message: "lock_chap1",
    titre:"titre_point_boycott"
  },

  "se-deplacer-en-coree": {
    unlock: 1,
    message: "lock_chap1",
    titre:"titre_point_deplacer_coree"
  },

  "crise-fmi": {
    unlock: 2,
    message: "lock_chap2",
    titre:"titre_point_fmi"
  },

  scandale: {
    unlock: 3,
    message: "lock_chap3",
    titre:"titre_point_scandale_spc"
  },

//   "interview-monsieur": {
//     unlock: 4,
//     message: "lock_chap4"
//   },

  "interview-dame": {
    unlock: 5,
    message: "lock_outro",
    titre:"titre_point_interview_dame"
  },

  "interview-fille-boycott": {
    unlock: 5,
    message: "lock_outro",
    titre:"titre_point_interview_fille"
  },

  "affaire-scandaleuse": {
    unlock: "interview-dame",
    message: "lock_dame",
    titre:"titre_point_Affairescanleuse"
  }
};


// 

const Chapter = {
  "niveau-intro": {
    messages: "message_introduction"
  },

  "niveau-deplacer1": {
    messages: "message_chapitre_1"
  },

  "niveau-discussion1": {
    messages: "message_chapitre_2"
  },

  "niveau-boire": {
    messages: "message_chapitre_3"
  },

  "niveau-nourrir": {
    messages: "message_chapitre_4"
  },

  "niveau-conclusion": {
    messages: "message_outro"
  }
};

//



function mettreAJourContenus() {

  const progression =
    parseInt(localStorage.getItem("progression")) || 0;

  const contenusVus =
    JSON.parse(
      localStorage.getItem("contenusVus")
    ) || [];

  Object.entries(contenusComplementaires)
    .forEach(([id, config]) => {
      const element =
        document.getElementById(id);
      if (!element) return;

      element.classList.remove(
        "grise",
        "debloquer",
        "consulter"
      );

      

      let debloque = false;
      if (typeof config.unlock === "number") {
        debloque = progression > config.unlock;
      }

      else {
        debloque =
          contenusVus.includes(config.unlock);
      }

      if (!debloque) {
        element.classList.add("grise");
      }

      else if (
        contenusVus.includes(id)
      ) {
        element.classList.add("consulter");
      }

      else {
        element.classList.add("debloquer");
      }
    });
}

// ==========================
// INITIALISATION
// ==========================

mettreAJourCarte();
mettreAJourContenus();


function enregistrerContenuVu(id) {

  let contenusVus =
    JSON.parse(
      localStorage.getItem("contenusVus")
    ) || [];

  if (!contenusVus.includes(id)) {

    contenusVus.push(id);

    localStorage.setItem(
      "contenusVus",
      JSON.stringify(contenusVus)
    );
  }

  mettreAJourContenus();
}

// const messagesBlocage = {
//   "eleves": "🔒 Regardez l'introduction pour débloquer ce contenu.",
//   "vs": "🔒 Regardez l'introduction pour débloquer ce contenu.",
//   "apr1": "🔒 Regardez l'introduction pour débloquer ce contenu.",

//   "boycott": "🔒 Terminez le chapitre « Se déplacer ».",
//   "se-deplacer-en-coree": "🔒 Terminez le chapitre « Se déplacer ».",

//   "crise-fmi": "🔒 Terminez le chapitre « Discussion 1 ».",

//   "scandale": "🔒 Terminez le chapitre « Trouver à boire ».",

//   "interview-monsieur": "🔒 Terminez le chapitre « Discussion 2 ».",

//   "interview-dame": "🔒 Regardez la conclusion.",
//   "interview-fille-boycott": "🔒 Regardez la conclusion.",

//   "affaire-scandaleuse":
//     "🔒 Regardez l'interview complète de la dame."
// };

const tooltip =
  document.getElementById("tooltipLock");

document
.querySelectorAll(".imageComplementaire")
.forEach(img => {

  img.addEventListener("mouseenter", () => {

    // if(!img.classList.contains("grise"))
    // return;

  const lang =
    localStorage.getItem("lang") || "fr";

  const config =
    contenusComplementaires[img.id];

    if(img.classList.contains("grise")){
        tooltip.innerText =
        texts[lang][config.message];
    }
    else{
        tooltip.innerText =
        texts[lang][config.titre];
    }

//   tooltip.innerText =
//     texts[lang][config.message];

  tooltip.style.opacity = 1;
  });

  img.addEventListener("mousemove", e => {

    tooltip.style.left =
      e.clientX + 15 + "px";

    tooltip.style.top =
      e.clientY + 15 + "px";
  });

  img.addEventListener("mouseleave", () => {

    tooltip.style.opacity = 0;
  });

});

// Hover chapitre

const tooltipChapter =
  document.getElementById("tooltipChapter");

document
.querySelectorAll(".icone")
.forEach(img => {

  img.addEventListener("mouseenter", () => {

  const lang =
    localStorage.getItem("lang") || "fr";

  const levelId =
      img.closest(".niveau").id;

    const config =
      Chapter[levelId];

  tooltipChapter.innerText =
    texts[lang][config.messages];

  tooltipChapter.style.opacity = 1;
  });

  img.addEventListener("mousemove", e => {

    tooltipChapter.style.left =
      e.clientX + 15 + "px";

    tooltipChapter.style.top =
      e.clientY + 15 + "px";
  });

  img.addEventListener("mouseleave", () => {

    tooltipChapter.style.opacity = 0;
  });

});

//



// test

document
  .querySelectorAll(".imageComplementaire")
  .forEach(img => {

    img.addEventListener("click", () => {

      if(img.classList.contains("grise"))
        return;

      const video =
        img.dataset.video;

      if(!video)
        return;

    //   frame.src = video;
    frame.src = getVideoUrl(video);

      overlay.classList.add("show");

      setTimeout(() => {
        player = new Vimeo.Player(frame);
      }, 500);

      enregistrerContenuVu(img.id);

    });

  });

//

function calculerProgression() {

  const total =
    Object.keys(
      contenusComplementaires
    ).length;

  const vus =
    JSON.parse(
      localStorage.getItem("contenusVus")
    ) || [];

  return Math.round(
    (vus.length / total) * 100
  );
}




// ==========================
// OVERLAY VIDÉO
// ==========================


const overlay = document.getElementById("videoOverlay");

const frame = document.getElementById("videoFrame");
let player = null;

// ==========================
// OUVERTURE D'UNE VIDÉO
// ==========================

document.querySelectorAll(".niveau").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (btn.classList.contains("locked")) {
      return;
    }

    niveauActuel = parseInt(btn.dataset.level);

    frame.src = getVideoUrl(btn.dataset.video);
    // frame.src = btn.dataset.video;

    overlay.classList.add("show");
    setTimeout(() => {
      player = new Vimeo.Player(frame);
    }, 500);

  });
});

// ==========================
// FERMETURE VIDÉO
// ==========================

document.getElementById("closeVideo").addEventListener("click", () => {
  overlay.classList.remove("show");

  frame.src = "";

  const progression = parseInt(localStorage.getItem("progression")) || 0;

  if (niveauActuel >= progression) {
    localStorage.setItem("progression", niveauActuel + 1);
  }

  mettreAJourCarte();
  mettreAJourContenus();
});


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
  menuIcon.src = open ? "img/croix-rouge.png" : "img/menu-3.png";

  //  pause vidéo 
 if (open && player) {
    player.pause();
  }
}

function closeMenu() {
  menu.classList.remove("show");
  menuOverlay.classList.remove("show");
  menuIcon.src = "img/menu-3.png";
}

if (menuBtn) menuBtn.onclick = toggleMenu;
if (menuOverlay) menuOverlay.onclick = closeMenu;

// navigation
if (goDual) goDual.onclick = () => location.href = "dual.html";
if (goDoc) goDoc.onclick = () => location.href = "documentaire.html";
if (goAnnexe) goAnnexe.onclick = () => location.href = "annexes.html";
if (goLegal) goLegal.onclick = () => location.href = "mentions-legales.html";




// reset & Unlock bouton

const unlockAllBtn =
  document.getElementById("unlockAllBtn");

const resetAllBtn =
  document.getElementById("resetAllBtn");

  // Unlock

  unlockAllBtn.addEventListener("click", () => {

    if (
    !confirm(
      "Êtes-vous sûr de tout débloquer ?"
    )
  ) return;

  localStorage.setItem(
    "progression",
    niveaux.length
  );

  localStorage.setItem(
    "contenusVus",
    JSON.stringify(
      Object.keys(contenusComplementaires)
    )
  );

  mettreAJourCarte();
  mettreAJourContenus();
});

// Reset 

resetAllBtn.addEventListener("click", () => {

  if (
    !confirm(
      "Réinitialiser toute la progression ?"
    )
  ) return;

  localStorage.removeItem("progression");
  localStorage.removeItem("contenusVus");

  mettreAJourCarte();
  mettreAJourContenus();

});





// langue
langBtns.forEach(btn => {

    btn.onclick = () => {

        localStorage.setItem(
            "lang",
            btn.dataset.lang
        );

        appliquerTraductions();
    };

});
