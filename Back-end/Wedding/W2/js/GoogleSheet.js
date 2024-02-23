const scriptURL = 'https://script.google.com/macros/s/AKfycbxwsoUtsYUKYBCofsbflP8Z4JN_N3zt9IPksJx5nEZp_hVjFXxdeGfsoeYdORfxXmj2VQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    if (response.ok) {
      window.location.href = 'https://dipierre-paginasweb.github.io/Back-end/Wedding/W1/Succesfull#success.html'; // Cambia 'tu_pagina_de_destino.html' por la URL de la página a la que deseas redirigir.
    } else {
      alert("Hubo un error al enviar el formulario.");
    }
  })
  .catch(error => console.error('¡Error!', error.message))
 })