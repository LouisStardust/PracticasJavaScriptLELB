function calcularCalificacionFinal() {
    const parcial1 = parseFloat(document.getElementById('parcial1').value);
    const parcial2 = parseFloat(document.getElementById('parcial2').value);
    const parcial3 = parseFloat(document.getElementById('parcial3').value);
    const examenFinal = parseFloat(document.getElementById('examenFinal').value);
    const trabajoFinal = parseFloat(document.getElementById('trabajoFinal').value);

    // Validar las entradas
    if (!isNaN(parcial1) && parcial1 >= 0 && parcial1 <= 10 &&
        !isNaN(parcial2) && parcial2 >= 0 && parcial2 <= 10 &&
        !isNaN(parcial3) && parcial3 >= 0 && parcial3 <= 10 &&
        !isNaN(examenFinal) && examenFinal >= 0 && examenFinal <= 10 &&
        !isNaN(trabajoFinal) && trabajoFinal >= 0 && trabajoFinal <= 10) {

        // Cálculo del promedio de los parciales
        const promedioParciales = (parcial1 + parcial2 + parcial3) / 3;

        // Calificación final con los porcentajes dados
        const calificacionFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);

        document.getElementById('resultado').innerHTML = 
            `Su calificación final es: ${calificacionFinal.toFixed(2)}`;
    } else {
        document.getElementById('resultado').innerHTML = "Por favor, ingrese calificaciones válidas (entre 0 y 10).";
    }
}
