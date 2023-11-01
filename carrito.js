import cargarProductos  from "./manejoApi.js";
import {agregarProducto, eliminarProducto, calcularTotalCarrito} from "./manejoCarritoCompras.js";

let productos = []
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const botonAuriculares = document.querySelector("#auriculares");
const botonMouse = document.querySelector("#mouse");
const botonTeclado = document.querySelector("#teclado");
const botonWebcam = document.querySelector("#webcam");
const botonParlantes = document.querySelector("#parlantes");
const textoCategoria = document.querySelector("#textoCategoria")
const volverBtn = document.querySelector("#volverBtn");
const productosContainer = document.querySelector('#productosContainer');
const carritoCompras = document.querySelector("#mostrarProductos");
const sidenav = document.querySelector("#sidenav-7");
const inputBuscador = document.querySelector("#buscador");
const botonBuscar = document.querySelector("#botonBuscar");
const carousel = document.querySelector("#carouselExampleIndicators");
const dataInfo = document.querySelector("#dataPagos");
const botonesCategoria = document.querySelectorAll(".categoria-btn");
const contenedorFiltros = document.querySelector("#contenedorFiltros");
const noEncontrado = document.querySelector("#noEncontrado");
const slider = document.querySelector("#slider");
const bannerMiddle = document.querySelector("#bannerMiddle");
const logoInicio = document.querySelector("#inicio");
const botonComprar = document.querySelector("#btnComprar");

function mostrarCategorias(textIngresado, orden) {

    carousel.style.display = 'none';
    dataInfo.classList.remove('hidden');
    botonAuriculares.style.display = 'none';
    botonMouse.style.display = 'none';
    botonTeclado.style.display = 'none';
    botonWebcam.style.display = 'none';
    botonParlantes.style.display = 'none';
    textoCategoria.style.display = 'none';
    volverBtn.classList.remove('hidden');
    contenedorFiltros.style.display = "block";
    bannerMiddle.style.display = "none";

    productosContainer.innerHTML = '';

    let productosAordenar = productos.filter(producto => producto.categoria === textIngresado || producto.nombre.toLowerCase().includes(textIngresado))

    if (orden === 'menorPrecio') {
        productosAordenar = productosAordenar.sort(ordenarPorPrecioAscendente);
    } else if (orden === 'mayorPrecio') {
        productosAordenar = productosAordenar.sort(ordenarPorPrecioDescendente);
    } else if (orden === 'nombreAscendente') {
        productosAordenar = productosAordenar.sort(ordenarNombreAscendente);
    } else if (orden === 'nombreDescendente') {
        productosAordenar = productosAordenar.sort(ordenarNombreDescendente);
    }

    productosAordenar.forEach(producto => {
        const productoElemento = document.createElement('div');
        productoElemento.className = 'bg-white rounded-lg shadow-xl hover:shadow-gray-500 border-double border-4 hover:border-indigo-600 p-8 m-4 flex flex-col items-center border border-slate-400'
        productoElemento.innerHTML = `        
        <div class="flex flex-col items-center w-32 h-64">
        <button class="producto-card" data-id="${producto.id}">
        <img class="w-36 object-cover mb-2 mx-auto rounded-t" src="${producto.image}" alt="${producto.nombre}"> 
        <h2 class="text-sm mb-1 text-center">${producto.nombre}</h2>
        <p class="font-bold text-lg mt-10">Precio: $${producto.precio}</p>          
        </button>
        </div>
        `;

        const botonProducto = productoElemento.querySelector('.producto-card');
        botonProducto.addEventListener('click', () => {
            Swal.fire({
                title: producto.nombre,
                html: `
            <div class="flex">
                <img src="${producto.image}" alt="foto de ${producto.nombre}" class="" style="max-height: 350px;"> 
                <div>
                     <p class="font-bold text-3xl text-blue-500 text-left">$ ${producto.precio}</p>
                    <div class="flex items-center mt-8">                        
                        <button class="bg-gray-200 px-2.5 py-1 rounded-l hover:bg-gray-300 decrease-btn">-</button>
                        <span class="mx-2 cantidad">${producto.cantidad}</span>
                        <button class="bg-gray-200 px-2 py-1 rounded-r hover:bg-gray-300 increase-btn">+</button>
                    </div>
                    <p class="mt-8 font-bold text-left text-black">Descripción</p>
                    <p class="mt-2 text-sm text-left mb-16">${producto.desc}</p>                   
                        <button id="btnAgregar" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded 11">Agregar al carrito</button>
                </div>
            </div>
        `,
                imageHeight: 350,
                width: 950,
                imageAlt: 'A tall image',
                customClass: {
                    title: 'ml-64 font-bold text-black text-3xl w-1/2'
                },
                allowOutsideClick: false,
                showCloseButton: true,
                showConfirmButton: false,
            })

            const modal = document.querySelector('.swal2-modal');
            const decreaseBtn = modal.querySelector('.decrease-btn');
            const increaseBtn = modal.querySelector('.increase-btn');
            const cantidadElement = modal.querySelector('.cantidad');


            decreaseBtn.addEventListener('click', function (event) {
                event.stopPropagation();
                if (producto.cantidad > 1) {
                    producto.cantidad--;
                    cantidadElement.textContent = producto.cantidad;
                }
            });

            increaseBtn.addEventListener('click', function (event) {
                event.stopPropagation();
                producto.cantidad++;
                cantidadElement.textContent = producto.cantidad;
            });

            modal.addEventListener('click', function (event) {
                if (event.target.id === 'btnAgregar') {
                    const cantidadSeleccionada = productos[producto.id].cantidad;
                    agregarProducto(producto, cantidadSeleccionada);
                }
            });

        });

        productosContainer.appendChild(productoElemento);
    });
}

