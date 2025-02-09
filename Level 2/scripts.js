document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.2 }
    );

    cards.forEach((card, index) => {
        card.classList.add(index % 2 === 0 ? "slide-left" : "slide-right");
        observer.observe(card);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const typingElements = document.querySelectorAll(".intro p");

    function typeEffect(element, text, index = 0) {
        if (index < text.length) {
            element.innerHTML = text.slice(0, index + 1) + "<span class='cursor'>|</span>";
            setTimeout(() => typeEffect(element, text, index + 1), 100);
        } else {
            element.innerHTML = text; // Remove cursor after typing finishes
        }
    }

    typingElements.forEach((element) => {
        const text = element.innerText.trim();
        element.innerText = ""; // Clear existing text
        setTimeout(() => typeEffect(element, text), 500);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const typingElements = document.querySelectorAll(".intro p");

    function typeEffect(element, text, index = 0) {
        if (index < text.length) {
            element.innerHTML = text.slice(0, index + 1) + "<span class='cursor'>|</span>";
            setTimeout(() => typeEffect(element, text, index + 1), 100);
        } else {
            element.innerHTML = text; // Remove cursor after typing finishes
        }
    }

    typingElements.forEach((element) => {
        const text = element.innerText.trim();
        element.innerText = ""; // Clear existing text
        setTimeout(() => typeEffect(element, text), 500);
    });
});
