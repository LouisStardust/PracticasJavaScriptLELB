function calcularComision() {
    const sueldoBase = parseFloat(document.getElementById('sueldoBase').value);
    const venta1 = parseFloat(document.getElementById('venta1').value);
    const venta2 = parseFloat(document.getElementById('venta2').value);
    const venta3 = parseFloat(document.getElementById('venta3').value);

    const tasaComision = 0.10; // 10% de comisiones

    // Validar entradas
    if (!isNaN(sueldoBase) && sueldoBase >= 0 && 
        !isNaN(venta1) && venta1 >= 0 &&
        !isNaN(venta2) && venta2 >= 0 &&
        !isNaN(venta3) && venta3 >= 0) {

        // Calcular comisiones de las tres ventas
        const comision1 = venta1 * tasaComision;
        const comision2 = venta2 * tasaComision;
        const comision3 = venta3 * tasaComision;

        const totalComisiones = comision1 + comision2 + comision3;
        const salarioTotal = sueldoBase + totalComisiones;

        document.getElementById('resultado').innerHTML = 
            `El total de comisiones es: $${totalComisiones.toFixed(2)}<br>
            Su salario total con comisiones es: $${salarioTotal.toFixed(2)}`;
    } else {
        document.getElementById('resultado').innerHTML = 
            "Por favor, ingrese valores válidos para el sueldo y las ventas.";
    }
}
