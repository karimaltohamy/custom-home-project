const menuMobile = document.querySelector(".menu-mobile");
const btnMenu = document.querySelector(".menu_icon");
const btnClose = document.querySelector(".close-menu");

btnMenu.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
});

btnClose.addEventListener("click", () => {
  menuMobile.classList.remove("active");
});
