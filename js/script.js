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

/* QUALIFICATION TABS */
const $tabQualification = document.querySelectorAll(".qualification-button")
let $tabActive = document.querySelector(".qualification-button.-active")

function selectQualification(item) {
   item.preventDefault();
   let $tabClicked = this;
   $tabActive.classList.remove("-active");
   $tabClicked.classList.add("-active");
   $tabActive = $tabClicked;

   let $contentActive = document.querySelector(".qualification-content.-active");
   $contentActive.classList.remove("-active");
   let idContent = $tabClicked.getAttribute("href");
   let $targetContent = document.querySelector(idContent);
   $targetContent.classList.add("-active");
}

$tabQualification.forEach((tabItem) => {
   tabItem.addEventListener("click", selectQualification)
})

/* SERVICES MODAL */
const $cardButtons = document.querySelectorAll(".card-button")
const $serviceModals = document.querySelectorAll(".service-modal")
const $closeModals = document.querySelectorAll(".modal-close")

let modalService = (modalClick) => {
   $serviceModals[modalClick].classList.add("-active")
}

$cardButtons.forEach((cardButton, i) => {
   cardButton.addEventListener("click", () => {
      modalService(i)
   })
})

$closeModals.forEach((closeModal) => {
   closeModal.addEventListener("click", () => {
      $serviceModals.forEach((serviceModal) => {
         serviceModal.classList.remove("-active")
      })
   })
})

/* PORTFOLIO CAROUSEL */
const $portfolioCarousel = document.querySelector(".glide.portfolio-carousel")

new Glide($portfolioCarousel, {
   type: "carousel",
   gap: 0,
   startAt: 1,
   perView: 1,
   autoplay: 3000,
   hoverpause: true,
   animationDuration: 1000
}).mount()

/* TESTIMONIAL CAROUSEL */

const $testimonialCarousel = document.querySelector(".glide.testimonial-carousel")

new Glide($testimonialCarousel, {
   type: "carousel",
   gap: 60,
   startAt: 1,
   perView: 2,
   autoplay: 3000,
   hoverpause: true,
   animationDuration: 1000,
   breakpoints: {
      992: {
         gap: 60,
         perView: 1,
         peek: {
            before: 200,
            after: 200
         },
      },
      610: {
         gap: 20,
         perView: 1,
      }
   }
}).mount()

