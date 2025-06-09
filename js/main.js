document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling para la navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Cerrar menú móvil si está abierto
            if (document.body.classList.contains('nav-open')) {
                document.body.classList.remove('nav-open');
                document.querySelector('.main-nav').classList.remove('active');
            }
        });
    });

    // Cambiar fondo del header al hacer scroll
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(33, 37, 41, 1)'; // Más opaco
        } else {
            header.style.backgroundColor = 'rgba(33, 37, 41, 0.9)'; // Semitransparente
        }
    });


    

    // Menú Hamburguesa para móviles
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        document.body.classList.toggle('nav-open'); // Agrega una clase al body para bloquear scroll si es necesario
    });
});// js/main.js (Añade esto dentro del evento 'DOMContentLoaded')

// ... (código existente) ...

    // Control del enlace de Administrador oculto
    const adminLinkContainer = document.querySelector('.admin-link-container');
    let konamiCode = []; // Para la combinación de teclas (ej. Konami Code)
    const secretCombo = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']; // Ejemplo de combinación

    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        // Mantener el array pequeño, solo los últimos caracteres
        if (konamiCode.length > secretCombo.length) {
            konamiCode.shift(); // Elimina el primer elemento
        }

        // Comprobar si la secuencia coincide
        if (konamiCode.join('') === secretCombo.join('')) {
            adminLinkContainer.style.display = 'block';
            alert('¡Modo Administrador desbloqueado!');
            konamiCode = []; // Resetear el código
        }
    });

    // Opcional: Si quieres que el enlace se oculte de nuevo al recargar,
    // asegúrate de que no haya una condición de 'isAdmin' en localStorage.
    // Si quieres que persista, combínalo con la Opción A:
    // if (localStorage.getItem('isAdmin') === 'true') { adminLinkContainer.style.display = 'block'; }


// ... (resto del código) ...


// js/main.js (Ejemplo conceptual - Requiere un endpoint de backend)

// ... (código existente) ...

