let currentIndex = 0;

const prevButton = document.getElementById("prevBtn") as HTMLButtonElement;
const nextButton = document.getElementById("nextBtn") as HTMLButtonElement;
const slide = document.querySelector(".carousel-slide") as HTMLDivElement;
const slides = document.querySelectorAll(".carousel-slide img");

nextButton.addEventListener("click", () => {
    if (currentIndex >= slides.length - 1) return;
    currentIndex++;
    updateSlide();
});

prevButton.addEventListener("click", () => {
    if (currentIndex <= 0) return;
    currentIndex--;
    updateSlide();
});

function updateSlide() {
    const offset = -currentIndex * 70;
    slide.style.transform = `translateX(${offset}%)`;
}