import { categorias, carousel, dataInfo, botonAuriculares, botonMouse, botonTeclado, botonWebcam, botonParlantes, textoCategoria, volverBtn, bannerMiddle, contenedorFiltros } from "./carrito.js";

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
            categorias(textIngresado, 'menorPrecio');
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
            categorias(textIngresado, 'mayorPrecio');
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
            categorias(textIngresado, 'nombreAscendente');
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
            categorias(textIngresado, 'nombreDescendente');
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

export { ordenarPorPrecioAscendente, ordenarPorPrecioDescendente, ordenarNombreAscendente, ordenarNombreDescendente, mostrarFiltros, mostrarProductosFiltrados }