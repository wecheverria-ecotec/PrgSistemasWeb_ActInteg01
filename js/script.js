// ==========================================
// 1. VARIABLES Y FUNCIONES DE CONTROL (DOCENTE)
// ==========================================
let numButtonClicks = 0;

function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    
    const contenedorMensaje = document.getElementById("mainDiv");
    if (contenedorMensaje) {
        contenedorMensaje.textContent = "Button Clicked times: " + numButtonClicks;
    }
}

// ==========================================
// 2. GESTIÓN DEL EVENTO DOM, NAVEGACIÓN Y VALIDACIONES
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    
    // --- Manejo de Navegación Suave (Solo enlaces internos con #) ---
    const enlacesInternos = document.querySelectorAll('a[href^="#"]');

    enlacesInternos.forEach(enlace => {
        enlace.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Validación y Envío del Formulario ---
    const formulario = document.getElementById("formContacto");

    if (formulario) {

        formulario.addEventListener("submit", function(event) {
            // Previene el envío inmediato para validar
            event.preventDefault();

            // Captura y limpia espacios al inicio/final de las entradas
            const nombre = document.getElementById("nombre")?.value.trim();
            const telefono = document.getElementById("telefono")?.value.trim();
            const correo = document.getElementById("correo")?.value.trim();
            const mensaje = document.getElementById("mensaje")?.value.trim();

            // 1. Validación de campos vacíos
            if (!nombre || !telefono || !correo || !mensaje) {
                alert("Por favor, llena todos los campos. No se permiten entradas vacías.");
                return;
            }

            // 2. Validación estricta de sólo letras y espacios para el Nombre
            const regexSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
            if (!regexSoloLetras.test(nombre)) {
                alert("El campo Nombre debe contener únicamente letras.");
                return;
            }

            // 3. Validación estricta de sólo números para el Teléfono
            const regexSoloNumeros = /^[0-9]+$/;
            if (!regexSoloNumeros.test(telefono)) {
                alert("El campo Teléfono debe contener únicamente números.");
                return;
            }

            // Si todas las validaciones pasan con éxito:
            buttonClicked();
            alert("¡Gracias por contactarte, " + nombre + "! Tu mensaje ha sido enviado correctamente.");
            formulario.reset();
        });
    }
});