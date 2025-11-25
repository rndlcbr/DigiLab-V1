// Select all nav items
const navItems = document.querySelectorAll('.nav-item');

// Add click event for each
navItems.forEach(item => {
    item.addEventListener('click', () => {
        const url = item.getAttribute('data-link');
        window.location.href = url; // Navigate to the page
    });
});


//For Images in home
const images = document.querySelectorAll('.image');

    images.forEach(img => {
        img.addEventListener('click', () => {
            const url = img.getAttribute('data-link');
            if (url) {
                window.location.href = url;
            }
        });
    });

    document.querySelectorAll(".card").forEach(card => {
    const link = card.getAttribute("data-link");
    if (link) {
        card.style.cursor = "pointer";
        card.addEventListener("click", () => {
            window.location.href = link;
        });
    }
});

const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If on screen: Make visible
                entry.target.classList.add('is-visible');
            } else {
                // If OFF screen: Hide it again (Reset)
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.fade-on-scroll');
    scrollElements.forEach((el) => {
        observer.observe(el);
    });