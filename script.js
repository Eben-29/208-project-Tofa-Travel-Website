// Translations for language selector
const translations = {
    en: {
        agentLogin: "Agent Login",
    },
    es: {
        agentLogin: "Inicio de Agente",
    },
    fr: {
        agentLogin: "Connexion Agent",
    },
    de: {
        agentLogin: "Agentenanmeldung",
    },
    zh: {
        agentLogin: "代理登录",
    },
    hi: {
        agentLogin: "एजेंट लॉगिन",
    }
};

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const body = document.body;
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

    // Theme changes based on the current slide
    switch (currentSlide) {
        case 0:
            body.style.backgroundColor = "#f2f2f2"; // Umrah Visa theme
            break;
        case 1:
            body.style.backgroundColor = "#e6e6e6"; // Saudi Arabia Visa theme
            break;
        case 2:
            body.style.backgroundColor = "#d9d9d9"; // Dubai Visa theme
            break;

    }
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Optional: Auto-slide every 3 seconds
setInterval(nextSlide, 3500);

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide); // Initial call to set the first slide and theme
});