function ordenarPorPrecioAscendente(a, b) {
    return a.precio - b.precio;
}

function ordenarPorPrecioDescendente(a, b) {
    return b.precio - a.precio;
}

function ordenarNombreAscendente(a, b) {
    const nombreA = a.nombre.toLowerCase();
    const nombreB = b.nombre.toLowerCase();
    if (nombreA < nombreB) {
        return -1
    }
    if (nombreA > nombreB) {
        return 1
    }
    return 0;
}

function ordenarNombreDescendente(a, b) {
    const nombreA = a.nombre.toLowerCase();
    const nombreB = b.nombre.toLowerCase();
    if (nombreA > nombreB) {
        return -1;
    }
    if (nombreA < nombreB) {
        return 1;
    }
    return 0;
}

function mostrarFiltros(textIngresado) {

    contenedorFiltros.innerHTML = '';

    const cuotas = document.createElement("div");
    cuotas.innerHTML = "⭐ ¡12 cuotas sin interés!";
    cuotas.className = "text-sm font-bold mb-8"

    contenedorFiltros.appendChild(cuotas);

    const ordernarPor = document.createElement("div");
    ordernarPor.textContent = "Ordenar por...";
    ordernarPor.className = "text-sm font-bold mb-2"

    contenedorFiltros.appendChild(ordernarPor);

    const divsFiltros1 = document.createElement("div");
    divsFiltros1.className = "flex items-center mb-2";

    const labelMenorPrecio = document.createElement("label");
    labelMenorPrecio.setAttribute("for", "menorPrecio");
    labelMenorPrecio.className = "mr-2";
    labelMenorPrecio.textContent = "Menor Precio";

    const inputMenorPrecio = document.createElement("input");
    inputMenorPrecio.setAttribute("type", "radio");
    inputMenorPrecio.setAttribute("id", "menorPrecio");
    inputMenorPrecio.setAttribute("name", "orden");
    inputMenorPrecio.setAttribute("value", "menorPrecio");
    inputMenorPrecio.className = "mr-2"

    inputMenorPrecio.addEventListener('change', function () {
        if (inputMenorPrecio.checked) {
            mostrarCategorias(textIngresado, 'menorPrecio');
        }
    });

    divsFiltros1.appendChild(labelMenorPrecio);
    divsFiltros1.appendChild(inputMenorPrecio);

    const divsFiltros2 = document.createElement("div");
    divsFiltros2.className = "flex items-center mb-2"

    const labelMayorPrecio = document.createElement("label");
    labelMayorPrecio.setAttribute("for", "mayorPrecio");
    labelMayorPrecio.className = "mr-2";
    labelMayorPrecio.textContent = "Mayor Precio";

    const inputMayorPrecio = document.createElement("input");
    inputMayorPrecio.setAttribute("type", "radio");
    inputMayorPrecio.setAttribute("id", "mayorPrecio");
    inputMayorPrecio.setAttribute("name", "orden");
    inputMayorPrecio.setAttribute("value", "mayorPrecio");
    inputMayorPrecio.className = "mr-2"

    inputMayorPrecio.addEventListener('change', function () {
        if (inputMayorPrecio.checked) {
            mostrarCategorias(textIngresado, 'mayorPrecio');
        }
    });

    divsFiltros2.appendChild(labelMayorPrecio);
    divsFiltros2.appendChild(inputMayorPrecio);

    const divsFiltros3 = document.createElement("div");
    divsFiltros3.className = "flex items-center mb-2";

    const labelAz = document.createElement("label");
    labelAz.setAttribute("for", "a_z");
    labelAz.className = "mr-2";
    labelAz.textContent = "Ordenar A - Z";

    const inputAz = document.createElement("input");
    inputAz.setAttribute("type", "radio");
    inputAz.setAttribute("id", "a_z");
    inputAz.setAttribute("name", "orden");
    inputAz.setAttribute("value", "a_z");
    inputAz.className = "mr-2";

    inputAz.addEventListener('change', function () {
        if (inputAz.checked) {
            mostrarCategorias(textIngresado, 'nombreAscendente');
        }
    });

    divsFiltros3.appendChild(labelAz);
    divsFiltros3.appendChild(inputAz);

    const divsFiltros4 = document.createElement("div");
    divsFiltros4.className = "flex items-center mb-2";

    const labelZa = document.createElement("label");
    labelZa.setAttribute("for", "z_a");
    labelZa.className = "mr-2";
    labelZa.textContent = "Ordenar Z - A";

    const inputZa = document.createElement("input");
    inputZa.setAttribute("type", "radio");
    inputZa.setAttribute("id", "z_a");
    inputZa.setAttribute("name", "orden");
    inputZa.setAttribute("value", "z_a");
    inputZa.className = "mr-2";

    inputZa.addEventListener('change', function () {
        if (inputZa.checked) {
            mostrarCategorias(textIngresado, 'nombreDescendente');
        }
    });

    divsFiltros4.appendChild(labelZa);
    divsFiltros4.appendChild(inputZa);

    contenedorFiltros.appendChild(divsFiltros1);
    contenedorFiltros.appendChild(divsFiltros2);
    contenedorFiltros.appendChild(divsFiltros3);
    contenedorFiltros.appendChild(divsFiltros4);

    contenedorFiltros.classList.remove('hidden');
}

