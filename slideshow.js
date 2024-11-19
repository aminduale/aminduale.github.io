let slideIndex = 0;
function showSlides() {
    const slides = document.querySelectorAll(".slide");

    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");

    // Increment slide index, loop back to the first slide
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change image every 3 seconds
    setTimeout(showSlides, 3000);
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", showSlides);