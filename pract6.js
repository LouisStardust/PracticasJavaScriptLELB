function palabrasANumeros() {
    const entrada = document.getElementById('entrada').value;
    const palabras = entrada.split(',').map(palabra => palabra.trim());
    
    // Mapa de palabras a números
    const mapaNumeros = {
        'cero': 0, 'uno': 1, 'dos': 2, 'tres': 3, 'cuatro': 4,
        'cinco': 5, 'seis': 6, 'siete': 7, 'ocho': 8, 'nueve': 9
    };

    // Convertir las palabras a números
    const numeros = palabras.map(palabra => mapaNumeros[palabra.toLowerCase()] !== undefined ? mapaNumeros[palabra.toLowerCase()] : -1);

    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = `Resultado: [${numeros.join(', ')}]`;
}
