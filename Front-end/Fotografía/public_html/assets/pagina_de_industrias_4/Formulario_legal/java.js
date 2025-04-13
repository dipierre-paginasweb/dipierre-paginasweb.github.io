document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("msform");
    const fieldsets = form.querySelectorAll("fieldset");
    const nextButtons = form.querySelectorAll(".next");
    const prevButtons = form.querySelectorAll(".previous");
    const progressBarItems = document.querySelectorAll("#progressbar li");
  
    let currentStep = 0;
    let isAnimating = false;
  
    // Función para mostrar el paso actual y ocultar los demás con transición
    function showStep(stepIndex) {
      if (isAnimating) return;
      isAnimating = true;
  
      const currentFieldset = fieldsets[currentStep];
      const nextFieldset = fieldsets[stepIndex];
  
      currentFieldset.style.opacity = 0;
      currentFieldset.style.transform = "translateX(-50px)";
  
      setTimeout(() => {
        currentFieldset.style.display = "none";
        nextFieldset.style.display = "block";
  
        setTimeout(() => {
          nextFieldset.style.opacity = 1;
          nextFieldset.style.transform = "translateX(0)";
          isAnimating = false;
        }, 100);
      }, 300);
  
      currentStep = stepIndex;
      updateProgressBar(currentStep);
    }
  
    // Función para actualizar la barra de progreso
    function updateProgressBar(stepIndex) {
      progressBarItems.forEach((item, index) => {
        if (index < stepIndex) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }
  
    // Función para manejar el botón "Next"
    function handleNextButtonClick() {
      if (currentStep < fieldsets.length - 1) {
        showStep(currentStep + 1);
      }
    }
  
    // Función para manejar el botón "Previous"
    function handlePrevButtonClick() {
      if (currentStep > 0) {
        showStep(currentStep - 1);
      }
    }
  
    // Asignar controladores de eventos a los botones "Next" y "Previous"
    nextButtons.forEach((button) => {
      button.addEventListener("click", handleNextButtonClick);
    });
  
    prevButtons.forEach((button) => {
      button.addEventListener("click", handlePrevButtonClick);
    });
  
    // Mostrar el primer paso al cargar la página
    showStep(currentStep);
  });
  