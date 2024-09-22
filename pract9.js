function validarCampo(campo) {
    const id = campo.id;
    const valor = campo.value;
    const resultado = document.getElementById('resultado');
    
    switch (id) {
        case 'nombre':
        case 'comentarios':
            if (valor.trim() === '') {
                alert('El campo ' + id + ' es obligatorio.');
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(valor)) {
                alert('Por favor ingresa un email valido.');
            }
            break;
        case 'comentarios':
            if (valor.length > 50) {
                alert('El campo de comentarios no debe exceder los 50 caracteres.');
            }
            break;
        case 'password':
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
            if (!passwordRegex.test(valor)) {
                alert('La contraseña debe tener al menos 6 caracteres, incluyendo una letra mayúscula, una letra minúscula y un dígito.');
            }
            break;
    }
}

function validarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const comentarios = document.getElementById('comentarios').value;
    const password = document.getElementById('password').value;
    const checkbox = document.getElementById('checkbox').checked;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (!nombre || !email || !comentarios || !password || !checkbox) {
        alert('Todos los campos obligatorios deben ser completados.');
        return false;
    }
    
    if (!emailRegex.test(email)) {
        alert('Por favor ingresa un email valido.');
        return false;
    }
    
    if (comentarios.length > 50) {
        alert('El campo de comentarios no debe exceder los 50 caracteres.');
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert('La contraseña debe tener al menos 6 caracteres, incluyendo una letra mayúscula, una letra minúscula y un dígito.');
        return false;
    }

    return true;
}
