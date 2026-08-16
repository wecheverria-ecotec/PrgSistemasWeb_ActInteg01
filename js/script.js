// Variable y función requerida por el docente
let numButtonClicks = 0;

function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}

// Control del envío del formulario
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formContacto");

    if (formulario) {
        formulario.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita que la página se recargue

            // Ejecuta el contador del profesor
            buttonClicked();

            // Mensaje de éxito al usuario
            alert("¡Gracias por contactarte! Tu mensaje ha sido enviado correctamente.");
            
            // Limpia los campos del formulario
            formulario.reset();
        });
    }
});