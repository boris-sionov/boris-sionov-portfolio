//===================================== DARK THEME =========================

document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("theme-button");
    const themeSound = document.getElementById("theme-sound");
    const darkTheme = "dark-theme";
    const iconTheme = "uil-sun";

    // Retrieve stored theme settings
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
    const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun");

    // Apply stored theme or set default to dark mode
    if (selectedTheme) {
        document.body.classList.toggle(darkTheme, selectedTheme === "dark");
        themeButton.classList.toggle(iconTheme, selectedIcon === "uil-moon");
    } else {
        document.body.classList.add(darkTheme);
        themeButton.classList.add(iconTheme);
        localStorage.setItem("selected-theme", "dark");
        localStorage.setItem("selected-icon", "uil-moon");
    }

    // Toggle theme on button click
    themeButton.addEventListener("click", () => {
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);
        console.log("Theme color is changed");

        // Play the toggle sound
        if (themeSound) {
            themeSound.currentTime = 0;
            themeSound.play().catch(err => console.error("Audio playback failed:", err));
            console.log("Sound effect works");
        }

        localStorage.setItem("selected-theme", getCurrentTheme());
        localStorage.setItem("selected-icon", getCurrentIcon());
    });
});

//===================================== Open bottom menu =========================

document.addEventListener("DOMContentLoaded", function () {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
    const navLinks = document.querySelectorAll(".nav__link");

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show-menu");
            console.log("Bottom menu opened");
        });
    }

    if (navClose) {
        navClose.addEventListener("click", () => {
            navMenu.classList.remove("show-menu");
            console.log("Bottom menu closed by clicking on X button");
        });
    }

    navLinks.forEach(link => link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
        console.log("Bottom menu closed by clicking on a link");
    }));

    document.addEventListener("click", (event) => {
        if (navMenu.classList.contains("show-menu") && !navMenu.contains(event.target) && !navToggle.contains(event.target)) {
            navMenu.classList.remove("show-menu");
            console.log("Bottom menu closed by clicking outside");
        }
    });
});

//===================================== Typewriter Effect =========================

document.addEventListener("DOMContentLoaded", function () {
    new Typewriter("#typewriter", {
        strings: ["Boris Sionov", "Father", "Automation Engineer", "OTT Tester", "Mobile and Web Tester", "SW & HW Integration Tester"],
        autoStart: true,
        loop: true,
        cursor: "|"
    });
});


//===================================== Portfolio Swiper =========================

var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel:{
        invert: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
  });


//===================================== Whatsapp link =========================
function openWhatsApp() {
    window.open("https://wa.me/972525927886", "_blank");
    console.log("");
  }


//===================================== SCROLL UP =========================
function scrollUp(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll higher than 560 viewpoint /height , then the scroll up icon showld appear and on clicking should reach top of the page
    if(this.scrollY >= 560) {
        scrollup.classList.add('show-scroll');
        console.log("Scorlled up");
    }
    else {
        scrollup.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)

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
}
window.addEventListener('scroll', scrollActive)



