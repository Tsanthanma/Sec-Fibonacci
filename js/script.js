function boton() {
    const posicion = parseInt(prompt("Ingrese la posición hasta la cual desea generar la secuencia Fibonacci:"));

    if (!isNaN(posicion) && posicion >= 0) {

        const secuencia = generarFibonacci(posicion);

        alert('Secuencia Fibonacci hasta la posición ' + posicion + ':\n' + secuencia.join(', '));
    } else {
        alert('Por favor, ingrese un número válido como posición mayor o igual a 0.');
    }
}

function generarFibonacci(posicion) {
    const secuencia = [];
    let a = 0, b = 1;
    for (let i = 0; i <= posicion; i++) {
        secuencia.push(a);
        const temp = a + b;
        a = b;
        b = temp;
    }
    return secuencia;
}