const scriptURL = 'https://script.google.com/macros/s/AKfycbyIUVks8Teo1Tf2-eF0ObSXuvPRrIfCvoqVO2puV5reHUZlT4FSWIom8cWwoRxJmEUs/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Muchas Gracias por tu respuesta" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})