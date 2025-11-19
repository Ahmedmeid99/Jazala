const PUBLIC_KEY = "ThijL73HGDMaw4i7L";
const SERVICE = "service_svkc71w";
const TEMPLATE = "template_1usngjq";

//----------------------------------------
// EmailJS functionality
//----------------------------------------
if (typeof emailjs !== "undefined") {
    emailjs.init(PUBLIC_KEY);

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            emailjs.sendForm(SERVICE, TEMPLATE, this)
                .then(() => {
                    alert("Message sent successfully!");
                    contactForm.reset();
                })
                .catch(err => alert("Error: " + JSON.stringify(err)));
        });
    }
}

//----------------------------------------
// Scroll Button
//----------------------------------------
const scrollBtn = document.querySelector(".scroll-btn");
if (scrollBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) scrollBtn.classList.add("show-scroll-btn");
        else scrollBtn.classList.remove("show-scroll-btn");
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

//----------------------------------------
// Hero Section
//----------------------------------------
const heroSection = document.getElementById("-hero-bg");
if (heroSection) {
    const heroImages = [
        "images/hero3.jpg",
        "images/hero5.jpg",
        "images/hero6.jpg",
    ];

    let current = 0;
    const loadedImages = heroImages.map(src => {
        const img = new Image();
        img.src = src;
        return img;
    });

    function changeHeroImage() {
        heroSection.style.backgroundImage = `url('${loadedImages[current].src}')`;
        heroSection.style.backgroundSize = "cover";
        heroSection.style.backgroundPosition = "center";
        heroSection.style.backgroundRepeat = "no-repeat";
        current = (current + 1) % loadedImages.length;
    }

    changeHeroImage();
    setInterval(changeHeroImage, 5000);
}

const vid = document.getElementById("heroVideo");
if (vid) {
    vid.playbackRate = 0.3; // Slow down to 50%

}

//----------------------------------------
// Loader
//----------------------------------------
const loader = document.getElementById("loader");
if (loader) {
    window.addEventListener("load", () => {
        setTimeout(() => loader.classList.add("hidden"), 2000);
    });
}

const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

//----------------------------------------
// Dark Mode Toggle
//----------------------------------------
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
    // Load saved mode
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Save preference
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

        // Optional: switch icon
        const icon = themeToggle.querySelector("i");
        icon.classList.toggle("fa-moon");
        icon.classList.toggle("fa-sun");
    });
}
