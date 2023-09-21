function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = 0;
    this.subTotal = 0;
}

const productos = [
    new Producto("Auriculares", 3200),
    new Producto("Mouse", 3000),
    new Producto("Teclado", 3900),
    new Producto("WebCam", 4200),
    new Producto("Parlantes", 4800)
];

let carrito = [];


function agregarProducto(itemNombre) {

    const producto = productos.find((el) => el.nombre === itemNombre);

    if (producto) {
        producto.cantidad++;
        producto.subTotal = producto.cantidad * producto.precio;

        const enCarrito = carrito.find((el) => el.nombre === itemNombre);

        if (!enCarrito) {
            carrito.push(producto)
        }
        alert(`El producto ${itemNombre} fue agregado con éxito.`);
    } else {
        alert(`El producto ${itemNombre} no existe.`);
    }
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
        alert(`El producto ${nombreProducto} fue eliminado.`);
    }
}

function comprar() {
    let seguirComprando = true;

    while (seguirComprando) {
        let opciones = prompt("¿Estás seguro que quieres realizar la compra ? Ingresa el número de opción para confirmar... \n 1) Comprar \n 2) Mostrar Carrito \n 3) Salir");

        switch (opciones) {
            case "1":
                seguirComprando = false;
                alert("Felicitaciones, compra efectuada. Gracias por elegirnos!!!");
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

const inputBuscador = document.querySelector("#buscador");
const boton = document.querySelector("#boton")


boton.addEventListener("click", function () {
    const textoIngresado = inputBuscador.value.toLowerCase();
    const filtrado = productos.filter((producto) => producto.nombre.toLowerCase().includes(textoIngresado));

    if (textoIngresado === "") {
        alert("Por favor, ingresa un término de búsqueda.");
        return;
    }

    if (filtrado.length > 0) {
        const productoEncontrado = filtrado.map((producto) => producto.nombre);
        alert(`Se encontró el siguiente producto: ${productoEncontrado}.`);
    } else {
        alert("No se encontró ningún producto.")
    }
})


