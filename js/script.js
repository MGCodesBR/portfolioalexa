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

/* SKILLS BUTTONS */
const $skillButtons = document.querySelectorAll(".skill-button")

function selectSkill() {
   let $skillActive = this
   if ($skillActive.classList.contains("-active")) {
      $skillActive.classList.remove("-active")
   } else {
      $skillActive.classList.add("-active")
   }
}

$skillButtons.forEach((skillItem) => {
   skillItem.addEventListener("click", selectSkill)
})