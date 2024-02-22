const scriptURL = 'https://script.google.com/macros/s/AKfycbxwsoUtsYUKYBCofsbflP8Z4JN_N3zt9IPksJx5nEZp_hVjFXxdeGfsoeYdORfxXmj2VQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Muchas gracias por tu confirmación!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})