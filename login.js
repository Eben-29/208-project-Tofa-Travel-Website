function openLoginPopup() {
    document.getElementById('dimmed-background').classList.remove('hidden');
    document.getElementById('login-popup').classList.remove('hidden');
}
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Optional: Auto-slide every 3 seconds
setInterval(nextSlide, 3000);


function closeLoginPopup() {
    document.getElementById('dimmed-background').classList.add('hidden');
    document.getElementById('login-popup').classList.add('hidden');
}

function registerNow() {
    // Handle register logic here
    alert('Register now clicked');
}
