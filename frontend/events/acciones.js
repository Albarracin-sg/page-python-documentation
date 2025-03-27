// Funcionalidad para manejar pestañas
const tabButtons = document.querySelectorAll('.tab-button'); // Selecciona todos los botones de pestañas
const tabContents = document.querySelectorAll('.tab-content'); // Selecciona todos los contenidos de pestañas

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Desactivar todas las pestañas removiendo la clase 'active'
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Activar la pestaña seleccionada
        button.classList.add('active'); // Marca el botón como activo
        const tabId = button.getAttribute('data-tab'); // Obtiene el ID del contenido asociado
        document.getElementById(tabId).classList.add('active'); // Activa el contenido correspondiente
    });
});

// Funcionalidad para el botón "Volver arriba"
const backToTopButton = document.getElementById('backToTop'); // Selecciona el botón

window.addEventListener('scroll', () => {
    // Muestra el botón si la página ha sido desplazada más de 300px
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Permite que al hacer clic en el botón, la página vuelva arriba con un efecto suave
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Funcionalidad para navegación suave entre secciones
const navLinks = document.querySelectorAll('nav a'); // Selecciona todos los enlaces dentro del nav

navLinks.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Evita la navegación predeterminada
        
        const targetId = this.getAttribute('href'); // Obtiene el destino del enlace
        const targetElement = document.querySelector(targetId); // Encuentra el elemento destino
        
        if (targetElement) {
            const headerOffset = 60; // Ajuste para la altura del encabezado
            const elementPosition = targetElement.getBoundingClientRect().top; // Posición relativa al viewport
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset; // Calcula la posición final

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth' // Desplazamiento suave
            });
        }
    });
});


