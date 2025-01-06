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
