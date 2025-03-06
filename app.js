document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode");
    const elements = document.querySelectorAll("body, section, nav,  .home-content a");
    const body = document.body
    
    // Check for dark mode in localStorage
    if (localStorage.getItem("theme") === "dark") {
        elements.forEach(element => {
            element.classList.add("dark-mode")
        });
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener("click", () => {
        elements.forEach(element => {
            element.classList.toggle("dark-mode")
        });

        // Save or remove dark mode preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});
