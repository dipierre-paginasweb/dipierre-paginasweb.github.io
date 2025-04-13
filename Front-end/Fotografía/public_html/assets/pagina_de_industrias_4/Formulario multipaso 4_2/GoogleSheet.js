

const scriptURL = 'https://script.google.com/macros/s/AKfycbxvwTW034FQE15IacotRoO12U40S3jurwLUb0J9ErUj5HVk7ndLc9VmdASqg73pEiUn6Q/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => {
   if (response.ok) {
     window.location.href = 'https://dipierre-paginasweb.com/'; // Cambia 'tu_pagina_de_destino.html' por la URL de la página a la que deseas redirigir.
   } else {
     alert("Hubo un error al enviar el formulario.");
   }
 })
 .catch(error => console.error('¡Error!', error.message))
})