document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".hero-sl div"); 
    let currentSlide = 1; 

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove("slide1", "slide-kiri", "slide-kanan");

            if (index === currentSlide) {
                slide.classList.add("slide1"); 
            } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
                slide.classList.add("slide-kiri"); 
            } else if (index === (currentSlide + 1) % slides.length) {
                slide.classList.add("slide-kanan");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides();
    }

    document.querySelector(".lanjut:nth-child(2)").addEventListener("click", nextSlide);
    document.querySelector(".slide2").addEventListener("click", prevSlide);

    setInterval(nextSlide, 3000);

    updateSlides();
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".flowers button");
    const flowerContainers = document.querySelectorAll(".bunga > div");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");

            buttons.forEach(btn => btn.classList.remove("active"));

            this.classList.add("active");

            flowerContainers.forEach(container => {
                if (filter === "all") {
                    container.style.display = "flex"; 
                } else {
                    container.style.display = container.classList.contains(filter) ? "flex" : "none";
                }
            });
        });
    });

    document.querySelector(".all").click();
});
