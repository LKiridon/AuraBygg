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

// Hämta knappar och formulär
const contactBtn = document.getElementById('contact-btn');
const contactFormContainer = document.getElementById('contact-form-container');
const closeFormBtn = document.getElementById('close-form');

// Visa kontaktformuläret när knappen klickas
contactBtn.addEventListener('click', () => {
    contactFormContainer.style.display = 'flex';
});

// (Valfritt) Stäng kontaktformuläret om användaren klickar utanför
window.addEventListener('click', (event) => {
    if (event.target === contactFormContainer) {
        contactFormContainer.style.display = 'none';
    }
});

// När sidan är laddad
window.onload = function() {
    emailjs.init('Aqf-wFwkeqgSJH8PF'); // Ersätt 'YOUR_USER_ID' med ditt EmailJS användar-ID
};

// Formulärhantering
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Förhindrar standardformulärsändning
    
    // Skickar formuläret via EmailJS
    emailjs.sendForm('service_79qsun9', 'template_c5ni5uq', this)
        .then(function(response) {
            console.log('Success:', response);
            alert('Meddelandet skickades framgångsrikt!');
        }, function(error) {
            console.log('Error:', error);
            alert('Det gick inte att skicka meddelandet. Försök igen senare.');
        });
});
