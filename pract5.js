function calcularEdad() {
    const dia = parseInt(document.getElementById('diaNacimiento').value);
    const mes = parseInt(document.getElementById('mesNacimiento').value);
    const ano = parseInt(document.getElementById('anoNacimiento').value);
    const hoy = new Date();

    // Función para verificar si un año es bisiesto
    function esBisiesto(año) {
        return (año % 4 === 0 && (año % 100 !== 0 || año % 400 === 0));
    }

    // Días máximos en cada mes
    const diasMaximos = {
        1: 31, 2: esBisiesto(ano) ? 29 : 28, 3: 31, 4: 30, 5: 31, 6: 30,
        7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
    };

    if (dia >= 1 && dia <= diasMaximos[mes] &&
        mes >= 1 && mes <= 12 &&
        ano >= 1900 && ano <= hoy.getFullYear()) {

        const fechaNacimiento = new Date(ano, mes - 1, dia);
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const mesActual = hoy.getMonth();
        const diaActual = hoy.getDate();

        // Ajustar si no ha cumplido años en el año actual
        if (mesActual < fechaNacimiento.getMonth() || 
            (mesActual === fechaNacimiento.getMonth() && diaActual < fechaNacimiento.getDate())) {
            edad--;
        }

        document.getElementById('resultado').innerHTML = `Tu edad es: ${edad} años.`;
    } else {
        document.getElementById('resultado').innerHTML = "Por favor, ingrese una fecha válida.";
    }
}

