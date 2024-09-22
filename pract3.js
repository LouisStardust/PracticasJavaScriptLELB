function calcularDescuento() {
    const totalCompra = parseFloat(document.getElementById('totalCompra').value);
    const descuento = 0.15; // 15% de descuento

    if (!isNaN(totalCompra) && totalCompra > 0) {
        const montoDescuento = totalCompra * descuento;
        const totalPagar = totalCompra - montoDescuento;

        document.getElementById('resultado').innerHTML = 
            `El monto del descuento es: $${montoDescuento.toFixed(2)}<br>
            El total a pagar después del descuento es: $${totalPagar.toFixed(2)}`;
    } else {
        document.getElementById('resultado').innerHTML = "Por favor, ingrese un monto válido para la compra.";
    }
}
