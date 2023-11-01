import { cargarProductos, pagarConMercadoPago, carrito, actualizaContador } from "./manejoApis.js";
import { agregarProducto, eliminarProducto, calcularTotalCarrito } from "./manejoCarritoCompras.js";
import { ordenarPorPrecioAscendente, ordenarPorPrecioDescendente, ordenarNombreAscendente, ordenarNombreDescendente, mostrarFiltros, mostrarProductosFiltrados } from "./interfazUsuario.js"

let productos = []

export const botonAuriculares = document.querySelector("#auriculares");
export const botonMouse = document.querySelector("#mouse");
export const botonTeclado = document.querySelector("#teclado");
export const botonWebcam = document.querySelector("#webcam");
export const botonParlantes = document.querySelector("#parlantes");
export const textoCategoria = document.querySelector("#textoCategoria")
export const volverBtn = document.querySelector("#volverBtn");
export const carousel = document.querySelector("#carouselExampleIndicators");
export const dataInfo = document.querySelector("#dataPagos");
export const contenedorFiltros = document.querySelector("#contenedorFiltros");
export const bannerMiddle = document.querySelector("#bannerMiddle");
export const logoInicio = document.querySelector("#inicio");
export const noEncontrado = document.querySelector("#noEncontrado");
export const productosContainer = document.querySelector('#productosContainer');
export const carritoCompras = document.querySelector("#mostrarProductos");
export const sidenav = document.querySelector("#sidenav-7");
export const inputBuscador = document.querySelector("#buscador");
export const botonBuscar = document.querySelector("#botonBuscar");
export const botonesCategoria = document.querySelectorAll(".categoria-btn");
export const slider = document.querySelector("#slider");
export const botonComprar = document.querySelector("#btnComprar");

export function categorias(textIngresado, orden) {

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

function carritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

botonAuriculares.addEventListener('click', () => {
    const categoria = botonAuriculares.getAttribute(`data-categoria`);
    categorias(categoria);
    mostrarFiltros(categoria);
});

botonMouse.addEventListener('click', () => {
    const categoria = botonMouse.getAttribute(`data-categoria`);
    categorias(categoria);
    mostrarFiltros(categoria);
});

botonTeclado.addEventListener('click', () => {
    const categoria = botonTeclado.getAttribute(`data-categoria`);
    categorias(categoria);
    mostrarFiltros(categoria);
});

botonWebcam.addEventListener('click', () => {
    const categoria = botonWebcam.getAttribute(`data-categoria`);
    categorias(categoria);
    mostrarFiltros(categoria);
});

botonParlantes.addEventListener('click', () => {
    const categoria = botonParlantes.getAttribute(`data-categoria`);
    categorias(categoria);
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
        categorias(categoria);
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

async function productosApi() {
    try {
        productos = await cargarProductos()
    } catch (error) {
        console.log('Error:', error);
    }
}

sidenav.style.transform = "translateX(100%)";
contenedorFiltros.style.display = "none"

actualizaContador()
productosApi()


export { carrito, carritoEnLocalStorage, actualizaContador, mostrarProductosEnCarrito }


