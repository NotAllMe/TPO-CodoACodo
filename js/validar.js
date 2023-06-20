const formulario = document.querySelector('.contacto-form');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(event) {

    event.preventDefault();

    const nombreInput = document.getElementById('nombre');
    const nombre = nombreInput.value.trim();
    const nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s']{5,}$/;

    const telefonoInput = document.getElementById('telefono');
    const telefono = telefonoInput.value.trim();
    const telefonoValido = /^\d{8,15}$/;


    const domicilioInput = document.getElementById('domicilio');
    const domicilio = domicilioInput.value.trim();
    const domicilioValido = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\d\s']{4,}$/

    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const emailValido = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    

    if (!nombreValido.test(nombre)) {
        alert('Ingresar un nombre válido (sin números ni caracteres especiales).');
        nombreInput.focus();
        return;
    }

    if (!telefonoValido.test(telefono)) {
        alert('Ingresar un número de teléfono valido');
        telefonoInput.focus();
        return;
    }

    if (!domicilioValido.test(domicilio))  {
        alert('Ingresar un domicilio valido');
        domicilioInput.focus();
        return;
    }

    if (!emailValido.test(email)) {
        alert('Ingresar un email valido');
        emailInput.focus();
        return;
    }
    formulario.submit();
}