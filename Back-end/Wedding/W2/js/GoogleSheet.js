const scriptURL = 'https://script.google.com/macros/s/AKfycbyaiJCEo3NiZ0F1SkaMXJD9yfdRvJ_ztQa4ZOum2BQrfy7nJx-82WGeyGdWmz9TB47x/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Muchas gracias por tu confirmación!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})