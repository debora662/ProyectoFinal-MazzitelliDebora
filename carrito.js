let carrito = [];

const productos = [{ nombre: "Auriculares", precio: 3200, subTotal: 3200, cantidad: 1 },
{ nombre: "Mouse", precio: 3000, subTotal: 3000, cantidad: 1 },
{ nombre: "Teclado", precio: 3900, subTotal: 3900, cantidad: 1 },
{ nombre: "WebCam", precio: 4200, subTotal: 4200, cantidad: 1 },
{ nombre: "Parlantes", precio: 4800, subTotal: 4800, cantidad: 1 }]

function agregarProducto(itemNombre) {

    const enCarrito = carrito.find((el) => el.nombre === itemNombre);

    if (enCarrito) {
        enCarrito.cantidad++;
        enCarrito.subTotal = enCarrito.cantidad * enCarrito.precio;
    } else {
        const producto = productos.find((el) => el.nombre === itemNombre);
        if (producto) {
            carrito.push({ ...producto });
        }
    }
    alert("El producto " + itemNombre + " fue agregado con éxito");
}

function mostrarCarrito() {

    if (carrito.length === 0) {
        alert("El carrito está vacio.")
    } else {
        let resumenCarrito = "CONTENIDO DEL CARRITO: \n\n";

        carrito.forEach((item) => {
            resumenCarrito += "Producto: " + item.nombre + "\nCantidad: " + item.cantidad + "\nSubtotal: $" + item.subTotal + "\n\n";
        })

        const total = carrito.reduce((acc, item) => acc + item.subTotal, 0);
        resumenCarrito += "TOTAL DEL CARRITO: $" + total;

        alert(resumenCarrito)
    }
}

function eliminarProducto() {
    const nombreProducto = prompt("¿Qué producto desea eliminar?");

    const producto = carrito.find((el) => el.nombre === nombreProducto);

    if (nombreProducto) {
        const indiceProducto = carrito.indexOf(producto);
        carrito.splice(indiceProducto, 1);
        alert("El producto " + nombreProducto + " fue eliminado.")
    }
}

function comprar() {
    let seguirComprando = true

    while (seguirComprando) {
        let opciones = prompt("¿Estás seguro que quieres realizar la compra ? Ingresa el número de opción para confirmar... \n 1) Comprar \n 2) Mostrar Carrito \n 3) Salir");

        switch (opciones) {
            case "1":
                seguirComprando = false;
                alert("Felicitaciones, compra efectuada. Gracias por elegirnos!!!")
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



