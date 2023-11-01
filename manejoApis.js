
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

async function cargarProductos() {
    const api = "https://653276fad80bd20280f59481.mockapi.io/api/productos"
    try {
        const response = await fetch(api);
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error:', error);
    }
}

async function pagarConMercadoPago() {
    const items = carrito.map((producto) => {
        return {
            title: producto.nombre,
            description: producto.descripcion,
            quantity: producto.cantidad,
            currency_id: 'ARS',
            unit_price: producto.precio,
        };
    });

    try {
        const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: 'POST',
            headers: {
                Authorization: "Bearer TEST-8833293876625925-081318-eee760da7dbe58f4a684f933b7f48738-23398645",
            },
            body: JSON.stringify({
                items: items,
            }),
        });

        const preference = await response.json();

        const nuevaVentana = window.open(preference.init_point, '_blank');

        const intervalo = setInterval(function () {
            if (nuevaVentana.closed) {
                clearInterval(intervalo);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Tu compra en E-TechUniverse ha sido exitosa!!',
                    showConfirmButton: false,
                    timer: 4000
                })
            }
        }, 1000)
        borrarCarrito()
        actualizaContador()
    } catch (error) {
        console.error('Error al crear la preferencia de pago:', error);
    }
}

function borrarCarrito() {
    carrito = [];
    localStorage.clear();
}

function actualizaContador() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const contadorCarrito = document.querySelector("#contadorCarrito");

    const totalCantidadCarrito = carrito.reduce((total, producto) => {
        return total + producto.cantidad;
    }, 0);

    contadorCarrito.innerText = totalCantidadCarrito;

    if (totalCantidadCarrito > 0) {
        contadorCarrito.classList.remove("hidden");
    } else {
        contadorCarrito.classList.add("hidden");
    }

    localStorage.setItem("contadorCarrito", totalCantidadCarrito.toString());
}

export { cargarProductos, pagarConMercadoPago, carrito, actualizaContador }