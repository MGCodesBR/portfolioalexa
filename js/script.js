/* MENU BUTTON */
const $openMenu = document.querySelector(".open-menu-button")
const $mainNav = document.querySelector(".main-nav")
const $closeMenu = document.querySelector(".close-menu-button")

$openMenu.addEventListener("click", () => {
   $mainNav.classList.add("-active")
})

$closeMenu.addEventListener("click", () => {
   $mainNav.classList.remove("-active")
})