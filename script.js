const menuBurgerBtn = document.getElementById("menu-open");
const menuCloseBtn = document.getElementById("menu-close");
const navLinkContainer = document.getElementById("nav-links");
const mainContent = document.getElementById("main");

document.addEventListener("DOMContentLoaded", () => {
  menuBurgerBtn.addEventListener("click", () => {
    showNavLinks();
  });

  menuCloseBtn.addEventListener("click", () => {
    closeNavLinks();
  });

  mainContent.addEventListener("click", () => {
    if (navLinkContainer.style.display === "flex") {
      closeNavLinks();
    }
  });

  navLinkContainer.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent event from bubbling to mainContent
  });
});

function showNavLinks() {
  menuBurgerBtn.style.display = "none";
  menuCloseBtn.style.display = "block";
  navLinkContainer.style.display = "flex";
}

function closeNavLinks() {
  menuBurgerBtn.style.display = "block";
  menuCloseBtn.style.display = "none";
  navLinkContainer.style.display = "none";
}
