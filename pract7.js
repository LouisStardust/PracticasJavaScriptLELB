function calcularHorasExtras() {
    const horasTrabajadas = parseFloat(document.getElementById('horasTrabajadas').value);
    const salarioPorHora = parseFloat(document.getElementById('salarioPorHora').value);

    if (horasTrabajadas > 40 && salarioPorHora > 0) {
        const horasExtras = horasTrabajadas - 40;
        let dineroExtra = 0;

        if (horasExtras <= 8) {
            dineroExtra = horasExtras * salarioPorHora * 2;
        } else {
            dineroExtra = (8 * salarioPorHora * 2) + ((horasExtras - 8) * salarioPorHora * 3);
        }

        document.getElementById('resultado').innerHTML = `Tu paga por horas extras sera de: $${dineroExtra.toFixed(2)}`;
    } else {
        document.getElementById('resultado').innerHTML = "Por favor, ingrese una cantidad válida de horas trabajadas y tu salario por hora.";
    }
}
