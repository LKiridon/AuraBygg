// Kontrollera att GSAP är importerat
console.log("GSAP version:", gsap.version);

// Förbered animation för framtiden
// Exempel på hur du kan animera logotypen
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
    
    // Testa enkel animation
    gsap.fromTo(
        logo,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    );
});
