var currentIndex = 0;
var prevButton = document.getElementById("prevBtn");
var nextButton = document.getElementById("nextBtn");
var slide = document.querySelector(".carousel-slide");
var slides = document.querySelectorAll(".carousel-slide img");
nextButton.addEventListener("click", function () {
    if (currentIndex >= slides.length - 1)
        return;
    currentIndex++;
    updateSlide();
});
prevButton.addEventListener("click", function () {
    if (currentIndex <= 0)
        return;
    currentIndex--;
    updateSlide();
});
function updateSlide() {
    var offset = -currentIndex * 70;
    slide.style.transform = "translateX(".concat(offset, "%)");
}

function redirectTo(url) {
    window.open(url, '_blank'); // Open the URL in a new tab/window
}