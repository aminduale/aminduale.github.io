document.addEventListener("DOMContentLoaded", function () {
    const greetingElement = document.getElementById("greeting");

    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning! Welcome to Kenya's Heritage.";
    } else if (hours < 18) {
        greeting = "Good Afternoon! Explore Kenya's rich culture.";
    } else {
        greeting = "Good Evening! Discover Kenya's beauty.";
    }

    greetingElement.textContent = greeting;
});