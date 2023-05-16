function calcularTotal() {
    // Obtener la cantidad de tickets
    var cantidadTickets = parseInt(document.getElementById('inputCantidad').value);

    // Obtener el valor de la categoría seleccionada
    var categoria = document.getElementById('inputCategoria').value;

    // Calcular el descuento correspondiente según la categoría seleccionada
    var descuento = 0;
    if (categoria === '1') {
        descuento = 0.8; // 80% de descuento para estudiantes
    } else if (categoria === '2') {
        descuento = 0.3; // 30% de descuento para trainees
    } else if (categoria === '3') {
        descuento = 0.15; // 15% de descuento para juniors
    }

    // Calcular el total a pagar
    var total = cantidadTickets * 200;
    total = total - (total * descuento);

    // Mostrar el total a pagar en la sección correspondiente
    document.getElementById('totalPagar').innerHTML = 'Total a Pagar: $' + total.toFixed(2);
    console.log(total);
}

function limpiarInputs() {
    document.getElementById('inputNombre').value = '';
    document.getElementById('inputPassword').value = '';
    document.getElementById('inputCorreo').value = '';
    document.getElementById('inputCantidad').value = '0';
    document.getElementById('inputCategoria').value = '1';
}