// script.js
document.addEventListener('DOMContentLoaded', function() {
    const contactoForm = document.getElementById('contactoForm');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    contactoForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío por defecto

        if (!isValidEmail(emailInput.value)) {
            emailError.textContent = 'Por favor, introduce un email válido.';
            return;
        } else {
            emailError.textContent = ''; // Limpia el mensaje de error si el email es válido
        }

        // Simulación de envío exitoso y mostrar modal
        mostrarModalConfirmacion();
        contactoForm.reset(); // Limpiar el formulario tras el envío (simulado)
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function mostrarModalConfirmacion() {
        const confirmacionModal = new bootstrap.Modal(document.getElementById('confirmacionModal'));
        confirmacionModal.show();
    }

    // Smooth scrolling para los enlaces del menú
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Elimina el '#'
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajuste por la altura del navbar fijo
                    behavior: 'smooth'
                });
            }

            // Cierra el menú responsive si está abierto (opcional)
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
});