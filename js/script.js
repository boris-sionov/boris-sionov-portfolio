//===================================== MENU SHOW Y HIDDEN =========================
const nav_menu = document.getElementById('nav-menu')
const nav_toggle = document.getElementById('nav-toggle')
const nav_close = document.getElementById('nav-close')

// ================  MENU SHOW  =============
/*  Validate if the constant exists */
if(nav_toggle){
    nav_toggle.addEventListener('click', () => {
        nav_menu.classList.add('show-menu')
    })
} 

// ================  MENU HIDE  =============
/*  Validate if the constant exists */
if(nav_close){
    nav_close.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
} 

console.log("MENU Y SETTING WORKING!")
//===================================== REMOVE MENU PRORFILE =========================
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on nav__links, we remove the show menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
console.log("Remove menu profile is working!")


//===================================== MENU SHOW Y HIDDEN =========================
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// ================  MENU SHOW  =============
/*  Validate if the constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
} 

// ================  MENU HIDE  =============
/*  Validate if the constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
} 

console.log("MENU Y SETTING WORKING!")

//===================================== REMOVE MENU PRORFILE =========================
const nav_link = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on nav__links, we remove the show menu
    navMenu.classList.remove('show-menu')
}

nav_link.forEach(n => n.addEventListener('click', linkAction))
console.log("Remove menu profile is working!")

//===================================== SCROLL SECTION ACTIVE HIGHLIGHT =========================

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })


    console.log("Section highlight working!")
}
window.addEventListener('scroll', scrollActive)

//===================================== Typewriter Effect =========================


new Typewriter('#typewriter', {
    strings: ['Boris Sionov', 'Automaion engineer', 'Manual tester', 'Web tester', 'Mobile tester', 'OTT tester'],
    autoStart: true,
    loop: true,
    cursor: "|"
  });
  console.log("Typewriter effect is working!")