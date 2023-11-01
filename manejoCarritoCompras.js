import {carrito, carritoEnLocalStorage, actualizaContador, mostrarProductosEnCarrito} from "./carrito.js"

function agregarProducto(producto, cantidad) {

    const productoEnCarrito = carrito.find((el) => el.id === producto.id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
        productoEnCarrito.subTotal = productoEnCarrito.cantidad * productoEnCarrito.precio;
    } else {
        const nuevoProducto = {
            ...producto,
            cantidad: cantidad,
            subTotal: cantidad * producto.precio
        };
        carrito.push(nuevoProducto)

    }
    carritoEnLocalStorage();
    mostrarProductosEnCarrito();
    actualizaContador();

    localStorage.setItem("contadorCarrito", carrito.length);

    Toastify({
        text: `Se ha añadido ${producto.nombre} al carrito`,
        className: "info",
        gravity: "top",
        position: "center",
        style: {
            background: "linear-gradient(to right, #ec1534, #ec27ea)",
        }
    }).showToast();
}

function eliminarProducto(index) {
    const productoEnCarrito = carrito[index];
    if (productoEnCarrito.cantidad > 1) {
        productoEnCarrito.cantidad--;
        productoEnCarrito.subTotal = productoEnCarrito.cantidad * productoEnCarrito.precio;
    } else {
        carrito.splice(index, 1);
    }

    carritoEnLocalStorage();
    actualizaContador();
    localStorage.setItem("contadorCarrito", carrito.length);
    mostrarProductosEnCarrito();
}

function calcularTotalCarrito() {
    let total = 0;
    carrito.forEach((producto) => {
        total += producto.subTotal;
    });

    if (total > 0) {

    }

    return total;
}



export {agregarProducto, eliminarProducto, calcularTotalCarrito}