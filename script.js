// Kontrollera att GSAP är importerat
console.log("GSAP version:", gsap.version);

// Förbered animation för framtiden
// Exempel på hur du kan animera logotypen
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
    
  gsap.fromTo(
    ".logo",
    { opacity: 0, scale: 1.2, filter: "brightness(1)" },
    { opacity: 0.8, scale: 1, filter: "brightness(0.3) sepia(1)", duration: 2, ease: "power2.inOut" }
);;
});

document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll(".content-section");

    menuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Dölj alla sektioner
            sections.forEach(section => {
                section.classList.remove("show");
            });

            // Visa den sektion som matchar länken
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add("show");
            }
        });
    });
});
