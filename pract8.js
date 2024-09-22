function calcularUtilidad() {
    const salarioMensual = parseFloat(document.getElementById('salarioMensual').value);
    const antiguedad = parseFloat(document.getElementById('antiguedad').value);
    
    let porcentajeUtilidad = 0;

    if (antiguedad < 1) {
        porcentajeUtilidad = 5;
    } else if (antiguedad >= 1 && antiguedad < 2) {
        porcentajeUtilidad = 7;
    } else if (antiguedad >= 2 && antiguedad < 5) {
        porcentajeUtilidad = 10;
    } else if (antiguedad >= 5 && antiguedad < 10) {
        porcentajeUtilidad = 15;
    } else if (antiguedad >= 10) {
        porcentajeUtilidad = 20;
    }

    if (salarioMensual > 0 && antiguedad >= 0) {
        const utilidad = salarioMensual * (porcentajeUtilidad / 100);
        document.getElementById('resultado').innerHTML = `Tus utilidades son de: $${utilidad.toFixed(2)}`;
    } else {
        document.getElementById('resultado').innerHTML = "Por favor, ingrese un salario y una antigüedad válida.";
    }
}
