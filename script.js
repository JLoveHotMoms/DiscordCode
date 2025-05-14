document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".theme-toggle");

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        toggleButton.textContent = 
            document.body.classList.contains("dark-mode") ? "☀️ Tryb jasny" : "🌙 Tryb ciemny";
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