function barraLateral() {

    if (sidenav.style.transform === "translateX(100%)") {
        sidenav.classList.remove('invisible');
        sidenav.style.transform = "translateX(0)";
    } else {
        sidenav.style.transform = "translateX(100%)";
    }
    mostrarProductosEnCarrito();
};

function mostrarProductosEnCarrito() {
    const articulosCarrito = document.querySelector("#listaCarrito");

    articulosCarrito.innerHTML = "";

    carrito.forEach((producto, index) => {
        const productoCarrito = document.createElement('li');
        productoCarrito.classList.add('text-white', 'text-left', 'ml-4', 'mb-6', 'text-sm');
        productoCarrito.innerHTML = `${producto.nombre} <br> Cantidad: ${producto.cantidad} <button class="eliminar-btn bg-red-600 rounded-md text-white text-md font-bold ml-24 px-1">X</button> <br> Subtotal: $${producto.subTotal}
        `;

        const botonEliminar = productoCarrito.querySelector('.eliminar-btn');
        botonEliminar.addEventListener('click', (event) => {
            event.stopPropagation();
            eliminarProducto(index);
            mostrarProductosEnCarrito();
        });
        articulosCarrito.appendChild(productoCarrito);
    });


    const totalCarrito = document.createElement('div');
    totalCarrito.classList.add('text-white', 'font-bold');
    const total = calcularTotalCarrito();
    totalCarrito.innerHTML = `TOTAL:$${calcularTotalCarrito()}`
    totalCarrito.id = 'totalCarrito';
    articulosCarrito.appendChild(totalCarrito);

    if (total > 0) {
        if (!botonComprar) {
            const nuevoBotonComprar = document.createElement('button');
            nuevoBotonComprar.id = "btnComprar";
            nuevoBotonComprar.className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 w-44 mx-5 rounded mt-5 flex self-center";
            nuevoBotonComprar.textContent = "Comprar";
            nuevoBotonComprar.style.display = "block";
            nuevoBotonComprar.addEventListener('click', () => {
                pagarConMercadoPago()
            });
            articulosCarrito.appendChild(nuevoBotonComprar);
        }
    } else {
        totalCarrito.innerHTML = "El carrito está vacio 😢"
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

function carritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

function mostrarProductosFiltrados(productosFiltrados) {
    carousel.style.display = 'none';
    dataInfo.classList.remove('hidden');
    botonAuriculares.style.display = 'none';
    botonMouse.style.display = 'none';
    botonTeclado.style.display = 'none';
    botonWebcam.style.display = 'none';
    botonParlantes.style.display = 'none';
    textoCategoria.style.display = 'none';
    volverBtn.classList.remove('hidden')
    bannerMiddle.style.display = "none";
    contenedorFiltros.style.display = "block"


    productosContainer.innerHTML = "";

    const hayCoincidencia = productosFiltrados.length > 0;

    if (hayCoincidencia) {
        noEncontrado.classList.add('hidden');
        productosFiltrados.forEach(producto => {
            const productoElemento = document.createElement('div');
            productoElemento.className = 'bg-white rounded-lg shadow-xl hover:shadow-gray-500 border-double border-4 hover:border-indigo-600 p-8 m-4 flex flex-col items-center border border-slate-400'
            productoElemento.innerHTML = `        
            <div class="flex flex-col items-center w-32 h-64">
            <button class="producto-card" data-id="${producto.id}">
            <img class="w-36 object-cover mb-2 mx-auto rounded-t" src="${producto.image}" alt="${producto.nombre}"> 
            <h2 class="text-sm mb-1 text-center">${producto.nombre}</h2>
            <p class="font-bold text-lg mt-10">Precio: $${producto.precio}</p>          
            </button>
            </div>
            `;

            const botonProducto = productoElemento.querySelector('.producto-card');
            botonProducto.addEventListener('click', () => {
                Swal.fire({
                    title: producto.nombre,
                    html: `
            <div class="flex">
                <img src="${producto.image}" alt="foto de ${producto.nombre}" class="" style="max-height: 350px;"> 
                <div>
                     <p class="font-bold text-3xl text-blue-500 text-left">$ ${producto.precio}</p>
                    <div class="flex items-center mt-8">                        
                        <button class="bg-gray-200 px-2.5 py-1 rounded-l hover:bg-gray-300 decrease-btn">-</button>
                        <span class="mx-2 cantidad">${producto.cantidad}</span>
                        <button class="bg-gray-200 px-2 py-1 rounded-r hover:bg-gray-300 increase-btn">+</button>
                    </div>
                    <p class="mt-8 font-bold text-left text-black">Descripción</p>
                    <p class="mt-2 text-sm text-left mb-16">${producto.desc}</p>                   
                        <button id="btnAgregar" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded 11">Agregar al carrito</button>
                </div>
            </div>
        `,
                    imageHeight: 350,
                    width: 950,
                    imageAlt: 'A tall image',
                    customClass: {
                        title: 'ml-64 font-bold text-black text-3xl w-1/2'
                    },
                    allowOutsideClick: false,
                    showCloseButton: true,
                    showConfirmButton: false,
                })

                const modal = document.querySelector('.swal2-modal');
                const decreaseBtn = modal.querySelector('.decrease-btn');
                const increaseBtn = modal.querySelector('.increase-btn');
                const cantidadElement = modal.querySelector('.cantidad');


                decreaseBtn.addEventListener('click', function (event) {
                    event.stopPropagation();
                    if (producto.cantidad > 1) {
                        producto.cantidad--;
                        cantidadElement.textContent = producto.cantidad;
                    }
                });

                increaseBtn.addEventListener('click', function (event) {
                    event.stopPropagation();
                    producto.cantidad++;
                    cantidadElement.textContent = producto.cantidad;
                });

                modal.addEventListener('click', function (event) {
                    if (event.target.id === 'btnAgregar') {
                        const cantidadSeleccionada = productos[producto.id].cantidad;
                        agregarProducto(producto, cantidadSeleccionada);
                    }
                });
            });
            productosContainer.appendChild(productoElemento);
        })
    } else {
        ocultarFiltro();
        noEncontrado.classList.remove('hidden');
        noEncontrado.innerHTML = '<p class="bg-white rounded-lg p-20 text-center">No se encontraron productos que coincidan con la búsqueda.</p>';
    }
}

function ocultarFiltro() {
    contenedorFiltros.classList.add('hidden');
}

botonAuriculares.addEventListener('click', () => {
    const categoria = botonAuriculares.getAttribute(`data-categoria`);
    mostrarCategorias(categoria);
    mostrarFiltros(categoria);
});

botonMouse.addEventListener('click', () => {
    const categoria = botonMouse.getAttribute(`data-categoria`);
    mostrarCategorias(categoria);
    mostrarFiltros(categoria);
});

botonTeclado.addEventListener('click', () => {
    const categoria = botonTeclado.getAttribute(`data-categoria`);
    mostrarCategorias(categoria);
    mostrarFiltros(categoria);
});

botonWebcam.addEventListener('click', () => {
    const categoria = botonWebcam.getAttribute(`data-categoria`);
    mostrarCategorias(categoria);
    mostrarFiltros(categoria);
});

botonParlantes.addEventListener('click', () => {
    const categoria = botonParlantes.getAttribute(`data-categoria`);
    mostrarCategorias(categoria);
    mostrarFiltros(categoria);
});

carritoCompras.addEventListener("click", () => {
    barraLateral()
});

botonBuscar.addEventListener("click", function () {
    const textIngresado = inputBuscador.value.toLowerCase();

    if (textIngresado !== "") {
        const productosFiltrados = productos.filter((producto) => {
            const coincideNombre = producto.nombre.toLowerCase().includes(textIngresado);
            const coincideCategoria = producto.categoria.toLowerCase().includes(textIngresado);
            return coincideNombre || coincideCategoria;
        });

        mostrarProductosFiltrados(productosFiltrados);
        mostrarFiltros(textIngresado);
        bannerMiddle.classList.add('hidden');
    }
})

inputBuscador.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const textIngresado = inputBuscador.value.toLowerCase();

        if (textIngresado !== "") {
            const productosFiltrados = productos.filter((producto) => {
                const coincideNombre = producto.nombre.toLowerCase().includes(textIngresado);
                const coincideCategoria = producto.categoria.toLowerCase().includes(textIngresado);
                return coincideNombre || coincideCategoria;
            })
            mostrarProductosFiltrados(productosFiltrados)
            mostrarFiltros(textIngresado);
            bannerMiddle.classList.add('hidden');
        }
    }
})

