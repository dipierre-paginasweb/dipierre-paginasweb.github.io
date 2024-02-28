const scriptURL = 'https://script.google.com/macros/s/AKfycbx95FEYh4ddbxd58HvBWPtV5Z-p7zon-yAMK3BlkrYa3mQUyIAFW14qoAz7Sy_mibIL/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Muchas gracias por tu respuesta!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})