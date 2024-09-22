function calcularGanancia() {
    const capital = parseFloat(document.getElementById('capital').value);
    const tasaInteres = 0.02;  // 2% mensual

    if (!isNaN(capital) && capital > 0) {
        const ganancia = capital * tasaInteres;
        const total = capital + ganancia;
        document.getElementById('resultado').innerHTML = 
            `Después de un mes, usted tendrá $${total.toFixed(2)} (Ganancia: $${ganancia.toFixed(2)}).`;
    } else {
        document.getElementById('resultado').innerHTML = "Por favor, ingrese un capital válido.";
    }
}
