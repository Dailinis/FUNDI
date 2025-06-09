document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar una vez que se anima
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.2 // El elemento es visible en un 20%
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});