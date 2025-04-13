// Espera a que se cargue el documento
document.addEventListener("DOMContentLoaded", function () {
    // Obtén todos los botones con la clase "custom-button"
    const buttons = document.querySelectorAll(".custom-button");

    // Elimina la clase "initial-hidden" de cada botón después de un retraso
    buttons.forEach((button, index) => {
        setTimeout(() => {
            button.classList.remove("initial-hidden");
        }, index * 200); // Cambia el valor de tiempo según tus preferencias
    });
});
