let carrito = "";
let totalCarrito = 0;

function agregarProducto(item, precio) {
    carrito += item + "\n";
    totalCarrito += precio; 
    alert("Se ha agregado " + item + " al carrito. Total: $" + totalCarrito);
}

function mostrarCarrito() {
    if (carrito == "") {
        alert("El carrito está vacio.")
    } else {
        alert("Contenido del carrito: \n" + carrito + "\n Total: $" + totalCarrito)
    }
}

function vaciarCarrito() {
    carrito = "";
    totalCarrito = 0;
    alert("Se ha vaciado el carrito.")
}


function comprar() {
    let seguirComprando = true

    while (seguirComprando) {
        let opciones = prompt("¿Qué operación quieres realizar?. Ingresa el número de opción... \n 1) Comprar \n 2) Mostrar Carrito \n 3) Salir");

        switch (opciones) {
            case "1":
                seguirComprando = false;
                alert("Felicitaciones compra efectuada. Gracias por elegirnos!!!")
                break;
            case "2":
                mostrarCarrito();
                break;
            case "3":
                seguirComprando = false;
                break;
            default:
                alert("Opción no válida. Por favor, elige una opción válida.");
        }
    }
}
