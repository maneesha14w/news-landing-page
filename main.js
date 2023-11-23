import "./scss/style.scss";

const btnOpen = document.getElementById("btnOpen");
const media = window.matchMedia("(width < 69.375em)");
const navContent = document.querySelector(".nav__content");
const navOverlay = document.querySelector(".nav__overlay");

function openMenu() {
  btnOpen.setAttribute("aria-expanded", "true");
}

function setupNav(e) {
  if (e.matches) {
    // if mobile

    setTimeout(() => {
      navContent.style.display = "block";
      navOverlay.style.display = "block";
    }, 500);
  } else {
    // else desktop
    navContent.style.display = "";
  }
}

btnOpen.addEventListener("click", openMenu);
media.addEventListener("change", (e) => {
  setupNav(e);
});

setupNav(media);
