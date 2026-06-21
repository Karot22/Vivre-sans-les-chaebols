const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const menuOverlay = document.getElementById("menuOverlay");
const menuIcon = document.getElementById("menuIcon");

// navigation
const goDual = document.getElementById("goDual");
const goCarte = document.getElementById("goCarte");
const goDoc = document.getElementById("goDoc");
const goAnnexe = document.getElementById("goAnnexe");
const goBiblio = document.getElementById("goBiblio");
const goLegal = document.getElementById("goLegal");

// langue
const langBtns = document.querySelectorAll(".menu-lang button");

function toggleMenu() {
  menu.classList.toggle("show");
  menuOverlay.classList.toggle("show");

  const open = menu.classList.contains("show");

  // icône
  menuIcon.src = open ? "img/croix-rouge.png" : "img/menu-3.png";

  
}

function closeMenu() {
  menu.classList.remove("show");
  menuOverlay.classList.remove("show");
  menuIcon.src = "img/menu-3.png";
}

if (menuBtn) menuBtn.onclick = toggleMenu;
if (menuOverlay) menuOverlay.onclick = closeMenu;



const images =
document.querySelectorAll(".gallery img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

const closeBtn =
document.querySelector(".close");

images.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImg.src = img.src;
    });

});

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", e => {

    if(e.target === lightbox){

        lightbox.classList.remove("active");
    }
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