botonesCategoria.forEach(boton => {
    boton.addEventListener("click", function () {
        noEncontrado.innerHTML = "";
        const categoria = boton.getAttribute(`data-categoria`);
        mostrarCategorias(categoria);
        mostrarFiltros(categoria);
    })
})

volverBtn.addEventListener('click', () => {

    productosContainer.innerHTML = '';

    carousel.style.display = 'block';
    dataInfo.classList.add('hidden');
    botonAuriculares.style.display = 'block';
    botonMouse.style.display = 'block';
    botonTeclado.style.display = 'block';
    botonWebcam.style.display = 'block';
    botonParlantes.style.display = 'block';
    volverBtn.classList.add('hidden');
    textoCategoria.style.display = 'block';
    textoCategoria.style.textAlign = 'center';
    contenedorFiltros.style.display = "none";
    noEncontrado.classList.add('hidden');
    bannerMiddle.style.display = "block";
});

logoInicio.addEventListener("click", () => {
    productosContainer.innerHTML = '';

    carousel.style.display = 'block';
    dataInfo.classList.add('hidden');
    botonAuriculares.style.display = 'block';
    botonMouse.style.display = 'block';
    botonTeclado.style.display = 'block';
    botonWebcam.style.display = 'block';
    botonParlantes.style.display = 'block';
    volverBtn.classList.add('hidden');
    textoCategoria.style.display = 'block';
    textoCategoria.style.textAlign = 'center';
    contenedorFiltros.style.display = 'none';
    noEncontrado.classList.add('hidden');
    bannerMiddle.style.display = 'block'

});

window.onload = function () {
    $('#slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 5
    });
};

async function productosApi () {
    try {
        productos = await cargarProductos()
    } catch (error) {
        console.log('Error:', error);
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

sidenav.style.transform = "translateX(100%)";
contenedorFiltros.style.display = "none"

actualizaContador()
productosApi()


export {carrito, carritoEnLocalStorage, actualizaContador, mostrarProductosEnCarrito} 

